"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Menu, X, Check, Star, MessageCircle, WhatsApp, Instagram, Mail, ChevronRight, ChevronDown, Plus, ChevronLeft } from "@/components/Icons";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeVehicleFilter, setActiveVehicleFilter] = useState('All');
  const destinationsRef = useRef<HTMLDivElement>(null);
  const indoreRef = useRef<HTMLDivElement>(null);
  const vehiclesRef = useRef<HTMLDivElement>(null);
  const [activeVehicleChunk, setActiveVehicleChunk] = useState(0);

  const scrollVehicles = (direction: 'left' | 'right') => {
    if (vehiclesRef.current) {
      const scrollAmount = vehiclesRef.current.clientWidth;
      vehiclesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToVehicleChunk = (index: number) => {
    if (vehiclesRef.current) {
      const width = vehiclesRef.current.clientWidth;
      vehiclesRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    }
  };

  const handleVehicleScroll = () => {
    if (vehiclesRef.current) {
      const scrollLeft = vehiclesRef.current.scrollLeft;
      const width = vehiclesRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveVehicleChunk(index);
    }
  };



  useEffect(() => {
    const interval = setInterval(() => {
      const scrollIt = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
          const { scrollLeft, scrollWidth, clientWidth } = ref.current;
          // If we've reached the end (with a small 10px buffer), scroll back to the start
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            ref.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            ref.current.scrollBy({ left: 200, behavior: 'smooth' });
          }
        }
      };
      
      scrollIt(destinationsRef);
      scrollIt(indoreRef);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const allHeroImages = [
    '/hero/1.jpg', '/hero/2.jpg', '/hero/3.jpg', '/hero/4.jpg',
    '/hero/5.jpg', '/hero/6.jpg', '/hero/7.jpg', '/hero/8.jpg',
    '/hero/9.jpg', '/hero/10.jpg', '/hero/11.jpg', '/hero/12.jpg',
    '/hero/13.jpg', '/hero/14.jpg'
  ];
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 4) % allHeroImages.length);
    }, 5000); // Change images every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentHeroImages = [
    allHeroImages[(heroImageIndex) % allHeroImages.length],
    allHeroImages[(heroImageIndex + 1) % allHeroImages.length],
    allHeroImages[(heroImageIndex + 2) % allHeroImages.length],
    allHeroImages[(heroImageIndex + 3) % allHeroImages.length],
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  type Vehicle = {
    name: string;
    category: string;
    filter: string;
    price: string;
    priceUnit: string;
    img: string;
    oldPrice?: string;
  };

  const vehiclesData: Vehicle[] = [
    { name: 'Force Traveller', category: '14 to 26 Seater', filter: 'Bus & Vans', price: 'Starting ₹22', priceUnit: '/ km', img: '/Rental/forcetravellor.jpg' },
    { name: 'Force Urbania', category: 'Luxury Van', filter: 'Bus & Vans', price: 'On Request', priceUnit: '', img: '/Rental/ForceUrbania.jpg' },
    { name: 'Swift Dzire', category: '4 Seater Sedan', filter: 'Cars', price: '₹11', priceUnit: '/ km', img: '/Rental/SwiftDzire.jpg' },
    { name: 'Ertiga', category: '6 Seater SUV', filter: 'Cars', price: '₹13', priceUnit: '/ km', img: '/Rental/Ertiga.jpg' },
    { name: 'Innova', category: '7 Seater SUV', filter: 'Cars', price: '₹15', priceUnit: '/ km', img: '/Rental/Innova.jpg' },
    { name: 'Innova Crysta', category: '7 Seater Premium', filter: 'Cars', price: '₹17', priceUnit: '/ km', img: '/Rental/InnovaCrysta.jpg' },
    { name: 'Innova Hycross', category: '7 Seater Premium SUV', filter: 'Cars', price: 'On Request', priceUnit: '', img: '/Rental/InnovaHycross.jpg' },
    { name: 'Fortuner', category: '7 Seater Luxury SUV', filter: 'Luxury', price: 'On Request', priceUnit: '', img: '/Rental/Fortuner.jpg' },
    { name: 'Vintage Cars', category: 'Wedding Special', filter: 'Wedding', price: 'On Request', priceUnit: '', img: '/Rental/VintageCars.jpg' },
    { name: 'Mercedes Benz', category: 'Luxury Sedan', filter: 'Luxury', price: 'On Request', priceUnit: '', img: '/Rental/MercedesBenz.jpg' },
    { name: 'Volvo Bus', category: 'Premium Travel', filter: 'Bus & Vans', price: 'On Request', priceUnit: '', img: '/Rental/VolvoBus.jpg' },
    { name: 'Jaguar', category: 'Ultra Premium', filter: 'Luxury', price: 'On Request', priceUnit: '', img: '/Rental/Jaguar.jpg' },
  ];

  const vehicleFilters = ['All', 'Cars', 'Bus & Vans', 'Luxury', 'Wedding'];

  const filteredVehicles = activeVehicleFilter === 'All'
    ? vehiclesData
    : vehiclesData.filter(v => v.filter === activeVehicleFilter);

  const vehicleChunks = [];
  for (let i = 0; i < filteredVehicles.length; i += 3) {
    vehicleChunks.push(filteredVehicles.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 bg-white ${isScrolled ? 'shadow-sm' : ''} py-1 top-0 border-b border-gray-100`}>
        <div className="w-[95%] md:w-[90%] mx-auto max-w-none flex justify-between items-center gap-2">
          <div className="flex flex-col items-start justify-center shrink-0">
            <a href="#" className="flex items-center">
              <img src="/logo/logo1.png" alt="Travel with Rahul" className="w-44 sm:w-52 md:w-64 h-auto object-contain transform origin-left hover:scale-105 transition-transform" />
            </a>
          </div>

          {/* Quick Contact Info for Mobile (Between Logo and Menu) */}
          <div className="flex flex-col items-end justify-center text-[13px] sm:text-sm text-black font-semibold leading-snug ml-auto mr-4 lg:hidden">
            <a href="tel:08989299997" className="flex items-center hover:text-[var(--color-primary)] mb-0.5">089892 99997 <Phone className="w-4 h-4 ml-1.5" /></a>
            <a href="tel:09111135812" className="flex items-center hover:text-[var(--color-primary)] mb-0.5">091111 35812 <Phone className="w-4 h-4 ml-1.5" /></a>
            <span className="flex items-center">Indore, MP <MapPin className="w-4 h-4 ml-1.5" /></span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8 text-[15px] font-bold text-gray-800">
              <a href="#" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">Home</a>
              
              <a href="#tours" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">Destinations</a>
              <a href="#indore-tours" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">Indore Local Sightseeing</a>
              <a href="#states" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">Explore by State</a>
              <a href="#vehicles" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">Explore Vehicles</a>
              <a href="#services" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">Services</a>
              <a href="#reviews" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">Reviews</a>
              <a href="#contact" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">Contact</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-1">View Instagram</a>
            </div>
            <button onClick={() => setBookingModalOpen(true)} className="bg-[#1e7123] text-white px-7 py-3 hover:bg-[#155319] transition-colors font-semibold flex items-center gap-2 shadow-md">
              Book Now <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-[var(--color-primary)]" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-10 h-10" />
          </button>
        </div>

      </nav>

      {/* Mobile Menu Sidebar */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="w-[280px] h-full bg-white relative shadow-2xl flex flex-col py-6 px-8 animate-in slide-in-from-right duration-300">
            {/* Close Button */}
            <div className="flex justify-end mb-10">
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-black">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 overflow-y-auto hide-scrollbar pb-10">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group">
                <span className="border-b border-gray-900 pb-[1px]">Home</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#tours" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group hover:text-[#1e7123]">
                <span>Destinations</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#indore-tours" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group hover:text-[#1e7123]">
                <span>Indore Local Sightseeing</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#states" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group hover:text-[#1e7123]">
                <span>Explore by State</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#vehicles" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group hover:text-[#1e7123]">
                <span>Explore Vehicles</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group hover:text-[#1e7123]">
                <span>Services</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group hover:text-[#1e7123]">
                <span>Reviews</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group hover:text-[#1e7123]">
                <span>Contact</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-gray-900 font-medium text-[15px] w-full group hover:text-[#1e7123]">
                <span>View Instagram</span>
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Hero Gallery Design (Original) */}
      <section id="hero-gallery-mobile" className="pt-[110px] md:pt-[130px] pb-4 md:pb-10 bg-white overflow-hidden lg:hidden">
        <div className="w-[90%] mx-auto max-w-none">
          <div className="grid grid-cols-5 md:flex md:flex-row gap-2 md:gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-auto md:h-[600px]">
            {/* Image 1: Normal Rectangle */}
            <div className="col-span-3 md:flex-1 relative h-full group overflow-hidden shrink-0">
              <img key={`mobile-0-${heroImageIndex}`} src={currentHeroImages[0]} alt="Travel Destination 1" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>

            {/* Image 2: Normal Rectangle */}
            <div className="col-span-2 md:flex-1 relative h-full group overflow-hidden shrink-0">
              <img key={`mobile-1-${heroImageIndex}`} src={currentHeroImages[1]} alt="Travel Destination 2" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>

            {/* Image 3: Arched Top */}
            <div className="col-span-2 md:flex-1 relative h-full group overflow-hidden shrink-0">
              <img key={`mobile-2-${heroImageIndex}`} src={currentHeroImages[2]} alt="Travel Destination 3" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>

            {/* Image 4: Full visible on desktop */}
            <div className="col-span-3 md:flex-1 relative h-full group overflow-hidden shrink-0">
              <img key={`mobile-3-${heroImageIndex}`} src={currentHeroImages[3]} alt="Travel Destination 4" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>
          </div>

          <div className="mt-8 flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4">
            <button onClick={() => setBookingModalOpen(true)} className="px-5 sm:px-6 bg-[#1e7123] hover:bg-[#155319] text-white py-3 border-2 border-transparent font-bold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center">
              Book Tours
            </button>
            <button onClick={() => setBookingModalOpen(true)} className="px-5 sm:px-6 bg-white border-2 border-[#1e7123] text-[#1e7123] hover:bg-gray-50 py-3 font-bold text-sm sm:text-base transition-all flex items-center justify-center">
              Rent a Car
            </button>
            <a href="tel:08989299997" className="px-5 sm:px-6 bg-gray-900 hover:bg-black text-white py-3 border-2 border-transparent font-bold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Modern Split Hero Section (Desktop Only) */}
      <section id="home-desktop" className="hidden lg:block pt-[120px] md:pt-[150px] pb-12 md:pb-24 bg-white overflow-hidden">
        <div className="w-[90%] mx-auto max-w-none">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[var(--color-primary)] font-semibold text-sm mb-6 w-max border border-blue-100">
                <Star className="w-4 h-4 fill-[var(--color-secondary)] text-[var(--color-secondary)]" /> Top Rated Travel Agency in Indore
              </div>
              <h1 className="text-5xl lg:text-[4rem] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight font-sans">
                Your Journey, <br />
                <span className="text-[var(--color-primary)]">Our Priority.</span>
              </h1>
              <p className="text-lg text-gray-500 mb-8 max-w-md leading-relaxed font-light">
                Experience premium comfort and safety with our wide range of luxury cars, buses, and Force Travellers for local and outstation trips.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setBookingModalOpen(true)} className="bg-[var(--color-primary)] text-white px-8 py-4 font-bold text-lg hover:bg-[#112240] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Book a Vehicle <ChevronRight className="w-5 h-5" />
                </button>
                <a href="tel:08989299997" className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Contact Us
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">500+</span>
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Happy Clients</span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">15+</span>
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Premium Vehicles</span>
                </div>
              </div>
            </div>

            {/* Right Images Grid */}
            <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 lg:gap-6 h-[500px] lg:h-[650px]">
                {/* Column 1 */}
                <div className="flex flex-col gap-4 lg:gap-6 translate-y-6 lg:translate-y-12">
                  <div className="h-[55%] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
                    <img key={`desktop-0-${heroImageIndex}`} src={currentHeroImages[0]} alt="Travel Destination 1" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="h-[45%] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
                    <img key={`desktop-1-${heroImageIndex}`} src={currentHeroImages[1]} alt="Travel Destination 2" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4 lg:gap-6 -translate-y-6 lg:-translate-y-12">
                  <div className="h-[45%] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
                    <img key={`desktop-2-${heroImageIndex}`} src={currentHeroImages[2]} alt="Travel Destination 3" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="h-[55%] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
                    <img key={`desktop-3-${heroImageIndex}`} src={currentHeroImages[3]} alt="Travel Destination 4" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  </div>
                </div>
              </div>

              {/* Decorative background blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/80 rounded-full blur-3xl"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Destinations / Favourite Destinations */}
      <section id="tours" className="pt-6 pb-2 md:pt-20 md:pb-4 bg-white">
        <div className="w-[90%] mx-auto max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">Favourite Destinations</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">Explore the most beautiful and spiritual places<br />with Travel with Rahul.</p>
          </div>

          {/* Horizontal scroll layout for destinations */}
          <div ref={destinationsRef} className="flex overflow-x-auto pb-4 pt-4 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar justify-start">
            {[
              { name: 'Mahakaleshwar Ujjain', img: '/destination/Mahakaleshwar .jpg' },
              { name: 'Omkareshwar Darshan', img: '/destination/Omkareshwar .jpg' },
              { name: 'Baglamukhi Temple Nalkheda', img: '/destination/baglamukhitemple .jpg' },
              { name: 'Indore Local Sightseeing', img: '/destination/Indorelocal.jpg' },
              { name: 'Khajrana Ganesh Temple', img: '/destination/KhajranaGanesh .jpg' },
              { name: 'Indore Zoo', img: '/destination/IndoreZoo.jpg' },
              { name: '56 Dukan (Food Zone)', img: '/destination/56Shop.jpg' },
              { name: 'Rajwada Palace', img: '/destination/Rajwadapalace.jpg' },
              { name: 'Lal Bagh Palace', img: '/destination/Lalbagpalace.jpg' },
              { name: 'Annapurna Mandir', img: '/destination/Annapurnmandir.jpg' },
              { name: 'Mandu Fort', img: '/destination/Mandu.jpg' },
              { name: 'Maheshwar Fort', img: '/destination/MaheshwarFort.jpg' },
              { name: 'Char Dham Yatra', img: '/destination/CharDham.jpg' },
              { name: 'Narmada Parikrama', img: '/destination/Narmada.jpg' },
              { name: 'South India Tour', img: '/destination/South.jpg' },
              { name: 'Jain Tour', img: '/destination/jaintour.jpg' },
              { name: 'Jaisalmer Desert Safari', img: '/destination/Jaisalmer.jpg' },
              { name: 'Pachmarhi Hill Station', img: '/destination/Mahakaleshwar .jpg' }
            ].map((dest, i) => (
              <div key={i} className="snap-start shrink-0 flex flex-col items-center group cursor-pointer w-[140px] sm:w-[160px] md:w-40">
                <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-gray-900 font-semibold text-base md:text-lg text-center">{dest.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Vehicles */}
      <section id="vehicles" className="pt-12 pb-12 md:pb-20 md:pt-16 bg-[#1e7123]">
        <div className="w-[90%] mx-auto max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Vehicle Rental</h2>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto font-light mb-8 opacity-90">Choose from our wide range of premium vehicles for your comfortable journey.</p>
          </div>

          <div className="relative group px-2 sm:px-8">
            {/* Left Arrow */}
            <button
              onClick={() => scrollVehicles('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-10 text-gray-800 hover:text-[var(--color-primary)] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div ref={vehiclesRef} onScroll={handleVehicleScroll} className="flex overflow-x-auto gap-4 sm:gap-6 snap-x snap-mandatory hide-scrollbar pb-4 pt-2">
              {vehicleChunks.map((chunk, chunkIndex) => (
                <div key={`chunk-${chunkIndex}`} className="snap-start shrink-0 w-full flex flex-col gap-4">
                  {chunk.map((vehicle, index) => (
                    <div key={`${vehicle.name}-${index}`} className="bg-white rounded-none p-4 sm:p-6 min-h-[150px] sm:min-h-[200px] flex flex-row items-center gap-4 sm:gap-8 shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow duration-300">

                      {/* Image Container */}
                      <div className="w-36 h-28 sm:w-56 sm:h-40 bg-white rounded-none overflow-hidden shrink-0 flex items-center justify-center relative">
                        <img src={vehicle.img} alt={vehicle.name} className="w-full h-full object-contain" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col py-1 pr-2 sm:pr-4 justify-between h-full">
                        <div>
                          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight leading-tight mb-1">{vehicle.name}</h3>

                          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-500 mb-3">
                            <span>{vehicle.filter}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>{vehicle.category}</span>
                          </div>

                          <div className="hidden sm:flex items-center gap-5 text-[11px] text-gray-500 font-medium mb-1">
                            <div className="flex items-center gap-1.5">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 14a4 4 0 0 0-4 4" /><path d="M16 18a4 4 0 0 0-4-4" /></svg>
                              Auto/Manual
                            </div>
                            <div className="flex items-center gap-1.5">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22h12" /><path d="M5 22V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v18" /><path d="M13 14V4" /><path d="M21 16V9a2 2 0 0 0-2-2h-3" /><path d="M21 16a2 2 0 0 1-2 2h-1" /><circle cx="9" cy="9" r="2" /></svg>
                              AC / Non-AC
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-end mt-4">
                          <div>
                            {vehicle.oldPrice && <p className="text-[10px] text-gray-400 line-through mb-0.5">{vehicle.oldPrice}</p>}
                            <p className="text-base sm:text-lg font-bold text-gray-900 leading-none tracking-tight">
                              {vehicle.price} <span className="text-[10px] sm:text-xs text-gray-500 font-normal ml-0.5">{vehicle.priceUnit}</span>
                            </p>
                          </div>

                          <button onClick={() => setBookingModalOpen(true)} className="px-5 py-2 sm:px-6 sm:py-2.5 bg-[#1A1A1A] text-white text-xs sm:text-sm font-bold hover:bg-[var(--color-primary)] transition-colors shrink-0">
                            Book Now
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollVehicles('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg z-10 text-gray-800 hover:text-[var(--color-primary)] hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            {vehicleChunks.length > 1 && (
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
                {vehicleChunks.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToVehicleChunk(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${activeVehicleChunk === i ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Indore Local Sightseeing */}
      <section id="indore-tours" className="pt-6 pb-2 md:pt-10 md:pb-4 bg-gray-50">
        <div className="w-[90%] mx-auto max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">Indore Local Sightseeing</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">Discover the vibrant culture, history, and flavors of Indore.</p>
          </div>

          {/* Horizontal scroll layout for indore sightseeing */}
          <div ref={indoreRef} className="flex overflow-x-auto pb-4 pt-4 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar justify-start">
            {[
              { name: 'Khajrana Ganesh Temple', img: '/destination/KhajranaGanesh .jpg' },
              { name: 'Rajwada Palace', img: '/destination/Rajwadapalace.jpg' },
              { name: 'Lal Bagh Palace', img: '/destination/Lalbagpalace.jpg' },
              { name: '56 Shop', img: '/destination/56Shop.jpg' },
              { name: 'Zoo', img: '/destination/Indorelocal.jpg' },
              { name: 'Annapurna Temple', img: '/destination/Annapurnmandir.jpg' }
            ].map((dest, i) => (
              <div key={i} className="snap-start shrink-0 flex flex-col items-center group cursor-pointer w-[140px] sm:w-[160px] md:w-40">
                <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-gray-900 font-semibold text-base md:text-lg text-center">{dest.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise Tours */}
      <section id="states" className="pt-12 pb-12 md:pt-16 md:pb-16 bg-[#1e7123]">
        <div className="w-[90%] mx-auto max-w-none">
          <div className="text-center mb-10 md:mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Explore by State</h2>
            <p className="text-base sm:text-lg text-gray-100 opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
              Find the best <span className="font-medium text-green-200">travel packages</span> and <span className="font-medium text-green-200">destinations</span> across India.
            </p>
          </div>

          {/* List layout for states matching the new design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4 pb-4">
            {[
              { name: 'Rajasthan', img: '/explorebystate/rajasthan.jpg', slug: 'rajasthan', title: 'Explore majestic forts and palaces in Rajasthan' },
              { name: 'Maharashtra', img: '/explorebystate/Maharastra.jpg', slug: 'maharashtra', title: 'Discover the ancient caves and temples of Maharashtra' },
              { name: 'Gujarat', img: '/explorebystate/Gujarat.jpg', slug: 'gujarat', title: 'Uncover the vibrant culture and wildlife of Gujarat' },
              { name: 'Uttar Pradesh', img: '/explorebystate/uttarpradesh.jpg', slug: 'uttar-pradesh', title: 'Wandering through the sacred streets of Uttar Pradesh' },
              { name: 'Uttarakhand', img: '/explorebystate/uttrakhand.jpg', slug: 'uttarakhand', title: 'Experience the divine beauty of Devbhoomi Uttarakhand' },
              { name: 'Madhya Pradesh', img: '/explorebystate/madhyapradesh.jpg', slug: 'madhya-pradesh', title: 'Journey into the historic heartland of Madhya Pradesh' },
            ].map((state, i) => (
              <a href={`/states/${state.slug}`} key={i} className="flex flex-row items-center gap-4 group cursor-pointer w-full bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100/10">
                <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] shrink-0 overflow-hidden bg-gray-100 rounded-md">
                  <img src={state.img} alt={state.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#1e7123] transition-colors leading-tight mb-1">
                    {state.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {state.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-white">
        <div className="w-[90%] mx-auto max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-2">Our Services</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light mb-8">Explore our wide range of tailored travel and transport services.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { title: "Vintage Car Hire", img: "/Survices/Vintage.jpg" },
              { title: "Luxury Car Rent", img: "/Survices/LuxuryCarRent.jpg" },
              { title: "South Tour", img: "/destination/South.jpg" },
              { title: "Tour Packages", img: "/Survices/TourPackages.jpg" },
              { title: "Bus Booking", img: "/Survices/busbooking.jpg" },
              { title: "Airport Transfer", img: "/Survices/Airport.jpg" },
              { title: "Corporate Travel", img: "/Survices/CorporateTravel.jpg" },
              { title: "Wedding Car Rental", img: "/Survices/WeddingCarRental.jpg" },
              { title: "Family Trips", img: "/Survices/family.jpg" },
              { title: "Couples Trips", img: "/Survices/couples.jpg" },
              { title: "Cruises", img: "/Survices/Private Shuttle Services in Fort Lauderdale.jpg" },
              { title: "Day Trips", img: "/Survices/Daytrip.jpg" },
              { title: "Group Travel", img: "/Survices/grouptravel.jpg" },
              { title: "Round Trip", img: "/Survices/Roundtrip.jpg" },
            ].map((service, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 group cursor-pointer p-2 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 sm:border-transparent transition-all">
                <div className="w-full sm:w-40 h-24 sm:h-28 shrink-0 overflow-hidden shadow-sm rounded-md sm:rounded-lg">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center mt-1 sm:mt-0">
                  <p className="text-[10px] sm:text-[13px] text-gray-500 mb-0.5 sm:mb-1.5 font-medium leading-tight">
                    Available by <span className="italic underline underline-offset-2">Travel with Rahul</span>
                  </p>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-[90%] mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-2">Why Choose Us</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light mb-8">Experience the difference with our commitment to quality, comfort, and reliability.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-12 md:gap-y-16 text-center">

            {/* Comfortable Vehicles */}
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto">
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 18H3c-.6 0-1-.4-1-1V7s1-2 3-2h12c2 0 3 2 3 2v10c0 .6-.4 1-1 1h-2" />
                    <circle cx="7" cy="18" r="2" />
                    <circle cx="17" cy="18" r="2" />
                    <path d="M2 10h20" />
                    <path d="M14 5v5" />
                    <path d="M9 5v5" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Comfortable Vehicles</h3>
              <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Well-maintained vehicles for comfortable journeys, ensuring a smooth ride every time.</p>
            </div>

            {/* Experienced Drivers */}
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto">
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2v8" />
                    <path d="M22 12h-8" />
                    <path d="M19.07 19.07L13.41 13.41" />
                    <path d="M4.93 19.07L10.59 13.41" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Experienced Drivers</h3>
              <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Professional drivers familiar with local and outstation routes for your safety.</p>
            </div>

            {/* Flexible Travel Options */}
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto">
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Flexible Travel Options</h3>
              <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">One-way, round trip, day trips and fully customized journeys to suit your schedule.</p>
            </div>

            {/* Family & Group Friendly */}
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto">
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Family & Group Friendly</h3>
              <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Vehicles suitable for couples, families and large groups looking for space and comfort.</p>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto">
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">24/7 Support</h3>
              <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Dedicated assistance before and during your journey for ultimate peace of mind.</p>
            </div>

            {/* Transparent Booking */}
            <div className="flex flex-col items-center group">
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto">
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Transparent Booking</h3>
              <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Clear communication about vehicle, trip requirements, and pricing with zero hidden fees.</p>
            </div>

          </div>
        </div>
      </section>






      {/* Google Reviews */}
      <section id="reviews" className="pt-12 pb-8 md:pt-16 md:pb-10 bg-[#1e7123]">
        <div className="w-[90%] mx-auto max-w-none text-center">

          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">What Our Customers Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light mb-12"><strong>4.9/5</strong> based on over 100+ Google Reviews.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { name: "Shilpa Jain", text: "Very gud and experienced driver which guides u very well about city and drive very smoothly and wait very patiently ....definitely i recommend Rahul tour and travels to everyone who wants safe and secure journey...", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
              { name: "Milind Nagdive", text: "Good service provider, fair price ,excellent and safe driving skills and well maintained car. Also knowledgeable regarding travelling. I suggest those who wanted to spend their best tour they can take Rahul tour and travels 😊😊👍", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
              { name: "Abdul Tayyab", text: "Most reliable service. I had a urgent requirement Rahul bhai provided a 5 start service and car. The driver was really very awesome!", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
              { name: "Harshita Pathak", text: "Very good experience... service was fantastic", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
              { name: "Simran Thakur", text: "Wonderful travel experience with Rahul tour and travels. This men's driving is very smooth and good, his way of talking to the customer is excellent.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop" },
              { name: "Parth Yadav", text: "Rahul tour and travels is a best traveller in indore a owner well people who show more places in there tours and well communications.", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-4 md:p-5 rounded-xl border border-transparent text-left flex gap-4 md:gap-5 items-start shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-lg overflow-hidden bg-[#DFE5E7] flex items-end justify-center">
                  <svg className="w-[85%] h-[85%] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="flex flex-col flex-1 py-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-bold text-gray-900 text-sm md:text-base">{review.name}</span>
                    <div className="flex text-[#FBBC04]">
                      {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-3 h-3 md:w-4 md:h-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* FAQ */}
      <section className="pt-12 md:pt-16 pb-6 md:pb-10 bg-white">
        <div className="w-[90%] mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-2">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">Got questions? Find answers to commonly asked questions below.</p>
          </div>

          <div className="border-t border-gray-200">
            {[
              { q: "What vehicles do you provide?", a: "We provide Cars, Force Traveller, Force Urbania and luxury travel vehicles, subject to availability." },
              { q: "Do you provide outstation travel?", a: "Yes, outstation and round-trip travel can be arranged across India." },
              { q: "Do you provide airport pickup and drop?", a: "Yes, we offer timely airport transfer services." },
              { q: "Can I book a luxury Urbania?", a: "Yes, you can book a luxury Urbania with us, subject to advance booking and availability." },
              { q: "Do you provide one-way trips?", a: "Yes, depending on the route and availability." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  className="w-full text-left py-6 flex justify-between items-start focus:outline-none group"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="text-base md:text-lg uppercase text-gray-900 tracking-wide font-normal group-hover:text-gray-600 transition-colors pr-8">{faq.q}</span>
                  <div className="text-gray-900 shrink-0 mt-1">
                    {activeFaq === i ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 flex md:justify-end ${activeFaq === i ? 'max-h-40 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}>
                  <div className="w-full md:w-[60%] text-gray-500 font-light text-base md:text-lg leading-relaxed md:pr-8">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer id="contact" className="bg-[#1e7123] text-gray-200 py-24 font-sans">
        <div className="w-[90%] mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8 items-start">

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Quick Links</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Home</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Destinations</a></li>
              <li><a href="#indore-tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Indore Local</a></li>
              <li><a href="#states" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Explore by State</a></li>
              <li><a href="#vehicles" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Vehicles</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Services</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Destinations</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><a href="#indore-tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Indore Sightseeing</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Ujjain Mahakaleshwar</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Omkareshwar</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Maheshwar</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Mandu</a></li>
              <li><a href="#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Pachmarhi Hill</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Our Services</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Vintage Car Hire</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Luxury Car Rent</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Tour Packages</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Bus Booking</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Airport Transfer</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Wedding Car Rental</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start mt-4 md:mt-0">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Contact Us</h3>
            <ul className="flex flex-col space-y-4 text-white/80 font-light text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                <span>Indore, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <Phone className="w-5 h-5 text-white/60 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:08989299997" className="hover:text-white transition-colors">089892 99997</a>
                  <a href="tel:09111135812" className="hover:text-white transition-colors mt-1">091111 35812</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60 shrink-0" />
                <a href="mailto:travelsrahul23@gmail.com" className="hover:text-white transition-colors">travelsrahul23@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsApp className="w-5 h-5 text-white/60 shrink-0" />
                <a href="https://wa.me/918989299997" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-white/60 shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Follow on Instagram</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-[90%] mx-auto max-w-7xl mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 font-light">
          <p>© {new Date().getFullYear()} Rahul Tour & Travels. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>




      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-4">
        {/* Call Button */}
        <a href="tel:08989299997" className="flex items-center justify-center bg-gray-900 text-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl hover:scale-110 transition-transform group relative border-2 border-white/20">
          <Phone className="w-8 h-8 md:w-10 md:h-10" />
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a href="https://wa.me/918989299997" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-[#1e7123] text-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl hover:scale-110 transition-transform group relative border-2 border-white/20">
          <WhatsApp className="w-9 h-9 md:w-12 md:h-12" />
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </a>
      </div>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setBookingModalOpen(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up scale-100">
            <div className="p-6 text-center">
              <button 
                onClick={() => setBookingModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex justify-center mx-auto mb-4">
                <img src="/logo/logo1.png" alt="Travel with Rahul" className="h-16 md:h-20 w-auto object-contain" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans">Book a Trip or Rent a Car/Bus</h3>
              <p className="text-gray-600 mb-6 text-[15px]">
                Online booking is coming soon! For now, you can quickly book your trip or rental via WhatsApp or Call us directly.
              </p>
              
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/918989299997?text=Hi,%20I%20would%20like%20to%20book%20a%20trip/vehicle" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 font-bold text-[16px] flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]">
                  <WhatsApp className="w-5 h-5" /> Book via WhatsApp
                </a>
                <a href="tel:08989299997" className="w-full bg-gray-900 hover:bg-black text-white py-3.5 font-bold text-[16px] flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

