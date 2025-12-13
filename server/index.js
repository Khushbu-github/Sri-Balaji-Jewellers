const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const configureCloudinary = require('./config/cloudinary');

dotenv.config();

connectDB();
configureCloudinary();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/gallery', require('./routes/gallery'));

app.get('/', (req, res) => {
    res.send('Sri Balaji Jewellers API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
