import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                    <Link to="/products" className="text-primary hover:underline">Back to Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/products" className="text-gray-500 hover:text-primary mb-8 inline-block">&larr; Back to Products</Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                        {/* In a real app, we would have a gallery slider here if multiple images */}
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Info Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold tracking-wider uppercase border border-primary/20">
                                {product.category}
                            </span>
                            <span className="text-gray-500 text-sm">ID: {product.id}</span>
                        </div>

                        <h1 className="text-4xl font-serif font-bold text-dark mb-4">{product.name}</h1>

                        <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                            <div>
                                <p className="text-gray-500 text-sm">Weight</p>
                                <p className="text-xl font-bold">{product.weight}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Purity</p>
                                <p className="text-xl font-bold">{product.purity}</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-2">Description</h3>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                            <p className="text-sm text-gray-500 mb-1">Price</p>
                            <p className="text-2xl font-bold text-primary">{product.price}</p>
                            <p className="text-xs text-gray-400 mt-1">* Prices are subject to gold rate fluctuations.</p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="/contact"
                                className="flex-1 bg-primary text-white text-center py-3 rounded-md font-bold hover:bg-yellow-600 transition-colors shadow-md"
                            >
                                Enquire Now
                            </a>
                            <button className="flex-1 border-2 border-primary text-primary py-3 rounded-md font-bold hover:bg-primary hover:text-white transition-colors">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
