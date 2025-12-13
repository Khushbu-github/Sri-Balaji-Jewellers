import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category') || 'All';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    const categories = ['All', 'Gold', 'Silver', 'Diamond'];

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'All') return products;
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-xl text-gray-500">No products found in this category.</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
