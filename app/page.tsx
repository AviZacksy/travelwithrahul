"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Menu, X, Star, MessageCircle, WhatsApp, Instagram, Mail, ChevronRight, ChevronDown, Plus, ChevronLeft } from "@/components/Icons";

const heroSlides = [
  {
    type: 'rental',
    badge: 'Luxury Fleet Rentals • Indore & Pan-India',
    headingPrefix: 'Rent Force Traveller, Urbania',
    headingAccent: '& Innova Crysta',
    subheading: 'Flagship 7 to 26 Seater Premium Fleet with Verified Chauffeurs • Starting ₹17/km',
    ctaText: 'Rent a Vehicle',
    ctaType: 'modal',
    ctaVehicle: 'Force Traveller / Innova Crysta',
    image: '/hero/hero.1.jpg',
    tabLabel: 'Vehicle Rental',
    tabIcon: '🚐'
  },
  {
    type: 'tour',
    badge: 'Custom Tour Packages • Spiritual & Holiday',
    headingPrefix: 'Explore India with Custom',
    headingAccent: 'Tour Packages',
    subheading: 'Ujjain Mahakal, Omkareshwar, Pachmarhi & Char Dham Yatra',
    ctaText: 'Explore Tour Packages',
    ctaType: 'link',
    ctaLink: '#tours',
    image: '/hero/tour.jpg',
    tabLabel: 'Tour Booking',
    tabIcon: '🛕'
  },
  {
    type: 'bus',
    badge: 'Luxury Bus Rentals • 20 to 55 Seater',
    headingPrefix: 'Luxury Bus & Volvo Booking',
    headingAccent: 'For Group Tours',
    subheading: 'Premium AC Buses & Volvo for Weddings, Corporate Trips & Family Pilgrimages',
    ctaText: 'Book a Luxury Bus',
    ctaType: 'modal',
    ctaVehicle: 'Luxury Bus / Volvo',
    image: '/hero/busbooking.jpg',
    tabLabel: 'Bus Booking',
    tabIcon: '🚌'
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeVehicleFilter, setActiveVehicleFilter] = useState('All');
  const destinationsRef = useRef<HTMLDivElement>(null);
  const indoreRef = useRef<HTMLDivElement>(null);
  const vehiclesRef = useRef<HTMLDivElement>(null);
  const [activeVehicleChunk, setActiveVehicleChunk] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  const nextHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

    const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) {
      nextHeroSlide();
    } else if (distance < -50) {
      prevHeroSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const prevHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (isHeroPaused) return;
    const slideInterval = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 9000);
    return () => clearInterval(slideInterval);
  }, [isHeroPaused]);


  const openBookingModal = (vehicleName: string = '') => {
    setSelectedVehicle(vehicleName);
    setBookingModalOpen(true);
  };

  const scrollVehicles = (direction: 'left' | 'right') => {
    if (vehiclesRef.current) {
      const scrollAmount = vehiclesRef.current.clientWidth;
      vehiclesRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollDestinations = (direction: 'left' | 'right') => {
    if (destinationsRef.current) {
      const scrollAmount = 350;
      destinationsRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollIndore = (direction: 'left' | 'right') => {
    if (indoreRef.current) {
      const scrollAmount = 350;
      indoreRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
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
    { name: 'Innova Crysta', category: '7 Seater Premium', filter: 'Cars', price: '₹17', priceUnit: '/ km', img: '/Rental/InnovaCrysta.jpg' },
    { name: 'Ertiga', category: '6 Seater SUV', filter: 'Cars', price: '₹13', priceUnit: '/ km', img: '/Rental/Ertiga.jpg' },
    { name: 'Innova', category: '7 Seater SUV', filter: 'Cars', price: '₹15', priceUnit: '/ km', img: '/Rental/Innova.jpg' },
    { name: 'Swift Dzire', category: '4 Seater Sedan', filter: 'Cars', price: '₹11', priceUnit: '/ km', img: '/Rental/SwiftDzire.jpg' },
    { name: 'Innova Hycross', category: '7 Seater Premium SUV', filter: 'Cars', price: 'On Request', priceUnit: '', img: '/Rental/InnovaHycross.jpg' },
    { name: 'Fortuner', category: '7 Seater Luxury SUV', filter: 'Luxury', price: 'On Request', priceUnit: '', img: '/Rental/Fortuner.jpg' },
    { name: 'Vintage Cars', category: 'Wedding Special', filter: 'Wedding', price: 'On Request', priceUnit: '', img: '/Rental/VintageCars.jpg' },
    { name: 'Mercedes Benz', category: 'Luxury Sedan', filter: 'Luxury', price: 'On Request', priceUnit: '', img: '/Rental/MercedesBenz.jpg' },
    { name: 'Volvo Bus', category: 'Premium Travel', filter: 'Bus & Vans', price: 'On Request', priceUnit: '', img: '/Rental/VolvoBus.jpg' },
    { name: 'Jaguar', category: 'Ultra Premium', filter: 'Luxury', price: 'On Request', priceUnit: '', img: '/Rental/Jaguar.jpg' },
  ];

  const vehicleFilters = ['All', 'Cars', 'Bus & Vans', 'Luxury', 'Wedding'];

  const [chunkSize, setChunkSize] = useState(6);

  useEffect(() => {
    const updateChunkSize = () => {
      setChunkSize(window.innerWidth >= 768 ? 6 : 3);
    };
    updateChunkSize();
    window.addEventListener('resize', updateChunkSize);
    return () => window.removeEventListener('resize', updateChunkSize);
  }, []);

  const filteredVehicles = activeVehicleFilter === 'All'
    ? vehiclesData
    : vehiclesData.filter(v => v.filter === activeVehicleFilter);

  const vehicleChunks = [];
  for (let i = 0; i < filteredVehicles.length; i += chunkSize) {
    vehicleChunks.push(filteredVehicles.slice(i, i + chunkSize));
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 bg-white ${isScrolled ? 'shadow-sm' : ''} top-0 border-b border-gray-100`}>
        <div className="w-[95%] md:w-[95%] mx-auto max-w-none h-16 sm:h-[70px] flex justify-between items-center gap-2">
          <div className="flex items-center justify-center shrink-0">
            <a href="#" className="flex items-center">
              <img src="/logo/logo1.png" alt="Travel with Rahul" className="h-10 sm:h-12 md:h-13 w-auto object-contain transform origin-left hover:scale-105 transition-transform" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex gap-5 xl:gap-6 text-[14px] xl:text-[15px] font-bold text-gray-800">
              <a href="#" className="hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-0.5">Home</a>

              {/* Destinations */}
              <div className="relative group">
                <a href="#tours" className="flex items-center gap-1 hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-0.5">
                  <span>Destinations</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1e7123] group-hover:rotate-180 transition-transform duration-200" />
                </a>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 w-64 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 px-1.5 overflow-hidden">
                    {[
                      { name: 'Mahakaleshwar Ujjain', link: '#tours' },
                      { name: 'Omkareshwar Darshan', link: '#tours' },
                      { name: 'Baglamukhi Temple', link: '#tours' },
                      { name: 'Mandu Fort & Palaces', link: '#tours' },
                      { name: 'Maheshwar Fort', link: '#tours' },
                      { name: 'Pachmarhi Hill Station', link: '#tours' },
                      { name: 'Statue of Unity', link: '#tours' },
                      { name: 'Char Dham Yatra', link: '#tours' },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-semibold text-gray-700 hover:text-[#1e7123] hover:bg-emerald-50/70 transition-colors flex items-center justify-between group/sub"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#1e7123]" />
                      </a>
                    ))}
                    <div className="my-1 border-t border-gray-100" />
                    <a
                      href="#tours"
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#1e7123] hover:bg-emerald-50/80 transition-colors flex items-center justify-between"
                    >
                      <span>Explore All Destinations</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#1e7123]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Indore Local Sightseeing */}
              <div className="relative group">
                <a href="#indore-tours" className="flex items-center gap-1 hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-0.5">
                  <span>Indore Local Sightseeing</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1e7123] group-hover:rotate-180 transition-transform duration-200" />
                </a>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 w-64 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 px-1.5 overflow-hidden">
                    {[
                      { name: 'Khajrana Ganesh Temple', link: '#indore-tours' },
                      { name: 'Rajwada Palace', link: '#indore-tours' },
                      { name: 'Lal Bagh Palace', link: '#indore-tours' },
                      { name: '56 Dukan (Chappan)', link: '#indore-tours' },
                      { name: 'Indore Zoo', link: '#indore-tours' },
                      { name: 'Annapurna Temple', link: '#indore-tours' },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-semibold text-gray-700 hover:text-[#1e7123] hover:bg-emerald-50/70 transition-colors flex items-center justify-between group/sub"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#1e7123]" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Explore by State */}
              <div className="relative group">
                <a href="#states" className="flex items-center gap-1 hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-0.5">
                  <span>Explore by State</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1e7123] group-hover:rotate-180 transition-transform duration-200" />
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 w-60 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 px-1.5 overflow-hidden">
                    {[
                      { name: 'Madhya Pradesh', link: '/states/madhya-pradesh' },
                      { name: 'Rajasthan', link: '/states/rajasthan' },
                      { name: 'Gujarat', link: '/states/gujarat' },
                      { name: 'Maharashtra', link: '/states/maharashtra' },
                      { name: 'Uttar Pradesh', link: '/states/uttar-pradesh' },
                      { name: 'Uttarakhand', link: '/states/uttarakhand' },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-semibold text-gray-700 hover:text-[#1e7123] hover:bg-emerald-50/70 transition-colors flex items-center justify-between group/sub"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#1e7123]" />
                      </a>
                    ))}
                    <div className="my-1 border-t border-gray-100" />
                    <a
                      href="#states"
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#1e7123] hover:bg-emerald-50/80 transition-colors flex items-center justify-between"
                    >
                      <span>Explore All States</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#1e7123]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Explore Vehicles */}
              <div className="relative group">
                <a href="#vehicles" className="flex items-center gap-1 hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-0.5">
                  <span>Explore Vehicles</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1e7123] group-hover:rotate-180 transition-transform duration-200" />
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 w-64 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 px-1.5 overflow-hidden">
                    {[
                      { name: 'Force Traveller (14–26 Seater)', link: '#vehicles' },
                      { name: 'Force Urbania (Luxury Van)', link: '#vehicles' },
                      { name: 'Innova Crysta (7 Seater)', link: '#vehicles' },
                      { name: 'Ertiga (6 Seater SUV)', link: '#vehicles' },
                      { name: 'Swift Dzire (4 Seater Sedan)', link: '#vehicles' },
                      { name: 'Fortuner (7 Seater Luxury)', link: '#vehicles' },
                      { name: 'Vintage Cars (Wedding)', link: '#vehicles' },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-semibold text-gray-700 hover:text-[#1e7123] hover:bg-emerald-50/70 transition-colors flex items-center justify-between group/sub"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#1e7123]" />
                      </a>
                    ))}
                    <div className="my-1 border-t border-gray-100" />
                    <a
                      href="#vehicles"
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#1e7123] hover:bg-emerald-50/80 transition-colors flex items-center justify-between"
                    >
                      <span>View All Vehicles & Tariffs</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#1e7123]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="relative group">
                <a href="#services" className="flex items-center gap-1 hover:text-[#1e7123] border-b-2 border-transparent hover:border-[#1e7123] transition-all pb-0.5">
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1e7123] group-hover:rotate-180 transition-transform duration-200" />
                </a>
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 w-60 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 px-1.5 overflow-hidden">
                    {[
                      { name: 'Luxury Car Rent', link: '#services' },
                      { name: 'Bus Booking', link: '#services' },
                      { name: 'Airport Transfer', link: '#services' },
                      { name: 'Wedding Car Rental', link: '#services' },
                      { name: 'Vintage Car Hire', link: '#services' },
                      { name: 'Corporate Travel', link: '#services' },
                      { name: 'Day Trips & Family Tours', link: '#services' },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="px-3 py-1.5 rounded-lg text-[13px] font-semibold text-gray-700 hover:text-[#1e7123] hover:bg-emerald-50/70 transition-colors flex items-center justify-between group/sub"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#1e7123]" />
                      </a>
                    ))}
                    <div className="my-1 border-t border-gray-100" />
                    <a
                      href="#services"
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#1e7123] hover:bg-emerald-50/80 transition-colors flex items-center justify-between"
                    >
                      <span>Explore All Services</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#1e7123]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => openBookingModal()} className="bg-[#1e7123] text-white px-6 py-2.5 hover:bg-[#155319] transition-colors font-semibold text-sm flex items-center gap-1.5 shadow-xs hover:shadow-md rounded-full cursor-pointer">
              Book Now <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-1.5 text-[var(--color-primary)]" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-8 h-8" />
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
            </div>
          </div>
        </div>
      )}

      {/* Hero Section: Exact Gyanshala Responsive Layout (Mobile aspect-[16/10] & Desktop h-[660px]) */}
      <section
        id="home"
        className="relative w-full aspect-[16/10] sm:aspect-[16/8] lg:aspect-auto lg:h-[660px] min-h-[260px] max-h-[520px] lg:max-h-none overflow-hidden select-none bg-zinc-950 mt-16 sm:mt-[70px]"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                activeHeroSlide === idx
                  ? 'opacity-100 translate-x-0 z-10 pointer-events-auto'
                  : activeHeroSlide < idx
                  ? 'opacity-0 translate-x-full z-0 pointer-events-none'
                  : 'opacity-0 -translate-x-full z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.tabLabel}
                className="w-full h-full object-cover object-center absolute inset-0"
              />
              <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />

              <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl lg:max-w-5xl text-white space-y-2 sm:space-y-3 lg:space-y-4">
                  <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-balance leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                    {slide.headingPrefix} <br className="hidden sm:inline" />
                    {slide.headingAccent}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-normal leading-relaxed text-balance max-w-3xl mx-auto drop-shadow-sm">
                    {slide.subheading}
                  </p>
                  <div className="pt-1 sm:pt-2">
                    {slide.ctaType === 'modal' ? (
                      <button
                        onClick={() => openBookingModal(slide.ctaVehicle)}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-[#51BBEB] hover:bg-[#38aee7] text-white text-[11px] sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>{slide.ctaText}</span>
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    ) : (
                      <a
                        href={slide.ctaLink}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-[#51BBEB] hover:bg-[#38aee7] text-white text-[11px] sm:text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>{slide.ctaText}</span>
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          type="button"
          onClick={prevHeroSlide}
          aria-label="Previous slide"
          className="cursor-pointer absolute left-1 sm:left-3 lg:left-5 top-1/2 -translate-y-1/2 z-20 text-white/85 hover:text-white transition-all hover:scale-115 active:scale-95 p-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={nextHeroSlide}
          aria-label="Next slide"
          className="cursor-pointer absolute right-1 sm:right-3 lg:right-5 top-1/2 -translate-y-1/2 z-20 text-white/85 hover:text-white transition-all hover:scale-115 active:scale-95 p-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots Pill Indicator */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                activeHeroSlide === idx
                  ? 'w-4 sm:w-6 h-1.5 sm:h-2 bg-[#51BBEB] shadow-sm'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/70 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Popular Destinations / Favourite Destinations */}
      <section id="tours" className="pt-6 pb-2 md:pt-20 md:pb-4 bg-white overflow-hidden">
        <div className="w-[95%] mx-auto max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">Favourite Destinations</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">Explore the most beautiful and spiritual places<br />with Travel with Rahul.</p>
          </motion.div>

          <div className="relative group px-1 sm:px-8 lg:px-10">
            {/* Left Arrow */}
            <button
              onClick={() => scrollDestinations('left')}
              className="absolute -left-2 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 p-1 text-gray-700 hover:text-[#1e7123] z-20 hover:scale-125 transition-all cursor-pointer bg-transparent border-none shadow-none"
              aria-label="Previous Destinations"
            >
              <ChevronLeft className="w-8 h-8 sm:w-11 sm:h-11" />
            </button>

            {/* Horizontal scroll layout for destinations */}
            <div ref={destinationsRef} className="flex overflow-x-auto pb-4 pt-4 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar justify-start">
              {[
                { name: 'Mahakaleshwar Ujjain', img: '/destination/Mahakaleshwar .jpg' },
                { name: 'Omkareshwar Darshan', img: '/destination/Omkareshwar .jpg' },
                { name: 'Baglamukhi Temple Nalkheda', img: '/destination/baglamukhitemple .jpg' },
                { name: 'Indore Local Sightseeing', img: '/destination/Indorelocal.jpg', link: '#indore-tours' },
                { name: 'Mandu Fort', img: '/destination/Mandu.jpg' },
                { name: 'Maheshwar Fort', img: '/destination/MaheshwarFort.jpg' },
                { name: 'Pachmarhi Hill Station', img: '/states_images/pachmarhi.jpg' },
                { name: 'Statue of Unity', img: '/states_images/statue_of_unity.jpg', position: 'object-top' },
                { name: 'Char Dham Yatra', img: '/destination/CharDham.jpg' },
                { name: 'Kedarnath Yatra', img: '/states_images/kedarnath.jpg' },
                { name: 'Narmada Parikrama', img: '/destination/Narmada.jpg' },
                { name: 'Vrindavan & Mathura', img: '/states_images/vrindavan.jpg' },
                { name: 'South India Tour', img: '/destination/South.jpg' },
                { name: 'Jain Tour', img: '/destination/jaintour.jpg' },
                { name: 'Jaisalmer Desert Safari', img: '/destination/Jaisalmer.jpg' }
              ].map((dest, i) => (
                <motion.a
                  href={dest.link || '#tours'}
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                  className="snap-start shrink-0 flex flex-col items-center group/item cursor-pointer w-[140px] sm:w-[160px] md:w-40"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.1 + (i % 6) * 0.08 }}
                    className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-sm border border-gray-100 group-hover/item:shadow-md transition-shadow"
                  >
                    <img src={dest.img} alt={dest.name} className={`w-full h-full object-cover ${dest.position || 'object-center'} group-hover/item:scale-110 transition-transform duration-500`} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.15 + (i % 6) * 0.08 }}
                    className="text-gray-900 font-semibold text-base md:text-lg text-center"
                  >
                    {dest.name}
                  </motion.h3>
                </motion.a>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollDestinations('right')}
              className="absolute -right-2 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 p-1 text-gray-700 hover:text-[#1e7123] z-20 hover:scale-125 transition-all cursor-pointer bg-transparent border-none shadow-none"
              aria-label="Next Destinations"
            >
              <ChevronRight className="w-8 h-8 sm:w-11 sm:h-11" />
            </button>
          </div>
        </div>
      </section>


      {/* Our Vehicles */}
      <section id="vehicles" className="pt-12 pb-12 md:pb-20 md:pt-16 bg-[#1e7123]">
        <div className="w-[95%] mx-auto max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Vehicle Rental</h2>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto font-light mb-8 opacity-90">Choose from our wide range of premium vehicles for your comfortable journey.</p>
          </motion.div>

          <div className="relative group px-1 sm:px-8 lg:px-10">
            {/* Left Arrow */}
            <button
              onClick={() => scrollVehicles('left')}
              className="absolute -left-2 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 p-1 text-white/90 hover:text-white z-20 hover:scale-125 transition-all hidden sm:flex cursor-pointer bg-transparent border-none shadow-none"
            >
              <ChevronLeft className="w-8 h-8 sm:w-11 sm:h-11" />
            </button>

            <div ref={vehiclesRef} onScroll={handleVehicleScroll} className="flex overflow-x-auto gap-4 sm:gap-6 snap-x snap-mandatory hide-scrollbar pb-4 pt-2">
              {vehicleChunks.map((chunk, chunkIndex) => (
                <div key={`chunk-${chunkIndex}`} className="snap-start shrink-0 w-full grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
                  {chunk.map((vehicle, index) => (
                    <motion.div
                      key={`${vehicle.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                      className="bg-white rounded-none p-3.5 sm:p-5 flex flex-row items-center gap-3.5 sm:gap-6 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-white/40"
                    >

                      {/* Image Container - slide in from left */}
                      <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.1 + (index % 4) * 0.08 }}
                        className="w-32 h-24 sm:w-44 sm:h-32 bg-gray-50/60 rounded-none overflow-hidden shrink-0 flex items-center justify-center p-2"
                      >
                        <img src={vehicle.img} alt={vehicle.name} className="w-full h-full object-contain hover:scale-105 transition-transform" />
                      </motion.div>

                      {/* Content - slide in from right */}
                      <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.15 + (index % 4) * 0.08 }}
                        className="flex-1 flex flex-col justify-between h-full min-w-0"
                      >
                        <div>
                          <h3 className="text-base sm:text-xl font-bold text-gray-900 tracking-tight leading-tight mb-1 truncate">{vehicle.name}</h3>

                          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-500 mb-2">
                            <span>{vehicle.filter}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>{vehicle.category}</span>
                          </div>

                          <div className="hidden sm:flex items-center gap-4 text-[11px] text-gray-500 font-medium mb-1">
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

                        <div className="flex justify-between items-end mt-3 pt-2 border-t border-gray-100">
                          <div>
                            {vehicle.oldPrice && <p className="text-[10px] text-gray-400 line-through mb-0.5">{vehicle.oldPrice}</p>}
                            <p className="text-base sm:text-lg font-bold text-gray-900 leading-none tracking-tight">
                              {vehicle.price} <span className="text-[10px] sm:text-xs text-gray-500 font-normal ml-0.5">{vehicle.priceUnit}</span>
                            </p>
                          </div>

                          <button onClick={() => openBookingModal(vehicle.name)} className="px-4 py-2 sm:px-6 sm:py-2.5 bg-[#1A1A1A] text-white text-xs sm:text-sm font-bold hover:bg-[#1e7123] transition-colors shrink-0 rounded-full cursor-pointer shadow-xs">
                            Book Now
                          </button>
                        </div>
                      </motion.div>

                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollVehicles('right')}
              className="absolute -right-2 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 p-1 text-white/90 hover:text-white z-20 hover:scale-125 transition-all hidden sm:flex cursor-pointer bg-transparent border-none shadow-none"
            >
              <ChevronRight className="w-8 h-8 sm:w-11 sm:h-11" />
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
      <section id="indore-tours" className="pt-6 pb-2 md:pt-10 md:pb-6 bg-gray-50">
        <div className="w-[95%] mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">Indore Local Sightseeing</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">Discover the vibrant culture, history, and flavors of Indore.</p>
          </motion.div>

          <div className="relative group px-1 sm:px-8 lg:px-10">
            {/* Left Arrow (visible when list overflows on smaller screens) */}
            <button
              onClick={() => scrollIndore('left')}
              className="absolute -left-2 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 p-1 text-gray-700 hover:text-[#1e7123] z-20 hover:scale-125 transition-all cursor-pointer bg-transparent border-none shadow-none xl:hidden"
              aria-label="Previous Indore Sightseeing"
            >
              <ChevronLeft className="w-8 h-8 sm:w-11 sm:h-11" />
            </button>

            {/* Horizontal scroll layout for indore sightseeing - centered on desktop */}
            <div ref={indoreRef} className="flex overflow-x-auto pb-4 pt-4 gap-4 sm:gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar justify-start xl:justify-center">
              {[
                { name: 'Khajrana Ganesh Temple', img: '/destination/KhajranaGanesh .jpg' },
                { name: 'Rajwada Palace', img: '/destination/Rajwadapalace.jpg' },
                { name: 'Lal Bagh Palace', img: '/destination/Lalbagpalace.jpg' },
                { name: '56 Shop', img: '/destination/56Shop.jpg' },
                { name: 'Zoo', img: '/destination/Indorelocal.jpg' },
                { name: 'Annapurna Temple', img: '/destination/Annapurnmandir.jpg' }
              ].map((dest, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                  className="snap-start shrink-0 flex flex-col items-center group/item cursor-pointer w-[140px] sm:w-[150px] md:w-40"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.1 + (i % 6) * 0.08 }}
                    className="w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-sm border border-gray-100 group-hover/item:shadow-md transition-shadow"
                  >
                    <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.15 + (i % 6) * 0.08 }}
                    className="text-gray-900 font-semibold text-base md:text-lg text-center"
                  >
                    {dest.name}
                  </motion.h3>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow (visible when list overflows on smaller screens) */}
            <button
              onClick={() => scrollIndore('right')}
              className="absolute -right-2 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 p-1 text-gray-700 hover:text-[#1e7123] z-20 hover:scale-125 transition-all cursor-pointer bg-transparent border-none shadow-none xl:hidden"
              aria-label="Next Indore Sightseeing"
            >
              <ChevronRight className="w-8 h-8 sm:w-11 sm:h-11" />
            </button>
          </div>
        </div>
      </section>

      {/* State-wise Tours */}
      <section id="states" className="pt-12 pb-12 md:pt-16 md:pb-16 bg-[#1e7123]">
        <div className="w-[95%] mx-auto max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Explore by State</h2>
          </motion.div>

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
              <motion.a
                href={`/states/${state.slug}`}
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex flex-row items-center gap-4 group cursor-pointer w-full bg-white p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all border border-gray-100/10"
              >
                {/* Image from left */}
                <motion.div
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.1 + (i % 3) * 0.1 }}
                  className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] shrink-0 overflow-hidden bg-gray-100"
                >
                  <img src={state.img} alt={state.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </motion.div>
                {/* Text from right */}
                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.15 + (i % 3) * 0.1 }}
                  className="flex flex-col justify-center"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#1e7123] transition-colors leading-tight mb-1">
                    {state.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                    {state.title}
                  </p>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-white">
        <div className="w-[95%] mx-auto max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              { title: "Luxury Car Rent", img: "/Survices/LuxuryCarRent.jpg" },
              { title: "Bus Booking", img: "/Survices/busbooking.jpg", objectPosition: "bottom" },
              { title: "Airport Transfer", img: "/Survices/Airport.jpg" },
              { title: "South Tour", img: "/destination/South.jpg" },
              { title: "Corporate Travel", img: "/Survices/CorporateTravel.jpg" },
              { title: "Family Trips", img: "/Survices/family.jpg" },
              { title: "Vintage Car Hire", img: "/Survices/Vintage.jpg" },
              { title: "Wedding Car Rental", img: "/Survices/weddingcarrental1.jpg" },
              { title: "Day Trips", img: "/Survices/Daytrip.jpg", objectPosition: "bottom" },
              { title: "Couples Trips", img: "/Survices/couples.jpg" },
              { title: "Group Travel", img: "/Survices/grouptravel.jpg" },
              { title: "Round Trip", img: "/Survices/Roundtrip.jpg" },
              { title: "Cruises", img: "/Survices/Private Shuttle Services in Fort Lauderdale.jpg" },
            ].map((service, i) => (
              <motion.div
                key={i}
                onClick={() => openBookingModal(service.title)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex flex-col group cursor-pointer bg-[#1e7123] rounded-none overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-emerald-700/40"
              >
                {/* Big Image on Top - slide in from left */}
                <motion.div
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.1 + (i % 3) * 0.1 }}
                  className="w-full h-48 sm:h-52 lg:h-56 overflow-hidden bg-black/10 relative"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{ objectPosition: service.objectPosition || 'center' }}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${service.objectPosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
                  />
                </motion.div>

                {/* Text Below the Image - slide in from right */}
                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.15 + (i % 3) * 0.1 }}
                  className="py-4 px-4 sm:py-5 sm:px-6 flex items-center justify-center text-center"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-snug tracking-tight">
                    {service.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-[95%] mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-2">Why Choose Us</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light mb-8">Experience the difference with our commitment to quality, comfort, and reliability.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-12 md:gap-y-16 text-center">

            {/* Comfortable Vehicles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Comfortable Vehicles</h3>
                <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Well-maintained vehicles for comfortable journeys, ensuring a smooth ride every time.</p>
              </motion.div>
            </motion.div>

            {/* Experienced Drivers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.23 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Experienced Drivers</h3>
                <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Professional drivers familiar with local and outstation routes for your safety.</p>
              </motion.div>
            </motion.div>

            {/* Flexible Travel Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto"
              >
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.31 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Flexible Travel Options</h3>
                <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">One-way, round trip, day trips and fully customized journeys to suit your schedule.</p>
              </motion.div>
            </motion.div>

            {/* Family & Group Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.34 }}
                className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto"
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.39 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Family & Group Friendly</h3>
                <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Vehicles suitable for couples, families and large groups looking for space and comfort.</p>
              </motion.div>
            </motion.div>

            {/* 24/7 Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.42 }}
                className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto"
              >
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.47 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">24/7 Support</h3>
                <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Dedicated assistance before and during your journey for ultimate peace of mind.</p>
              </motion.div>
            </motion.div>

            {/* Transparent Booking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.40 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.50 }}
                className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 mx-auto"
              >
                <svg className="absolute inset-0 w-full h-full text-[#F0F5F0] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 2 A 4 4 0 0 1 54 4 L 57 11 A 4 4 0 0 0 62 14 L 69 13 A 4 4 0 0 1 73 17 L 74 24 A 4 4 0 0 0 78 28 L 84 31 A 4 4 0 0 1 87 37 L 83 43 A 4 4 0 0 0 83 49 L 87 55 A 4 4 0 0 1 84 61 L 78 64 A 4 4 0 0 0 74 68 L 73 75 A 4 4 0 0 1 69 79 L 62 78 A 4 4 0 0 0 57 81 L 54 88 A 4 4 0 0 1 50 90 A 4 4 0 0 1 46 88 L 43 81 A 4 4 0 0 0 38 78 L 31 79 A 4 4 0 0 1 27 75 L 26 68 A 4 4 0 0 0 22 64 L 16 61 A 4 4 0 0 1 13 55 L 17 49 A 4 4 0 0 0 17 43 L 13 37 A 4 4 0 0 1 16 31 L 22 28 A 4 4 0 0 0 26 24 L 27 17 A 4 4 0 0 1 31 13 L 38 14 A 4 4 0 0 0 43 11 L 46 4 A 4 4 0 0 1 50 2 Z" />
                </svg>
                <div className="relative z-10 text-[#3C5734]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 tracking-wide font-sans">Transparent Booking</h3>
                <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">Clear communication about vehicle, trip requirements, and pricing with zero hidden fees.</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section id="reviews" className="pt-12 pb-8 md:pt-16 md:pb-10 bg-[#1e7123]">
        <div className="w-[95%] mx-auto max-w-none text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">What Our Customers Say</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light mb-12"><strong>4.9/5</strong> based on over 100+ Google Reviews.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { name: "Shilpa Jain", text: "Very gud and experienced driver which guides u very well about city and drive very smoothly and wait very patiently ....definitely i recommend Rahul tour and travels to everyone who wants safe and secure journey...", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" },
              { name: "Milind Nagdive", text: "Good service provider, fair price ,excellent and safe driving skills and well maintained car. Also knowledgeable regarding travelling. I suggest those who wanted to spend their best tour they can take Rahul tour and travels 😊😊👍", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
              { name: "Abdul Tayyab", text: "Most reliable service. I had a urgent requirement Rahul bhai provided a 5 start service and car. The driver was really very awesome!", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
              { name: "Harshita Pathak", text: "Very good experience... service was fantastic", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
              { name: "Simran Thakur", text: "Wonderful travel experience with Rahul tour and travels. This men's driving is very smooth and good, his way of talking to the customer is excellent.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop" },
              { name: "Parth Yadav", text: "Rahul tour and travels is a best traveller in indore a owner well people who show more places in there tours and well communications.", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop" }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white p-4 md:p-5 rounded-xl border border-transparent text-left flex gap-4 md:gap-5 items-start shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Avatar from left */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.1 + (i % 2) * 0.1 }}
                  className="w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-lg overflow-hidden bg-[#DFE5E7] flex items-end justify-center"
                >
                  <svg className="w-[85%] h-[85%] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </motion.div>
                {/* Content from right */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.15 + (i % 2) * 0.1 }}
                  className="flex flex-col flex-1 py-1"
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-bold text-gray-900 text-sm md:text-base">{review.name}</span>
                    <div className="flex text-[#FBBC04]">
                      {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-3 h-3 md:w-4 md:h-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                    "{review.text}"
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* FAQ */}
      <section className="pt-12 md:pt-16 pb-6 md:pb-10 bg-white">
        <div className="w-[95%] mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-2">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">Got questions? Find answers to commonly asked questions below.</p>
          </motion.div>

          <div className="border-t border-gray-200">
            {[
              { q: "What vehicles do you provide?", a: "We provide Cars, Force Traveller, Force Urbania and luxury travel vehicles, subject to availability." },
              { q: "Do you provide outstation travel?", a: "Yes, outstation and round-trip travel can be arranged across India." },
              { q: "Do you provide airport pickup and drop?", a: "Yes, we offer timely airport transfer services." },
              { q: "Can I book a luxury Urbania?", a: "Yes, you can book a luxury Urbania with us, subject to advance booking and availability." },
              { q: "Do you provide one-way trips?", a: "Yes, depending on the route and availability." }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-b border-gray-200"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer id="contact" className="bg-[#1e7123] text-gray-200 py-24 font-sans">
        <div className="w-[95%] mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8 items-start">

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
        <div className="w-[95%] mx-auto max-w-7xl mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 font-light">
          <p>© {new Date().getFullYear()} Rahul Tour & Travels. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

        {/* Design & Developed By */}
        <div className="w-[95%] mx-auto max-w-7xl mt-6 pt-6 border-t border-white/10 flex justify-center items-center">
          <a
            href="https://wfnear.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100"
            title="Design & Developed by Near Software Solutions"
          >
            <img
              src="/designanddevelopby.png"
              alt="Design And Develop By Near Software Solutions"
              className="h-9 sm:h-10 md:h-12 w-auto object-contain"
            />
          </a>
        </div>
      </footer>




      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3">
        {/* Call Button */}
        <a
          href="tel:08989299997"
          className="flex items-center justify-center bg-[#0066cc] hover:bg-[#0052a3] text-white w-12 h-12 sm:w-13 sm:h-13 md:w-13 md:h-13 lg:w-14 lg:h-14 rounded-full shadow-xl hover:scale-110 transition-transform group relative border-2 border-white"
          aria-label="Call Us"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 text-white" />
          <span className="absolute right-full mr-3 bg-white text-gray-800 px-2.5 py-1 rounded shadow-lg text-xs font-bold opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918989299997"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center bg-[#1e7123] text-white w-12 h-12 sm:w-13 sm:h-13 md:w-13 md:h-13 lg:w-14 lg:h-14 rounded-full shadow-xl hover:scale-110 transition-transform group relative border-2 border-white/20"
          aria-label="Chat with us on WhatsApp"
        >
          <WhatsApp className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7" />
          <span className="absolute right-full mr-3 bg-white text-gray-800 px-2.5 py-1 rounded shadow-lg text-xs font-bold opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </a>
      </div>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setBookingModalOpen(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up scale-100">
            <div className="p-6 text-center">
              <button
                onClick={() => setBookingModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mx-auto mb-3">
                <img src="/logo/logo1.png" alt="Travel with Rahul" className="h-16 md:h-20 w-auto object-contain" />
              </div>

              {selectedVehicle ? (
                <>
                  <div className="inline-block px-3 py-1 bg-emerald-50 text-[#1e7123] rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
                    Flagship Fleet Booking
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1.5 font-sans">
                    Book {selectedVehicle}
                  </h3>
                  <p className="text-gray-600 mb-6 text-[14px] leading-relaxed">
                    {selectedVehicle === 'Force Traveller'
                      ? '14 to 26 Seater • Starting ₹22/km. Perfect for family tours, spiritual yatra & outstation trips.'
                      : selectedVehicle === 'Force Urbania'
                      ? 'Ultra-luxury VIP Van with executive recliners & ambient interior. Ideal for premium corporate & family travel.'
                      : selectedVehicle.includes('Bus') || selectedVehicle.includes('Volvo')
                      ? '20 to 55 Seater Luxury AC Buses & Volvo with verified chauffeurs for weddings, corporate events & group tours.'
                      : `Book ${selectedVehicle} with experienced chauffeur for local or outstation travel.`}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans">Book a Tour or Rent a Vehicle</h3>
                  <p className="text-gray-600 mb-6 text-[15px]">
                    Online booking is coming soon! You can quickly book your tour package or vehicle rental via WhatsApp or Call us directly.
                  </p>
                </>
              )}

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/918989299997?text=${encodeURIComponent(
                    selectedVehicle
                      ? `Hi, I would like to book ${selectedVehicle} for a tour/rental.`
                      : 'Hi, I would like to book a trip/vehicle'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 font-bold text-[16px] flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] rounded-xl"
                >
                  <WhatsApp className="w-5 h-5" /> {selectedVehicle ? `Book ${selectedVehicle} on WhatsApp` : 'Book via WhatsApp'}
                </a>
                <a
                  href="tel:08989299997"
                  className="w-full bg-gray-900 hover:bg-black text-white py-3.5 font-bold text-[16px] flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] rounded-xl"
                >
                  <Phone className="w-5 h-5" /> Call Now: 089892 99997
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

