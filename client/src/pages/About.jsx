import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';
import Banner3 from '../assets/Banner3.png';
import C1 from '../assets/BD.jpeg';
import C2 from '../assets/BG.jpeg';
import C3 from '../assets/All.jpg';
import Silver1 from '../assets/BS.jpeg';
import Gold1 from '../assets/Gold1.png';
import Slider from 'react-slick';

const About = () => {
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
        <div className="min-h-screen bg-gray-50">
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

                .animate-left {
                    opacity: 0;
                }

                .animate-left.visible {
                    animation: fadeInLeft 0.7s ease-out forwards;
                }

                .animate-right {
                    opacity: 0;
                }

                .animate-right.visible {
                    animation: fadeInRight 0.7s ease-out forwards;
                }

                .animate-scale {
                    opacity: 0;
                }

                .animate-scale.visible {
                    animation: scaleIn 0.6s ease-out forwards;
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

                .text-stagger-1 {
                    animation-delay: 0.15s;
                }

                .text-stagger-2 {
                    animation-delay: 0.25s;
                }

                .text-stagger-3 {
                    animation-delay: 0.35s;
                }
            `}</style>

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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Our Story */}
                <div
                    ref={el => sectionRefs.current[0] = el}
                    className="mb-20"
                >
                    <h2 className={`text-4xl font-serif font-bold text-dark mb-8 text-center animate-section ${visibleSections.has(0) ? 'visible' : ''}`}>
                        Our Story
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className={`animate-left ${visibleSections.has(0) ? 'visible' : ''}`}>
                            <img
                                src={C2}
                                alt="Sri Balaji Jewellers Store"
                                className="rounded-lg shadow-xl w-full h-auto object-cover"
                            />
                        </div>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p className={`animate-right ${visibleSections.has(0) ? 'visible' : ''} text-stagger-1`}>
                                <span className="font-bold text-primary">Sri Balaji Jewellers</span> is a name synonymous with trust, purity, and fine craftsmanship in the heart of Bengaluru. Conveniently located at Yashaswini Arcade, 1331, 50 Feet Main Road, Kumaraswamy Layout, Bengaluru – 560078, we are proud to be a one-stop destination for premium gold, silver, and diamond jewellery that blends tradition with modern elegance.
                            </p>
                            <p className={`animate-right ${visibleSections.has(0) ? 'visible' : ''} text-stagger-2`}>
                                With years of experience and deep understanding of customer preferences, Sri Balaji Jewellers offers an extensive range of jewellery articles crafted for every age group and every occasion. From children to elders, from everyday wear to grand celebrations, our collections are thoughtfully designed to cater to diverse tastes and lifestyles. We specialize in lightweight jewellery with unique and modern designs, ensuring comfort without compromising on beauty, purity, or value.
                            </p>
                            <p className={`animate-right ${visibleSections.has(0) ? 'visible' : ''} text-stagger-3`}>
                                Our showroom features a wide variety of gold, silver, and diamond jewellery, including necklaces, chains, bangles, bracelets, earrings, rings, pendants, mangalsutras, anklets, and complete bridal sets. Whether you are preparing for a wedding, celebrating a festival, marking a milestone, or simply looking for elegant daily-wear jewellery, our carefully curated collections offer something special for everyone.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 space-y-8 text-gray-700 text-lg leading-relaxed">
                        <p className={`animate-section ${visibleSections.has(0) ? 'visible' : ''}`}>
                            We take particular pride in our bridal jewellery collections, which are designed to complement both traditional and contemporary bridal styles. From classic South Indian bridal sets to modern, minimalistic designs, our bridal range reflects richness, elegance, and cultural heritage. Our festive collections capture the true spirit of celebration, offering jewellery that enhances the joy and vibrancy of every occasion—from Diwali and Akshaya Tritiya to weddings and family functions.
                        </p>
                        <p className={`animate-section ${visibleSections.has(0) ? 'visible' : ''}`}>
                            At Sri Balaji Jewellers, quality is never compromised. We deal only in best-quality gold, silver, and diamonds, maintaining strict standards in purity, craftsmanship, and finishing. Every piece is created with attention to detail, ensuring long-lasting beauty and customer satisfaction. Transparency and honesty are at the core of our business, making us a trusted jeweller for generations of families.
                        </p>
                        <p className={`animate-section ${visibleSections.has(0) ? 'visible' : ''}`}>
                            In addition to ready collections, we also offer customised jewellery services. Understanding that every customer is unique, we work closely with you to design jewellery that reflects your personal style, occasion, and budget. From concept to creation, our skilled craftsmen bring your ideas to life with precision and care.
                        </p>
                        <p className={`animate-section ${visibleSections.has(0) ? 'visible' : ''}`}>
                            Our expertise extends across various jewellery styles and techniques, including Kundan jewellery, Electro-form jewellery, CAD-designed jewellery, and many more contemporary and traditional forms. These advanced techniques allow us to create intricate designs, lightweight structures, and innovative patterns that appeal to modern preferences while preserving timeless charm.
                        </p>
                        <p className={`animate-section ${visibleSections.has(0) ? 'visible' : ''}`}>
                            We continuously update our collections to stay in tune with changing trends, offering designs that range from modern and minimalist to classic and traditional. Whether you prefer subtle elegance or bold statement pieces, our diverse range ensures that you find jewellery that resonates with your personality.
                        </p>
                        <p className={`animate-section ${visibleSections.has(0) ? 'visible' : ''}`}>
                            At Sri Balaji Jewellers, jewellery is more than just an accessory—it is an expression of emotion, tradition, and individuality. Our commitment to excellence, wide range of designs, customization options, and customer-first approach make us a preferred choice for jewellery lovers in Bengaluru.
                        </p>
                        <p className={`animate-section ${visibleSections.has(0) ? 'visible' : ''} font-bold text-primary text-center text-2xl pt-8`}>
                            We warmly invite you to visit our showroom and experience the perfect blend of craftsmanship, quality, and trust.
                        </p>
                    </div>
                </div>

                {/* Our Collections */}
                <div
                    ref={el => sectionRefs.current[1] = el}
                    className={`mb-20 bg-white p-12 rounded-xl shadow-lg animate-section ${visibleSections.has(1) ? 'visible' : ''}`}
                >
                    <h2 className="text-4xl font-serif font-bold text-dark mb-12 text-center">Our Collections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Gold Jewellery */}
                        <div className={`text-center group animate-scale ${visibleSections.has(1) ? 'visible' : ''} stagger-1`}>
                            <div className="overflow-hidden rounded-lg mb-4 shadow-md">
                                <img
                                    src={Gold1}
                                    alt="Gold Jewellery"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Gold Jewellery</h3>
                            <p className="text-gray-600">
                                Exquisite gold ornaments with certified purity, featuring traditional and modern designs for every occasion.
                            </p>
                        </div>

                        {/* Silver Collection */}
                        <div className={`text-center group animate-scale ${visibleSections.has(1) ? 'visible' : ''} stagger-2`}>
                            <div className="overflow-hidden rounded-lg mb-4 shadow-md">
                                <img
                                    src={Silver1}
                                    alt="Silver Collection"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-2">Silver Collection</h3>
                            <p className="text-gray-600">
                                Elegant silver jewellery that combines affordability with stunning craftsmanship and timeless appeal.
                            </p>
                        </div>

                        {/* Diamond Jewellery */}
                        <div className={`text-center group animate-scale ${visibleSections.has(1) ? 'visible' : ''} stagger-3`}>
                            <div className="overflow-hidden rounded-lg mb-4 shadow-md">
                                <img
                                    src={C1}
                                    alt="Diamond Jewellery"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-2">Diamond Jewellery</h3>
                            <p className="text-gray-600">
                                Brilliant diamond pieces that sparkle with elegance, perfect for life's most precious moments.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div
                    ref={el => sectionRefs.current[2] = el}
                    className="mb-20"
                >
                    <h2 className={`text-4xl font-serif font-bold text-dark mb-12 text-center animate-section ${visibleSections.has(2) ? 'visible' : ''}`}>
                        Why Choose Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className={`bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow animate-scale ${visibleSections.has(2) ? 'visible' : ''} stagger-1`}>
                            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Legacy of Trust</h3>
                            <p className="text-gray-600">Serving customers with integrity and excellence for generations</p>
                        </div>

                        <div className={`bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow animate-scale ${visibleSections.has(2) ? 'visible' : ''} stagger-2`}>
                            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Certified Purity</h3>
                            <p className="text-gray-600">100% hallmarked and certified jewellery with guaranteed quality</p>
                        </div>

                        <div className={`bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow animate-scale ${visibleSections.has(2) ? 'visible' : ''} stagger-3`}>
                            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
                            <p className="text-gray-600">Skilled artisans creating masterpieces with attention to detail</p>
                        </div>

                        <div className={`bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow animate-scale ${visibleSections.has(2) ? 'visible' : ''} stagger-4`}>
                            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Customer First</h3>
                            <p className="text-gray-600">Personalized service and guidance for every customer</p>
                        </div>
                    </div>
                </div>

                {/* Visit Us */}
                <div
                    ref={el => sectionRefs.current[3] = el}
                    className={`bg-gradient-to-r from-primary to-yellow-600 text-white p-12 rounded-xl shadow-2xl animate-section ${visibleSections.has(3) ? 'visible' : ''}`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Visit Our Showroom</h2>
                            <div className="space-y-4 text-lg">
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <p className="font-bold">Address:</p>
                                        <p>Sri Balaji Jewellers, Yashaswini Arcade</p>
                                        <p>1331, 50 Feet Main Rd, Kumaraswamy Layout</p>
                                        <p>Bengaluru, Karnataka 560078</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <div>
                                        <p className="font-bold">Phone:</p>
                                        <p>+91 96203 64631</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <div>
                                        <p className="font-bold">Email:</p>
                                        <p>sribalajijewellers2012@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <p className="font-bold">Website:</p>
                                        <p>www.sribalajijewellers.co.in</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <img
                                src={C3}
                                alt="Jewellery Collection"
                                className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-96"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;