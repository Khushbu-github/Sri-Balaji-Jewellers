import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[80vh] bg-dark flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Jewelry Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up">
                        Sri Balaji Jewellers
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide">
                        Timeless Elegance | Purest Gold | Exquisite Designs
                    </p>
                    <Link
                        to="/products"
                        className="inline-block bg-primary text-white text-lg font-bold px-8 py-4 rounded hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                    >
                        Explore Collection
                    </Link>
                </div>
            </div>

            {/* Featured Categories (Static for now) */}
            <div className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="section-title">Our Collections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {['Gold', 'Silver', 'Diamond'].map((category) => (
                            <Link to={`/products?category=${category}`} key={category} className="group relative h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer">
                                <img
                                    src={`/assets/${category.toLowerCase()}1.jpg`} // Placeholder path, needs real assets or placeholders
                                    alt={category}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x600?text=' + category }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                                    <div>
                                        <h3 className="text-3xl font-serif font-bold text-white mb-2">{category} Jewellery</h3>
                                        <span className="text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">Discover &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section Teaser */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6">
                            <div className="text-primary text-4xl mb-4">✦</div>
                            <h3 className="text-xl font-bold mb-2">Certified Purity</h3>
                            <p className="text-gray-600">100% Hallmarked Gold and Certified Diamonds.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-primary text-4xl mb-4">✦</div>
                            <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
                            <p className="text-gray-600">Bring your dream design to life with our expert craftsmen.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-primary text-4xl mb-4">✦</div>
                            <h3 className="text-xl font-bold mb-2">Heritage & Trust</h3>
                            <p className="text-gray-600">Serving generations with honesty and transparency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
