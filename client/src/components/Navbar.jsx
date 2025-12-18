import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Admin', path: '/login' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="shadow-lg sticky top-0 z-50" style={{ backgroundColor: 'rgb(82, 32, 30)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3">
                            <img src={logo} alt="Sri Balaji Jewellers" className="h-16 w-auto object-contain" />
                            <span className="text-xl md:text-2xl font-bold" style={{ color: '#FFD700' }}>
                                Sri Balaji Jewellers
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg font-medium transition-colors duration-300 ${
                                    isActive(link.path) 
                                        ? 'text-amber-300' 
                                        : 'text-gray-100 hover:text-amber-300'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-100 hover:text-amber-300 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ backgroundColor: 'rgb(72, 22, 20)' }}>
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    isActive(link.path)
                                        ? 'text-amber-300'
                                        : 'text-gray-100 hover:text-amber-300'
                                }`}
                                style={isActive(link.path) ? { backgroundColor: 'rgb(62, 12, 10)' } : {}}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(62, 12, 10)'}
                                onMouseLeave={(e) => {
                                    if (!isActive(link.path)) {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;