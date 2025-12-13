import { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
                // In production, use env variable or configured axios instance
                const res = await axios.get(`${API_BASE_URL}gallery`);
                setImages(res.data);
            } catch (error) {
                console.error('Error fetching gallery images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-dark mb-4">Our Gallery</h1>
                    <p className="text-gray-600">Glimpses of our showroom, events, and exclusive collections.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    images.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {images.map((img) => (
                                <div key={img._id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all h-64 cursor-pointer">
                                    <img
                                        src={img.imageUrl}
                                        alt={img.category}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-medium px-4 py-2 border border-white rounded mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            {img.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-lg">
                            <p className="text-gray-500">Gallery is being updated. Please check back later.</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Gallery;
