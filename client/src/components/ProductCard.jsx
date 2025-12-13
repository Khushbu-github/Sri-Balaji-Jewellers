import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="relative overflow-hidden h-64">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                        to={`/product/${product.id}`}
                        className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-primary transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">{product.category}</span>
                    <span className="bg-secondary text-dark text-xs font-bold px-2 py-1 rounded border border-primary/20">{product.purity}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <span className="font-bold text-lg">{product.weight}</span>
                    <span className="text-sm text-gray-500 italic">{product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
