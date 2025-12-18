import { Routes, Route, useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/dashboard') || location.pathname === '/login';

  const phoneNumber = '+919620364631';
  const whatsappNumber = '919620364631';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}

      {/* Floating Contact Buttons */}
      {!isAdminRoute && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              WhatsApp
            </span>
          </button>

          {/* Phone Button */}
          <button
            onClick={handlePhoneClick}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Call Now
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;