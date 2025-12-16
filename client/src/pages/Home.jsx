import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import All from '../assets/All.jpg';
import G1 from '../assets/G1.jpg';
import S4 from '../assets/S4.jpg';
import D4 from '../assets/D4.jpg';

import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';
import Banner3 from '../assets/Banner3.png';

import C1 from '../assets/C1.jpg';
import C2 from '../assets/G6.jpg';
import C3 from '../assets/D8.jpg';

import Silver1 from '../assets/Silver1.png';
import Silver2 from '../assets/Silver2.png';

import Earing1 from '../assets/Earing1.png';
import Earing2 from '../assets/Earing2.png';
import Earing3 from '../assets/Earing3.png';
import Earing4 from '../assets/Earing4.png';

import Gold1 from '../assets/Gold1.png';
import Gold2 from '../assets/Gold2.png';
import Gold3 from '../assets/Gold3.png';
import Gold4 from '../assets/Gold4.png';


const Home = () => {
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

    const slides = [
        {
            image: Banner1,
            title: "UNIQUE",
            subtitle: "JEWELRY FOR UNIQUE YOU",
            align: "justify-end text-center"
        },
        {
            image: Banner2,
            title: "DREAM DESTINATION",
            subtitle: "FOR WEDDING JEWELLERY SHOPPING",
            align: "justify-start text-left"
        },
        {
            image: Banner3,
            title: "WHY SETTLE FOR LIMITED OPTIONS?",
            subtitle: "CREATE YOUR OWN DESIGNS",
            align: "justify-start text-left"
        },

    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section Carousel */}
            <div className="relative w-full bg-dark overflow-hidden flex justify-center">
                <div className="w-full max-w-[1248px]">
                    <Slider {...settings} className="w-full">
                        {slides.map((slide, index) => (
                            <div key={index} className="relative w-full outline-none">
                                <div className="w-full">
                                    <img
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-auto block"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Handpicked Collection */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="section-title">Handpicked Just for You!</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our lightweight collection keeps you stylish and comfortable from dawn to dusk
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                        {/* Left Side (1 part) - C2 */}
                        <div className="md:col-span-1 h-[400px] md:h-[600px] relative overflow-hidden group cursor-pointer rounded-lg">
                            <img
                                src={C2}
                                alt="Handpicked C2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Right Side (2 parts) - C1 & C3 */}
                        <div className="md:col-span-2 flex flex-col gap-4 h-[800px] md:h-[600px]">
                            <div className="flex-1 relative overflow-hidden group cursor-pointer rounded-lg">
                                <img
                                    src={C1}
                                    alt="Handpicked C1"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex-1 relative overflow-hidden group cursor-pointer rounded-lg">
                                <img
                                    src={C3}
                                    alt="Handpicked C3"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* Silver Collection */}
<div className="py-8 sm:py-12 md:py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title">Silver Collection</h2>
        <p className="text-gray-600 text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            Where tradition meets silver sophistication!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
            <div className="relative overflow-hidden group cursor-pointer rounded-lg h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <img
                    src={Silver1}
                    alt="Silver Collection 1"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="relative overflow-hidden group cursor-pointer rounded-lg h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                <img
                    src={Silver2}
                    alt="Silver Collection 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
    </div>
</div>

            {/* Earring Collection */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="section-title">Earring Collection</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our Exclusive Earring Collection
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                        {[Earing1, Earing2, Earing3, Earing4].map((earing, index) => (
                            <div key={index} className="relative overflow-hidden group cursor-pointer rounded-lg aspect-[405/219]">
                                <img
                                    src={earing}
                                    alt={`Earring ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gemstone Jewellery */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="section-title">Gemstone Jewellery</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Capturing timeless grace in each precious stone
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                        {[Gold1, Gold2, Gold3, Gold4].map((gold, index) => (
                            <div key={index} className="relative overflow-hidden group cursor-pointer rounded-lg aspect-[405/494]">
                                <img
                                    src={gold}
                                    alt={`Gemstone ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Collections */}
            <div className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="section-title">Our Collections</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {/* All Collection */}
                        <Link to="/products" className="group relative h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer">
                            <img
                                src={All}
                                alt="All Collection"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">All Jewellery</h3>
                                    <span className="text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">Discover &rarr;</span>
                                </div>
                            </div>
                        </Link>

                        {/* Gold Collection */}
                        <Link to="/products?category=Gold" className="group relative h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer">
                            <img
                                src={G1}
                                alt="Gold Collection"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Gold</h3>
                                    <span className="text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">Discover &rarr;</span>
                                </div>
                            </div>
                        </Link>

                        {/* Silver Collection */}
                        <Link to="/products?category=Silver" className="group relative h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer">
                            <img
                                src={S4}
                                alt="Silver Collection"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Silver</h3>
                                    <span className="text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">Discover &rarr;</span>
                                </div>
                            </div>
                        </Link>

                        {/* Diamond Collection */}
                        <Link to="/products?category=Diamond" className="group relative h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer">
                            <img
                                src={D4}
                                alt="Diamond Collection"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Diamond</h3>
                                    <span className="text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">Discover &rarr;</span>
                                </div>
                            </div>
                        </Link>
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
