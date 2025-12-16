import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [files, setFiles] = useState([]);
    const [category, setCategory] = useState('General');
    const [images, setImages] = useState([]);
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();
    let API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    API_BASE_URL = API_BASE_URL.trim();
    if (!API_BASE_URL.endsWith('/')) {
        API_BASE_URL += '/';
    }

    const token = localStorage.getItem('adminToken');
    const username = localStorage.getItem('adminUser');

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        fetchImages();
    }, [navigate, token]);

    const fetchImages = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}gallery`);
            setImages(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!files || files.length === 0) return;
        if (files.length > 10) {
            alert("You can only upload up to 10 images at a time");
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i]);
        }
        formData.append('category', category);

        setUploading(true);
        try {
            await axios.post(`${API_BASE_URL}gallery/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFiles([]);
            fetchImages();
            alert('Images uploaded successfully!');
        } catch (error) {
            console.error(error);
            alert('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this image?')) return;

        try {
            await axios.delete(`${API_BASE_URL}gallery/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchImages();
        } catch (error) {
            console.error(error);
            alert('Delete failed');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-secondary/30 font-sans">
            {/* Header */}
            <div className="bg-white shadow-md border-b border-primary/20 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary text-white p-2 rounded-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold font-serif text-dark">Admin Dashboard</h1>
                            <p className="text-xs text-gray-500">Welcome back, <span className="font-semibold text-primary">{username || 'Admin'}</span></p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="/" target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            View Site
                        </a>
                        <button
                            onClick={handleLogout}
                            className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 text-sm font-bold flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar / Upload Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-28">
                            <h2 className="text-xl font-bold mb-6 text-dark flex items-center gap-2 pb-4 border-b border-gray-100">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                Upload Image
                            </h2>
                            <form onSubmit={handleUpload} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                    <div className="relative">
                                        <select
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                                        >
                                            <option value="General">General</option>
                                            <option value="Gold">Gold</option>
                                            <option value="Silver">Silver</option>
                                            <option value="Diamond">Diamond</option>
                                            <option value="Shop">Shop</option>
                                            <option value="Festival">Festival</option>
                                        </select>
                                        <div className="absolute right-3 top-3.5 pointer-events-none text-gray-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
                                    <div className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${files.length > 0 ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary hover:bg-gray-50'}`}>
                                        <input
                                            type="file"
                                            multiple
                                            onChange={(e) => setFiles(Array.from(e.target.files))}
                                            className="hidden"
                                            id="file-upload"
                                            accept="image/*"
                                        />
                                        <label htmlFor="file-upload" className="cursor-pointer block w-full h-full flex items-center justify-center">
                                            {files.length > 0 ? (
                                                <div className="text-primary font-medium flex flex-col items-center">
                                                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    <span className="truncate max-w-[200px] text-center">
                                                        {files.length} file{files.length > 1 ? 's' : ''} selected
                                                    </span>
                                                    <span className="text-xs text-gray-500 mt-1">Click to change</span>
                                                </div>
                                            ) : (
                                                <div className="text-gray-500 flex flex-col items-center">
                                                    <svg className="w-10 h-10 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    <span>Click to upload</span>
                                                    <span className="text-xs mt-1">or drag and drop</span>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={files.length === 0 || uploading}
                                    className={`w-full py-3 rounded-lg font-bold text-white shadow-md transition-all transform active:scale-95 ${files.length === 0 || uploading
                                        ? 'bg-gray-400 cursor-not-allowed shadow-none'
                                        : 'bg-primary hover:bg-yellow-600 hover:shadow-lg'
                                        }`}
                                >
                                    {uploading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Uploading...
                                        </span>
                                    ) : 'Upload to Gallery'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Main Content / Gallery Grid */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 min-h-[500px]">
                            <h2 className="text-xl font-bold mb-6 text-dark flex items-center gap-2 pb-4 border-b border-gray-100 justify-between">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                    Gallery Items
                                </div>
                                <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{images.length} Items</span>
                            </h2>

                            {images.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {images.map((img) => (
                                        <div key={img._id} className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all">
                                            <img
                                                src={img.imageUrl}
                                                alt={img.category}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                                <span className="text-xs text-white/80 font-medium mb-1">{img.category}</span>
                                                <button
                                                    onClick={() => handleDelete(img._id)}
                                                    className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-2 rounded transition-colors flex items-center justify-center gap-1"
                                                >
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
                                    <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p>No images in gallery yet</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
