const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const Gallery = require('../models/Gallery');
const authMiddleware = require('../middleware/authMiddleware');
const fs = require('fs');

// Configure Multer for temp storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Ensure uploads folder exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// @route   GET /gallery
// @desc    Get all gallery images
// @access  Public
router.get('/', async (req, res) => {
    try {
        const images = await Gallery.find().sort({ createdAt: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   POST /gallery/upload
// @desc    Upload new image
// @access  Private
router.post('/upload', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'sribalaji'
        });

        // Delete local file after upload
        fs.unlinkSync(req.file.path);

        const newImage = new Gallery({
            imageUrl: result.secure_url,
            publicId: result.public_id,
            category: req.body.category || 'General'
        });

        const savedImage = await newImage.save();
        res.status(201).json(savedImage);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Upload failed', error: error.message });
    }
});

// @route   DELETE /gallery/:id
// @desc    Delete image
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const image = await Gallery.findById(req.params.id);

        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // Delete from Cloudinary
        await cloudinary.uploader.destroy(image.publicId);

        // Delete from DB
        await Gallery.deleteOne({ _id: req.params.id });

        res.json({ message: 'Image removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Delete failed' });
    }
});

module.exports = router;
