import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import G1 from '../assets/BG.jpeg';
import S4 from '../assets/BS.jpeg';
import D4 from '../assets/BD.jpeg';
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';
import Banner3 from '../assets/Banner3.png';
import C1 from '../assets/C2.jpg';
import C2 from '../assets/G6.jpg';
import C3 from '../assets/G5.jpg';
import Silver1 from '../assets/Silver1.png';
import Silver2 from '../assets/Silver2.png';
import GoldA1 from "../assets/GoldA1.jpeg";
import GoldA2 from "../assets/GoldA2.jpeg";

import Earing1 from '../assets/Earing1.png';
import Earing2 from '../assets/Earing2.png';
import Earing3 from '../assets/Earing3.png';
import Earing4 from '../assets/Earing4.png';
import Gold1 from '../assets/Gold1.png';
import B1 from '../assets/B1.png';
import B2 from '../assets/B2.png';
import Gold2 from '../assets/Gold2.png';
import Gold3 from '../assets/Gold3.png';
import Gold4 from '../assets/Gold4.png';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

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

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
  };

  const desktopSlides = [
    { image: Banner1 },
    { image: Banner2 },
    { image: Banner3 },
  ];

  const mobileSlides = [
    { image: Gold1 },
    { image: B1 },
    { image: B2 },
  ];

  return (
    <div className="min-h-screen">
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-section {
          opacity: 0;
        }

        .animate-section.visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-item-1 {
          opacity: 0;
        }

        .animate-item-1.visible {
          animation: fadeInLeft 0.6s ease-out 0.2s forwards;
        }

        .animate-item-2 {
          opacity: 0;
        }

        .animate-item-2.visible {
          animation: fadeInRight 0.6s ease-out 0.3s forwards;
        }

        .animate-item-3 {
          opacity: 0;
        }

        .animate-item-3.visible {
          animation: fadeInUp 0.6s ease-out 0.4s forwards;
        }

        .animate-item-4 {
          opacity: 0;
        }

        .animate-item-4.visible {
          animation: fadeInUp 0.6s ease-out 0.5s forwards;
        }

        .animate-scale {
          opacity: 0;
        }

        .animate-scale.visible {
          animation: scaleIn 0.7s ease-out forwards;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }

        .stagger-2 {
          animation-delay: 0.2s;
        }

        .stagger-3 {
          animation-delay: 0.3s;
        }

        .stagger-4 {
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Hero Section Carousel */}
      <div className="relative w-full bg-dark overflow-hidden">


        <div className="block md:hidden">
          <Slider {...settings} className="w-full">
            {mobileSlides.map((slide, index) => (
              <div key={index} className="relative w-full outline-none">
                <img
                  src={slide.image}
                  alt={`Mobile Slide ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Handpicked Collection */}
      <section
        ref={el => sectionRefs.current[0] = el}
        className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-amber-50 to-white animate-section ${visibleSections.has(0) ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="hidden md:block text-center mb-10 animate-item-1 visible">
            <h1 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
              Welcome to Sri Balaji Jewellers
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto italic">
              Experience the perfect blend of trust, purity, and timeless craftsmanship.
              Your destination for exquisite jewellery in Bengaluru.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 text-amber-900">Handpicked Just for You!</h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10">Our lightweight collection keeps you stylish and comfortable from dawn to dusk</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className={`md:col-span-1 h-[400px] md:h-[600px] relative overflow-hidden group cursor-pointer rounded-lg animate-item-1 ${visibleSections.has(0) ? 'visible' : ''}`}>
              <img
                src={C2}
                alt="Handpicked C2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-4 h-[800px] md:h-[600px]">
              <div className={`flex-1 relative overflow-hidden group cursor-pointer rounded-lg animate-item-2 ${visibleSections.has(0) ? 'visible' : ''}`}>
                <img
                  src={C1}
                  alt="Handpicked C1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className={`flex-1 relative overflow-hidden group cursor-pointer rounded-lg animate-item-3 ${visibleSections.has(0) ? 'visible' : ''}`}>
                <img
                  src={C3}
                  alt="Handpicked C3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gold Collection */}
      {/* Gold Collection */}
      <section
        ref={el => (sectionRefs.current[2] = el)}
        className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gray-50 animate-section ${visibleSections.has(2) ? "visible" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 text-gray-800">
            Gold Collection
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10">
            Timeless gold crafted for every celebration!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image 1 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-item-1 ${visibleSections.has(2) ? "visible" : ""
                }`}
            >
              <div className="aspect-[1526/1024] w-full overflow-hidden">
                <img
                  src={GoldA1}
                  alt="Gold Collection 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image 2 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-item-2 ${visibleSections.has(2) ? "visible" : ""
                }`}
            >
              <div className="aspect-[1526/1024] w-full overflow-hidden">
                <img
                  src={GoldA2}
                  alt="Gold Collection 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Silver Collection */}
      <section
        ref={el => (sectionRefs.current[1] = el)}
        className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gray-50 animate-section ${visibleSections.has(1) ? "visible" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 text-gray-800">
            Silver Collection
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10">
            Where tradition meets silver sophistication!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image 1 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-item-1 ${visibleSections.has(1) ? "visible" : ""
                }`}
            >
              <div className="aspect-[1526/1024] w-full overflow-hidden">
                <img
                  src={Silver1}
                  alt="Silver Collection 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-item-2 ${visibleSections.has(1) ? "visible" : ""
                }`}
            >
              <div className="aspect-[1526/1024] w-full overflow-hidden">
                <img
                  src={Silver2}
                  alt="Silver Collection 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earring Collection */}
      <section
        ref={el => sectionRefs.current[2] = el}
        className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white animate-section ${visibleSections.has(2) ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 text-amber-900">Earring Collection</h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10">Our Exclusive Earring Collection</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[Earing1, Earing2, Earing3, Earing4].map((earing, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer rounded-lg aspect-[405/219] animate-scale ${visibleSections.has(2) ? 'visible' : ''} stagger-${index + 1}`}
              >
                <img
                  src={earing}
                  alt={`Earring ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemstone Jewellery */}
      <section
        ref={el => sectionRefs.current[3] = el}
        className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-amber-50 to-white animate-section ${visibleSections.has(3) ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 text-amber-900">Gemstone Jewellery</h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10">Capturing timeless grace in each precious stone</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[Gold1, Gold2, Gold3, Gold4].map((gold, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white animate-scale ${visibleSections.has(3) ? 'visible' : ''} stagger-${index + 1}`}
              >
                <img
                  src={gold}
                  alt={`Gold ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Collections */}
      <section
        ref={el => sectionRefs.current[4] = el}
        className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gray-50 animate-section ${visibleSections.has(4) ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800">Our Collections</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <Link
              to="/products?category=Gold"
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale ${visibleSections.has(4) ? 'visible' : ''} stagger-2`}
            >
              <img
                src={G1}
                alt="Gold Collection"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end pb-6">
                <h3 className="text-white text-2xl font-bold mb-2">Gold</h3>
                <span className="text-white text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Discover →
                </span>
              </div>
            </Link>

            <Link
              to="/products?category=Silver"
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale ${visibleSections.has(4) ? 'visible' : ''} stagger-3`}
            >
              <img
                src={S4}
                alt="Silver Collection"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end pb-6">
                <h3 className="text-white text-2xl font-bold mb-2">Silver</h3>
                <span className="text-white text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Discover →
                </span>
              </div>
            </Link>

            <Link
              to="/products?category=Diamond"
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale ${visibleSections.has(4) ? 'visible' : ''} stagger-4`}
            >
              <img
                src={D4}
                alt="Diamond Collection"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end pb-6">
                <h3 className="text-white text-2xl font-bold mb-2">Diamond</h3>
                <span className="text-white text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Discover →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section
        ref={el => sectionRefs.current[5] = el}
        className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 text-white animate-section ${visibleSections.has(5) ? 'visible' : ''}`}
        style={{ backgroundColor: 'rgb(82, 32, 30)' }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-scale ${visibleSections.has(5) ? 'visible' : ''} stagger-1`}>
              <div className="text-4xl mb-4">✦</div>
              <h3 className="text-xl font-bold mb-2">Certified Purity</h3>
              <p className="text-amber-100">100% Hallmarked Gold and Certified Diamonds.</p>
            </div>

            <div className={`text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-scale ${visibleSections.has(5) ? 'visible' : ''} stagger-2`}>
              <div className="text-4xl mb-4">✦</div>
              <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
              <p className="text-amber-100">Bring your dream design to life with our expert craftsmen.</p>
            </div>

            <div className={`text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-scale ${visibleSections.has(5) ? 'visible' : ''} stagger-3`}>
              <div className="text-4xl mb-4">✦</div>
              <h3 className="text-xl font-bold mb-2">Heritage & Trust</h3>
              <p className="text-amber-100">Serving generations with honesty and transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={el => sectionRefs.current[6] = el}
        className={`py-6 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-amber-50 animate-section ${visibleSections.has(6) ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-1 sm:mb-3 md:mb-4 text-amber-900 px-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-xs sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            Precious moments, priceless memories
          </p>

          {/* Testimonials Slider */}
          <div className="pb-8 sm:pb-10 md:pb-12">
            <Slider {...{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3500,
              arrows: true,
              responsive: [
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    centerMode: false
                  }
                }
              ]
            }}>
              {/* Testimonial 1 */}
              <div className="px-1 sm:px-4 py-3 sm:py-6">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 relative min-h-[220px] sm:min-h-[300px] flex flex-col mx-0.5">
                  <div className="absolute -top-2 sm:-top-4 left-4 sm:left-6">
                    <div className="bg-amber-400 text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-md">
                      "
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-8 flex flex-col h-full">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <div className="flex text-amber-400 text-sm sm:text-lg md:text-xl">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 sm:mb-6 italic text-[10px] sm:text-sm md:text-base flex-grow leading-relaxed">
                      "Absolutely stunning designs! I bought my wedding jewelry from Sri Balaji Jewellers and received countless compliments. The craftsmanship is impeccable and the staff was so helpful."
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                        P
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <h4 className="font-bold text-gray-900 text-xs sm:text-base">Priya Sharma</h4>
                        <p className="text-[10px] sm:text-sm text-gray-500">Jayanagar, Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="px-1 sm:px-4 py-3 sm:py-6">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 relative min-h-[220px] sm:min-h-[300px] flex flex-col mx-0.5">
                  <div className="absolute -top-2 sm:-top-4 left-4 sm:left-6">
                    <div className="bg-amber-400 text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-md">
                      "
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-8 flex flex-col h-full">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <div className="flex text-amber-400 text-sm sm:text-lg md:text-xl">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 sm:mb-6 italic text-[10px] sm:text-sm md:text-base flex-grow leading-relaxed">
                      "The custom design service is exceptional! They brought my vision to life perfectly. The quality of gold and diamonds is certified and genuine. Highly recommended!"
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                        R
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <h4 className="font-bold text-gray-900 text-xs sm:text-base">Rajesh Kumar</h4>
                        <p className="text-[10px] sm:text-sm text-gray-500">Indiranagar, Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="px-1 sm:px-4 py-3 sm:py-6">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 relative min-h-[220px] sm:min-h-[300px] flex flex-col mx-0.5">
                  <div className="absolute -top-2 sm:-top-4 left-4 sm:left-6">
                    <div className="bg-amber-400 text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-md">
                      "
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-8 flex flex-col h-full">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <div className="flex text-amber-400 text-sm sm:text-lg md:text-xl">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 sm:mb-6 italic text-[10px] sm:text-sm md:text-base flex-grow leading-relaxed">
                      "A family tradition for three generations! The trust and transparency Sri Balaji Jewellers offers is unmatched. Their silver collection is absolutely gorgeous."
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                        A
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <h4 className="font-bold text-gray-900 text-xs sm:text-base">Ananya Reddy</h4>
                        <p className="text-[10px] sm:text-sm text-gray-500">Koramangala, Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="px-1 sm:px-4 py-3 sm:py-6">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 relative min-h-[220px] sm:min-h-[300px] flex flex-col mx-0.5">
                  <div className="absolute -top-2 sm:-top-4 left-4 sm:left-6">
                    <div className="bg-amber-400 text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-md">
                      "
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-8 flex flex-col h-full">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <div className="flex text-amber-400 text-sm sm:text-lg md:text-xl">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 sm:mb-6 italic text-[10px] sm:text-sm md:text-base flex-grow leading-relaxed">
                      "Beautiful gemstone collection! I purchased an emerald necklace and it's even more stunning in person. The staff explained everything about the stones. Very knowledgeable team."
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                        M
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <h4 className="font-bold text-gray-900 text-xs sm:text-base">Meera Iyer</h4>
                        <p className="text-[10px] sm:text-sm text-gray-500">Malleshwaram, Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="px-1 sm:px-4 py-3 sm:py-6">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 relative min-h-[220px] sm:min-h-[300px] flex flex-col mx-0.5">
                  <div className="absolute -top-2 sm:-top-4 left-4 sm:left-6">
                    <div className="bg-amber-400 text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-md">
                      "
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-8 flex flex-col h-full">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <div className="flex text-amber-400 text-sm sm:text-lg md:text-xl">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 sm:mb-6 italic text-[10px] sm:text-sm md:text-base flex-grow leading-relaxed">
                      "Best place for bridal jewelry! The collection is vast and they helped me choose pieces that perfectly matched my outfit. The hallmarking certificate gave me complete peace of mind."
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                        S
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <h4 className="font-bold text-gray-900 text-xs sm:text-base">Sneha Patel</h4>
                        <p className="text-[10px] sm:text-sm text-gray-500">Whitefield, Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="px-1 sm:px-4 py-3 sm:py-6">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 relative min-h-[220px] sm:min-h-[300px] flex flex-col mx-0.5">
                  <div className="absolute -top-2 sm:-top-4 left-4 sm:left-6">
                    <div className="bg-amber-400 text-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold shadow-md">
                      "
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-8 flex flex-col h-full">
                    <div className="flex items-center mb-2 sm:mb-4">
                      <div className="flex text-amber-400 text-sm sm:text-lg md:text-xl">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3 sm:mb-6 italic text-[10px] sm:text-sm md:text-base flex-grow leading-relaxed">
                      "Excellent service and fair pricing! I've been buying from them for years. The exchange policy is transparent and they always update me on gold rates. Truly trustworthy jewelers."
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                        V
                      </div>
                      <div className="ml-2 sm:ml-4">
                        <h4 className="font-bold text-gray-900 text-xs sm:text-base">Vikram Singh</h4>
                        <p className="text-[10px] sm:text-sm text-gray-500">HSR Layout, Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          {/* Call-to-action */}
          <div className="text-center mt-6 sm:mt-8 px-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg md:text-xl">
              Join our family of satisfied customers
            </p>
            <Link
              to="/contact"
              className="inline-block bg-amber-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Our Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;