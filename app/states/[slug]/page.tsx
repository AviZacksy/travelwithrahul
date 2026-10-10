import React from 'react';
import { MapPin, Phone, Mail, WhatsApp, Instagram } from "@/components/Icons";

const stateData = {
  rajasthan: {
    name: "Rajasthan",
    description: "Land of Kings, known for majestic forts and vibrant culture.",
    places: [
      { name: 'Sawariya seth Temple', img: '/explorebystate/rajasthan/SawariyaSeth.jpg' },
      { name: 'Khatushyamji Temple', img: '/explorebystate/rajasthan/khatushyamji.jpg' },
      { name: 'Nathdwara Temple', img: '/explorebystate/rajasthan/NathdwaraTemple.jpg' },
      { name: 'Salasar Balaji Temple', img: '/explorebystate/rajasthan/SalasarBalaji Temple.jpg' },
      { name: 'Mehndipur balaji Temple', img: '/explorebystate/rajasthan/Mehndipurbalaji Temple.jpg' },
      { name: 'Ramdevra Temple', img: '/explorebystate/rajasthan/RamdevraTemple.jpg' },
      { name: 'Udaipur City', img: '/explorebystate/rajasthan/udaipurcity.jpg' },
      { name: 'Jodhpur City', img: '/explorebystate/rajasthan/jodhpur.jpg' },
      { name: 'Jaipur City', img: '/explorebystate/rajasthan/jaipur.jpg' },
    ]
  },
  maharashtra: {
    name: "Maharashtra",
    description: "A state spanning west-central India, famous for caves and temples.",
    places: [
      { name: 'Shirdi temple', img: '/explorebystate/maharastra/Shirditemple.jpg' },
      { name: 'Shani Singapur temple', img: '/explorebystate/maharastra/ShaniSingapurtemple.jpg' },
      { name: 'Trimbakeshwar jyotirlinga temple', img: '/explorebystate/maharastra/TrimbakeshwarTemple.jpg' },
      { name: 'Bhimashankar jyotirling temple', img: '/explorebystate/maharastra/Bhimashankarjyotirlingtemple.jpg' },
      { name: 'grishneshwar jyotirlinga temple', img: '/explorebystate/maharastra/grishneshwarjyotirligatemple.jpg' },
      { name: 'saptashrungi mata Temple', img: '/explorebystate/maharastra/saptashrugi.jpg' },
    ]
  },
  gujarat: {
    name: "Gujarat",
    description: "Home to incredible temples, wildlife, and the Rann of Kutch.",
    places: [
      { name: 'Somenath jyotirlinga temple', img: '/destination/Omkareshwar .jpg' },
      { name: 'Dwarkadhish temple', img: '/states_images/dwarkadhish.jpg' },
      { name: 'Nageswar jyotirlinga temple', img: '/destination/Omkareshwar .jpg' },
      { name: 'Beyt dwarka temple', img: '/states_images/bet_dwarka.jpg' },
      { name: 'Pawagad maa kali temple', img: '/states_images/pavagadh.jpg' },
      { name: 'Statue of unity', img: '/states_images/statue_of_unity.jpg' },
    ]
  },
  'uttar-pradesh': {
    name: "Uttar Pradesh",
    description: "The heartland of India, known for the Taj Mahal and sacred rivers.",
    places: [
      { name: 'Kashi vishwanath jyotirlinga temple', img: '/destination/Mahakaleshwar .jpg' },
      { name: 'Ayodhya Ram ji Temple', img: '/destination/baglamukhitemple .jpg' },
      { name: 'Chitrakoot Temple', img: '/states_images/chitrakoot.jpg' },
      { name: 'Mathura Temple', img: '/states_images/mathura.jpg' },
      { name: 'Vrindavan Temple', img: '/states_images/vrindavan.jpg' },
      { name: 'Agra Taj Mahal', img: '/states_images/taj_mahal.jpg' },
    ]
  },
  uttarakhand: {
    name: "Uttarakhand",
    description: "Devbhoomi, the land of the gods, featuring the majestic Himalayas.",
    places: [
      { name: 'Haridwar Ganga River', img: '/destination/Narmada.jpg' },
      { name: 'Rishikesh Ram jhula', img: '/destination/Narmada.jpg' },
      { name: 'Kedarnath jyotirlinga Temple', img: '/states_images/kedarnath.jpg' },
      { name: 'Badarinath Temple', img: '/states_images/badrinath.jpg' },
      { name: 'Gangotri Temple', img: '/destination/CharDham.jpg' },
      { name: 'Yamunotri Temple', img: '/states_images/yamunotri.jpg' },
      { name: 'Nenital', img: '/states_images/nainital.jpg' },
      { name: 'Mussoorie', img: '/states_images/mussoorie.jpg' },
    ]
  },
  'madhya-pradesh': {
    name: "Madhya Pradesh",
    description: "The heart of India, rich in culture, wildlife, and history.",
    places: [
      { name: 'Mahakaleshwar Jyotirlinga temple Ujjain', img: '/states_images/mahakaleshwar.jpg' },
      { name: 'Omkareshwar jyotirlinga Temple', img: '/states_images/omkareshwar.jpg' },
      { name: 'Maheshwar Fort', img: '/states_images/maheshwar.jpg' },
      { name: 'Bagnlamukhi Temple', img: '/states_images/bagalamukhi.jpg' },
      { name: 'Maihar sharda mata Temple', img: '/states_images/maihar.jpg' },
      { name: 'Dewas Chamunda Mata Temple', img: '/destination/baglamukhitemple .jpg' },
      { name: 'Khajuraho Fort', img: '/states_images/khajuraho.jpg' },
      { name: 'Pachmarhi Hill station', img: '/states_images/pachmarhi.jpg' },
      { name: 'Sanchi Stupa', img: '/destination/Mandu.jpg' },
    ]
  }
};

export default async function StatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stateInfo = stateData[slug as keyof typeof stateData];

  if (!stateInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">State Not Found</h1>
          <a href="/#states" className="text-[#1e7123] hover:underline">Go back home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-black py-6 md:py-8 px-6 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <a href="/#states" className="inline-flex items-center text-white/80 hover:text-white hover:underline mb-4 md:mb-0 md:absolute md:top-10 font-medium transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </a>
          <div className="text-center pt-2 pb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{stateInfo.name}</h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light">{stateInfo.description}</p>
          </div>
        </div>
      </div>

      {/* Places Grid */}
      <div className="w-[95%] mx-auto max-w-7xl mt-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4 pb-4">
          {stateInfo.places.map((place, i) => (
            <a href="#" key={i} className="flex flex-row items-center gap-4 group cursor-pointer w-full">
              <div className="w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] shrink-0 overflow-hidden bg-gray-100">
                <img src={place.img} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[11px] sm:text-[13px] text-gray-800 mb-1 font-medium">By <span className="italic underline font-semibold text-gray-900">Travel with Rahul</span></p>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#1e7123] transition-colors leading-snug">
                  {place.name}
                </h3>
              </div>
            </a>
          ))}
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
