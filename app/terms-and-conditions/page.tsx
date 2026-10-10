import React from 'react';
import { MapPin, Phone, Mail, WhatsApp, Instagram, ChevronLeft } from "@/components/Icons";

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-black py-6 md:py-8 px-6 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <a href="/" className="inline-flex items-center text-white/80 hover:text-white hover:underline mb-4 md:mb-0 md:absolute md:top-10 font-medium transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </a>
          <div className="text-center pt-2 pb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Terms and Conditions</h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-[95%] mx-auto max-w-4xl mt-10 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
        <div className="space-y-8 text-gray-700 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Travel with Rahul, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Booking and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All bookings are subject to availability and confirmation.</li>
              <li>An advance payment is required to secure your booking. The exact amount will be communicated during the booking process.</li>
              <li>Full payment must be completed prior to the commencement of the journey unless otherwise agreed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cancellations and Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made 48 hours or more before the scheduled trip may be eligible for a partial refund, minus processing fees.</li>
              <li>Cancellations made within 48 hours of the scheduled trip are generally non-refundable.</li>
              <li>In the event that we must cancel a trip due to unforeseen circumstances (e.g., severe weather, vehicle breakdown), a full refund or alternative arrangement will be provided.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Passenger Responsibilities</h2>
            <p className="mb-4">
              Passengers are expected to conduct themselves respectfully during the journey. Any damage caused to the vehicle by the passenger will be charged directly to the passenger.
            </p>
            <p>
              Travel with Rahul is not responsible for any personal items lost, stolen, or damaged during the trip.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Itinerary Changes</h2>
            <p>
              While we strive to adhere strictly to the planned itinerary, route changes may be necessary due to road conditions, weather, or other unavoidable factors. The driver reserves the right to make necessary adjustments for the safety and comfort of all passengers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Liability</h2>
            <p>
              Travel with Rahul shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services, delays, or interruptions in service outside of our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="mb-2">For any questions regarding these Terms and Conditions, please reach out to us at:</p>
            <ul className="font-medium text-gray-900">
              <li>Phone: 089892 99997 / 091111 35812</li>
              <li>Email: travelsrahul23@gmail.com</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-[#1e7123] text-gray-200 py-24 font-sans mt-20">
        <div className="w-[95%] mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8 items-start">
          {/* Quick Links */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Quick Links</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><a href="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Home</a></li>
              <li><a href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Destinations</a></li>
              <li><a href="/#indore-tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Indore Local</a></li>
              <li><a href="/#states" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Explore by State</a></li>
              <li><a href="/#vehicles" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Vehicles</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Services</a></li>
              <li><a href="/#reviews" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Reviews</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Destinations</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><a href="/#indore-tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Indore Sightseeing</a></li>
              <li><a href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Ujjain Mahakaleshwar</a></li>
              <li><a href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Omkareshwar</a></li>
              <li><a href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Maheshwar</a></li>
              <li><a href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Mandu</a></li>
              <li><a href="/#tours" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Pachmarhi Hill</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Our Services</h3>
            <ul className="flex flex-col space-y-3 text-white/80 font-light text-sm">
              <li><a href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Vintage Car Hire</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Luxury Car Rent</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Tour Packages</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Bus Booking</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Airport Transfer</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Wedding Car Rental</a></li>
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
        <div className="w-[95%] mx-auto max-w-7xl mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 font-light">
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
    </div>
  );
}
