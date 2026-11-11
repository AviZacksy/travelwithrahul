import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, WhatsApp, Instagram, ChevronLeft } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Rahul Tour & Travels Indore. We are committed to protecting your personal information and ensuring secure car rental and travel bookings.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-black py-6 md:py-8 px-6 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white hover:underline mb-4 md:mb-0 md:absolute md:top-10 font-medium transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
          <div className="text-center pt-2 pb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-[95%] mx-auto max-w-4xl mt-10 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
        <div className="space-y-8 text-gray-700 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At Travel with Rahul, we collect information to provide better services to all our users. The types of personal information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number when you make a booking or inquiry.</li>
              <li>Payment information (processed securely through our payment gateways).</li>
              <li>Travel preferences and special requests to customize your itinerary.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your bookings and coordinate your travel arrangements.</li>
              <li>Communicate with you regarding your bookings, updates, or customer service inquiries.</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Send promotional emails and offers (only if you have opted in).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with trusted third-party service providers (such as hotels, transport providers, and airlines) solely for the purpose of fulfilling your travel bookings. We ensure that these partners adhere to strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, update, or request the deletion of your personal information at any time. If you wish to exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="mb-2">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <ul className="font-medium text-gray-900">
              <li>Phone: 089892 99997 / 091111 35812</li>
              <li>Email: travelsrahul23@gmail.com</li>
              <li>Address: Indore, Madhya Pradesh, India</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-[#1e7123] text-gray-200 py-24 font-sans mt-20">
        <div className="w-[95%] mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8 items-start">
          {/* Quick Links */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Quick Links</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><Link href="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Home</Link></li>
              <li><Link href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Destinations</Link></li>
              <li><Link href="/#indore-tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Indore Local</Link></li>
              <li><Link href="/#states" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Explore by State</Link></li>
              <li><Link href="/#vehicles" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Vehicles</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Services</Link></li>
              <li><Link href="/#reviews" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Reviews</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* State Tour Packages */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">State Tours</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><Link href="/states/madhya-pradesh" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Madhya Pradesh Tour</Link></li>
              <li><Link href="/states/rajasthan" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Rajasthan Tour</Link></li>
              <li><Link href="/states/gujarat" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Gujarat Tour</Link></li>
              <li><Link href="/states/maharashtra" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Maharashtra Tour</Link></li>
              <li><Link href="/states/uttar-pradesh" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Uttar Pradesh Tour</Link></li>
              <li><Link href="/states/uttarakhand" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Uttarakhand Tour</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Destinations</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><Link href="/#indore-tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Indore Sightseeing</Link></li>
              <li><Link href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Ujjain Mahakaleshwar</Link></li>
              <li><Link href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Omkareshwar</Link></li>
              <li><Link href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Maheshwar</Link></li>
              <li><Link href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Mandu</Link></li>
              <li><Link href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Pachmarhi Hill</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Our Services</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><Link href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Vintage Car Hire</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Luxury Car Rent</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Tour Packages</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Bus Booking</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Airport Transfer</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Wedding Car Rental</Link></li>
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
                <a href="https://wa.me/918989299997" target="_blank" rel="nofollow noopener noreferrer" className="hover:text-white transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-white/60 shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Follow on Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-[95%] mx-auto max-w-7xl mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 font-light">
          <p>© {new Date().getFullYear()} Rahul Tour & Travels. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
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
        <a href="https://wa.me/918989299997" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center justify-center bg-[#1e7123] text-white w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl hover:scale-110 transition-transform group relative border-2 border-white/20">
          <WhatsApp className="w-9 h-9 md:w-12 md:h-12" />
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </a>
      </div>
    </div>
  );
}
