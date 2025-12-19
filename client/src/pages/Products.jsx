import { useState, useMemo, useEffect, useRef } from 'react';
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
    const initialCategory = queryParams.get('category') || 'Gold';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedGender, setSelectedGender] = useState('Women');
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [animateProducts, setAnimateProducts] = useState(false);

    const sectionRefs = useRef([]);
    const productsRef = useRef(null);

    const categories = ['Gold', 'Silver', 'Diamond'];

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        if (category && categories.includes(category)) {
            setSelectedCategory(category);
        }
    }, [location.search]);

    useEffect(() => {
        const observers = [];

        sectionRefs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setVisibleSections(prev => new Set([...prev, index]));
                            }
                        });
                    },
                    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
                );

                observer.observe(ref);
                observers.push(observer);
            }
        });

        // Products grid observer
        if (productsRef.current) {
            const productObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setAnimateProducts(true);
                        }
                    });
                },
                { threshold: 0.05 }
            );

            productObserver.observe(productsRef.current);
            observers.push(productObserver);
        }

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [selectedCategory, selectedGender]);

    // Reset animation when category changes
    useEffect(() => {
        setAnimateProducts(false);
        setTimeout(() => setAnimateProducts(true), 50);
    }, [selectedCategory]);

    const filteredProducts = useMemo(() => {
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const genderImages = {
        Women: [Women1, Women2, Women3, Women4],
        Men: [Men1, Men2, Men3, Men4],
        Kids: [Kid1, Kid2, Kid3, Kid4]
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-header {
                    opacity: 0;
                    animation: fadeInDown 0.6s ease-out forwards;
                }

                .animate-tabs {
                    opacity: 0;
                    animation: fadeInUp 0.6s ease-out 0.2s forwards;
                }

                .animate-section {
                    opacity: 0;
                }

                .animate-section.visible {
                    animation: fadeInUp 0.7s ease-out forwards;
                }

                .gender-image {
                    opacity: 0;
                }

                .gender-image.animate {
                    animation: scaleIn 0.6s ease-out forwards;
                }

                .gender-image.delay-1 {
                    animation-delay: 0.1s;
                }

                .gender-image.delay-2 {
                    animation-delay: 0.2s;
                }

                .gender-image.delay-3 {
                    animation-delay: 0.3s;
                }

                .gender-image.delay-4 {
                    animation-delay: 0.4s;
                }

                .filter-btn {
                    opacity: 0;
                }

                .filter-btn.visible {
                    animation: scaleIn 0.5s ease-out forwards;
                }

                .filter-btn.delay-1 {
                    animation-delay: 0.1s;
                }

                .filter-btn.delay-2 {
                    animation-delay: 0.2s;
                }

                .filter-btn.delay-3 {
                    animation-delay: 0.3s;
                }

                .filter-btn.delay-4 {
                    animation-delay: 0.4s;
                }

                .product-item {
                    opacity: 0;
                }

                .product-item.animate {
                    animation: scaleIn 0.5s ease-out forwards;
                }

                .product-item.stagger-1 {
                    animation-delay: 0.05s;
                }

                .product-item.stagger-2 {
                    animation-delay: 0.1s;
                }

                .product-item.stagger-3 {
                    animation-delay: 0.15s;
                }

                .product-item.stagger-4 {
                    animation-delay: 0.2s;
                }

                .product-item.stagger-5 {
                    animation-delay: 0.25s;
                }

                .product-item.stagger-6 {
                    animation-delay: 0.3s;
                }

                .product-item.stagger-7 {
                    animation-delay: 0.35s;
                }

                .product-item.stagger-8 {
                    animation-delay: 0.4s;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                

                {/* Our Collection Section */}
                <div
                    ref={el => sectionRefs.current[1] = el}
                    className={`text-center mb-12 animate-section ${visibleSections.has(1) ? 'visible' : ''}`}
                >
                    <h1 className="text-4xl font-serif font-bold text-dark mb-4">Our Collection</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our wide range of handcrafted jewellery, designed to add a touch of elegance to every occasion.
                    </p>
                </div>

                {/* Filters */}
                <div
                    ref={el => sectionRefs.current[2] = el}
                    className="flex justify-center mb-12 flex-wrap gap-4"
                >
                    {categories.map((cat, index) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-8 py-2 rounded-full font-medium transition-all duration-300 filter-btn ${visibleSections.has(2) ? 'visible' : ''} delay-${index + 1} ${selectedCategory === cat
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-gray-700 hover:bg-secondary border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div ref={productsRef}>
                    {selectedCategory === 'Gold' ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {goldImages.map((img, index) => (
                                <div
                                    key={`gold-${index}`}
                                    className={`aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 product-item ${animateProducts ? 'animate' : ''} stagger-${(index % 8) + 1}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Gold Product ${index}`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : selectedCategory === 'Silver' ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {silverImages.map((img, index) => (
                                <div
                                    key={`silver-${index}`}
                                    className={`aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 product-item ${animateProducts ? 'animate' : ''} stagger-${(index % 8) + 1}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Silver Product ${index}`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : selectedCategory === 'Diamond' ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {diamondImages.map((img, index) => (
                                <div
                                    key={`diamond-${index}`}
                                    className={`aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 product-item ${animateProducts ? 'animate' : ''} stagger-${(index % 8) + 1}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Diamond Product ${index}`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className={`product-item ${animateProducts ? 'animate' : ''} stagger-${(index % 8) + 1}`}
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* Shop By Gender Section */}
                <div
                    ref={el => sectionRefs.current[0] = el}
                    className="mb-16"
                >
                    <div className="text-center mt-20 mb-8">
                        <h2 className="text-4xl font-serif font-bold text-dark mb-8 animate-header">
                            Shop By Gender
                        </h2>

                        {/* Gender Tabs */}
                        <div className="flex justify-center items-center gap-2 text-2xl font-serif mb-12 animate-tabs">
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

                    {/* Gender Images */}
                    <div className="mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {genderImages[selectedGender].map((img, index) => (
                                <div
                                    key={`${selectedGender}-${index}`}
                                    className={`relative overflow-hidden group cursor-pointer rounded-lg aspect-[403/423] gender-image animate delay-${index + 1}`}
                                >
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
            </div>
        </div>
    );
};

export default Products;