import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { goldImages, silverImages, diamondImages } from '../data/collectionImages';

import Women1 from '../assets/Women1.png';
import Women2 from '../assets/Women2.png';
import Women3 from '../assets/Women3.png';
import Women4 from '../assets/Women4.png';

import Men1 from '../assets/Men1.png';
import Men2 from '../assets/Men2.png';
import Men3 from '../assets/Men3.png';
import Men4 from '../assets/Men4.png';

import Kid1 from '../assets/Kid1.png';
import Kid2 from '../assets/Kid2.png';
import Kid3 from '../assets/Kid3.png';
import Kid4 from '../assets/Kid4.png';

const Products = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category') || 'All';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedGender, setSelectedGender] = useState('Women');

    const categories = ['All', 'Gold', 'Silver', 'Diamond'];

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const genderImages = {
        Women: [Women1, Women2, Women3, Women4],
        Men: [Men1, Men2, Men3, Men4],
        Kids: [Kid1, Kid2, Kid3, Kid4]
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Shop By Gender Section */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-serif font-bold text-dark mb-8">Shop By Gender</h2>

                        {/* Gender Tabs */}
                        <div className="flex justify-center items-center gap-2 text-2xl font-serif mb-12">
                            <span
                                onClick={() => setSelectedGender('Women')}
                                className={`cursor-pointer transition-colors ${selectedGender === 'Women'
                                        ? 'text-primary font-bold'
                                        : 'text-gray-600 hover:text-primary hover:underline'
                                    }`}
                            >
                                Women's Jewellery
                            </span>
                            <span className="text-gray-400">|</span>
                            <span
                                onClick={() => setSelectedGender('Men')}
                                className={`cursor-pointer transition-colors ${selectedGender === 'Men'
                                        ? 'text-primary font-bold'
                                        : 'text-gray-600 hover:text-primary hover:underline'
                                    }`}
                            >
                                Men's Jewellery
                            </span>
                            <span className="text-gray-400">|</span>
                            <span
                                onClick={() => setSelectedGender('Kids')}
                                className={`cursor-pointer transition-colors ${selectedGender === 'Kids'
                                        ? 'text-primary font-bold'
                                        : 'text-gray-600 hover:text-primary hover:underline'
                                    }`}
                            >
                                Kids Jewellery
                            </span>
                        </div>
                    </div>

                    {/* Gender Images - Display only selected gender */}
                    <div className="mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {genderImages[selectedGender].map((img, index) => (
                                <div key={`${selectedGender}-${index}`} className="relative overflow-hidden group cursor-pointer rounded-lg aspect-[403/423]">
                                    <img
                                        src={img}
                                        alt={`${selectedGender} Jewellery ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Collection Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-dark mb-4">Our Collection</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of handcrafted jewellery, designed to add a touch of elegance to every occasion.</p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-12 flex-wrap gap-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-gray-700 hover:bg-secondary border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {/* Content */}
                {selectedCategory === 'All' ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[...goldImages, ...diamondImages, ...silverImages].map((img, index) => (
                            <div key={`all-${index}`} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src={img} alt={`Product ${index}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                            </div>
                        ))}
                    </div>
                ) : selectedCategory === 'Gold' ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {goldImages.map((img, index) => (
                            <div key={`gold-${index}`} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src={img} alt={`Gold Product ${index}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                            </div>
                        ))}
                    </div>
                ) : selectedCategory === 'Silver' ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {silverImages.map((img, index) => (
                            <div key={`silver-${index}`} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src={img} alt={`Silver Product ${index}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                            </div>
                        ))}
                    </div>
                ) : selectedCategory === 'Diamond' ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {diamondImages.map((img, index) => (
                            <div key={`diamond-${index}`} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src={img} alt={`Diamond Product ${index}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Products;
