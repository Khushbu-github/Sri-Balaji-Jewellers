import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">
              Sri Balaji Jewellers
            </h3>
            <p className="text-gray-400">
              Crafting timeless elegance since 1990. We offer a wide range of gold,
              silver, and diamond jewellery with certified purity.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-primary">Collections</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-primary">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary">Contact Us</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-primary">Admin Login</Link></li>
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
      </div>
    </footer>
  );
};

export default Footer;
