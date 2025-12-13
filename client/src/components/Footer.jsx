const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-4">Sri Balaji Jewellers</h3>
                        <p className="text-gray-400">
                            Crafting timeless elegance since 1990. We offer a wide range of gold, silver, and diamond jewellery with certified purity.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/products" className="text-gray-400 hover:text-primary">Collections</a></li>
                            <li><a href="/gallery" className="text-gray-400 hover:text-primary">Gallery</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-primary">Contact Us</a></li>
                            <li><a href="/login" className="text-gray-400 hover:text-primary">Admin Login</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Jewelry Market, Main Road</li>
                            <li>City Name, State - 500001</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Email: contact@sribalaji.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sri Balaji Jewellers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
