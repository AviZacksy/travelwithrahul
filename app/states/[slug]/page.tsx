import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, WhatsApp, Instagram } from "@/components/Icons";

interface Place {
  name: string;
  img: string;
  highlight: string;
  desc: string;
}

interface Itinerary {
  title: string;
  duration: string;
  route: string;
  details: string;
}

interface StateDetail {
  name: string;
  tagline: string;
  coverImg: string;
  description: string;
  overview: string[];
  distanceFromIndore: string;
  bestTimeToVisit: string;
  places: Place[];
  itineraries: Itinerary[];
  travelTips: string[];
  faqs: { question: string; answer: string }[];
}

const stateData: Record<string, StateDetail> = {
  'madhya-pradesh': {
    name: "Madhya Pradesh",
    tagline: "The Sacred Heart of India: Ancient Jyotirlingas, Historic Forts & Heritage Sanctuaries",
    coverImg: '/explorebystate/madhyapradesh.jpg',
    description: "Explore the heartland of India from Indore. Visit Mahakaleshwar Ujjain, Omkareshwar, Maheshwar, Mandu, Pachmarhi, and Khajuraho with premium car and tempo traveller hire.",
    distanceFromIndore: "Local & Outstation Hub (0 km – 550 km)",
    bestTimeToVisit: "October to March (Pleasant weather for temple darshan and sightseeing)",
    overview: [
      "Madhya Pradesh is blessed with unmatched spiritual energy, architectural grandeur, and scenic biodiversity. Centered right in Indore, Rahul Tour & Travels connects you to the state's most revered pilgrimage destinations and serene hill retreats with maximum comfort and efficiency.",
      "Whether you are planning a same-day Mahakaleshwar Bhasma Aarti tour to Ujjain, a sacred Omkareshwar Jyotirlinga parikrama along the Holy Narmada, a historic excursion through the romantic ruins of Mandu and Ahilya Fort Maheshwar, or an extended wildlife and heritage trail across Khajuraho and Pachmarhi, our fleet is ready to serve you 24/7.",
      "With smooth 4-lane express highways connecting Indore to Bhopal, Ujjain, Dewas, and Khandwa, traveling across Madhya Pradesh with our verified chauffeurs ensures punctual pickups, zero navigation hassles, and complete peace of mind for families and senior citizens."
    ],
    places: [
      {
        name: 'Mahakaleshwar Jyotirlinga temple Ujjain',
        img: '/states_images/mahakaleshwar.jpg',
        highlight: 'One of the 12 Sacred Jyotirlingas & Dakshinmukhi Idol',
        desc: 'Revered as the king of time and death, Mahakaleshwar temple in Ujjain is world-famous for its early morning Bhasma Aarti and newly built grand Mahakal Lok corridor. Just 55 km from Indore, easily reachable within 1 hour via the Indore-Ujjain super corridor.'
      },
      {
        name: 'Omkareshwar jyotirlinga Temple',
        img: '/states_images/omkareshwar.jpg',
        highlight: 'Sacred Island Shaped Like the Sacred Om Symbol',
        desc: 'Perched on the Mandhata island on the sacred Narmada River, Omkareshwar is home to the fourth Jyotirlinga and the Mamleshwar temple. Located 78 km from Indore, our private cabs offer smooth transit along with Mamleshwar darshan and boat ride assistance.'
      },
      {
        name: 'Maheshwar Fort & Ahilya Ghat',
        img: '/states_images/maheshwar.jpg',
        highlight: 'Capital of Rajmata Ahilyabai Holkar & Handloom Capital',
        desc: 'Famous for the colossal Ahilya Fort overlooking the serene Narmada Ghats and exquisite Maheshwari silk weaves. A peaceful heritage stop just 90 km from Indore, ideal for scenic photography, serene boat rides, and shopping.'
      },
      {
        name: 'Baglamukhi Temple Nalkheda',
        img: '/states_images/bagalamukhi.jpg',
        highlight: 'Ancient Tantric Siddhapeeth of Maa Baglamukhi',
        desc: 'Situated on the banks of the Lakhundar river in Nalkheda, this legendary temple is believed to have been established by Maharaja Yudhishthira. Devotees visit for special anushthan and hawans to overcome legal troubles and obstacles.'
      },
      {
        name: 'Maihar Sharda Mata Temple',
        img: '/states_images/maihar.jpg',
        highlight: 'Trikoota Hill Shrine with 1063 Steps & Ropeway',
        desc: 'The venerated temple of Goddess Sharda perched atop the Trikoota mountain in Satna district. Famous for the legends of warriors Alha and Udal. We offer customized tempo traveller packages from Indore for family pilgrims.'
      },
      {
        name: 'Dewas Chamunda Mata Temple',
        img: '/destination/baglamukhitemple .jpg',
        highlight: 'Twin Goddess Shrines atop the Iconic Dewas Tekri',
        desc: 'A prominent pilgrimage center located only 35 km from Indore along the AB Road highway. Features the hillside shrines of Maa Chamunda and Maa Tulja Bhavani with panoramic views from the hill peak and cable car facilities.'
      },
      {
        name: 'Khajuraho Group of Monuments',
        img: '/states_images/khajuraho.jpg',
        highlight: 'UNESCO World Heritage Site with Intricate Sculptures',
        desc: 'World-renowned for medieval Hindu and Jain temples exhibiting extraordinary stone carvings, intricate friezes, and sublime Nagara architecture crafted by the Chandela dynasty.'
      },
      {
        name: 'Pachmarhi Hill Station',
        img: '/states_images/pachmarhi.jpg',
        highlight: 'Queen of the Satpuras & Pristine Waterfalls',
        desc: 'The only hill station in Madhya Pradesh, enveloped in sal forests, waterfalls like Bee Falls and Duchess Falls, scenic viewpoints at Dhoopgarh, and ancient Pandav Caves.'
      },
      {
        name: 'Sanchi Stupa',
        img: '/destination/Mandu.jpg',
        highlight: 'Oldest Stone Structure in India & UNESCO Monument',
        desc: 'Commissioned by Emperor Ashoka the Great in the 3rd century BCE, the Great Stupa at Sanchi showcases remarkable Toranas (gateways) depicting stories from the life of Buddha.'
      }
    ],
    itineraries: [
      {
        title: "Same-Day Indore - Ujjain - Mahakal Lok Tour",
        duration: "1 Day (12 - 14 Hours)",
        route: "Indore → Ujjain Mahakal → Kal Bhairav → Harsiddhi → Indore",
        details: "Early morning pickup from your Indore hotel or residence. Attend darshan at Mahakaleshwar, visit Kal Bhairav temple, explore the grand Mahakal Lok corridor, and return comfortably in the evening."
      },
      {
        title: "Indore - Omkareshwar - Maheshwar - Mandu Heritage Circuit",
        duration: "2 Days / 1 Night",
        route: "Indore → Omkareshwar Jyotirlinga → Maheshwar Fort → Mandu → Indore",
        details: "Combine divine blessings at Omkareshwar with the romantic stone poetry of Mandu and Ahilya Ghat in Maheshwar. Perfect weekend getaway for families."
      },
      {
        title: "Grand MP Heritage & Wildlife Expedition",
        duration: "5 Days / 4 Nights",
        route: "Indore → Bhopal → Sanchi → Pachmarhi → Khajuraho",
        details: "Comprehensive state tour covering UNESCO heritage landmarks, Buddhist monuments, lush Satpura hill slopes, and Chandela temple architecture in luxury Force Urbania or Innova Crysta."
      }
    ],
    travelTips: [
      "For Mahakaleshwar Bhasma Aarti, advance online booking is advised; our drivers assist with optimal early arrival timing.",
      "Combine Omkareshwar and Maheshwar in a single loop to save highway travel time.",
      "Wear comfortable walking shoes while exploring the vast palaces of Mandu and Mahakal Lok.",
      "All our vehicles are commercial yellow-plate with state permits, so you experience zero border delays."
    ],
    faqs: [
      {
        question: "How far is Ujjain Mahakaleshwar from Indore and how long does the drive take?",
        answer: "Ujjain is approximately 55 km from Indore. The 4-lane expressway ensures a smooth and pleasant drive of around 1 hour to 1 hour 15 minutes."
      },
      {
        question: "Can I book a Force Urbania or Tempo Traveller for a family trip from Indore?",
        answer: "Yes! We maintain well-equipped Force Urbania (10, 13, 17-seater) and AC Tempo Travellers (12 to 26-seater) with pushback recliner seats, luggage carriers, and verified chauffeurs."
      },
      {
        question: "Do you offer one-way taxi drops or only round trips?",
        answer: "We offer both! You can book convenient one-way drops (e.g., Indore to Ujjain or Bhopal) as well as multi-day round-trip packages at transparent per-kilometer rates."
      },
      {
        question: "Are toll taxes, driver night allowances, and parking included in the fare?",
        answer: "We provide fully itemized, crystal-clear quotes. You can choose all-inclusive packages (fuel, toll, state permit, parking, driver allowance) or standard per-km rates with zero hidden charges."
      }
    ]
  },
  rajasthan: {
    name: "Rajasthan",
    tagline: "The Royal Land of Forts, Dunes & Legendary Pilgrimage Centers",
    coverImg: '/explorebystate/rajasthan.jpg',
    description: "Book comfortable cars, Force Urbania, and tempo travellers from Indore to Rajasthan. Explore Khatu Shyam Ji, Salasar Balaji, Sawariya Seth, Udaipur, Jaipur, and Jodhpur.",
    distanceFromIndore: "Indore to Southern Rajasthan Border: ~280 km (Udaipur ~410 km)",
    bestTimeToVisit: "September to March (Pleasant desert weather and colorful seasonal festivals)",
    overview: [
      "Rajasthan is a land of regal chivalry, magnificent hill forts, golden desert sands, and deeply revered divine shrines. Traveling to Rajasthan by road from Indore is one of the most popular journeys for pilgrims, royal heritage lovers, and wedding groups alike.",
      "From Indore, southern Rajasthan (Chitrakoot, Nimbahera, Mandaphia Sawariya Seth, and Udaipur) is directly connected via excellent 4-lane highways through Ratlam and Neemuch. You can easily reach Udaipur or Chittorgarh in just 6 to 8 hours of relaxed cruising in our air-conditioned luxury cabs and Force Urbania vans.",
      "Rahul Tour & Travels provides specialized multi-day Rajasthan pilgrimage and heritage packages with seasoned drivers who know every highway bypass, clean restaurant stop, and temple darshan regulation across the state."
    ],
    places: [
      {
        name: 'Sawariya Seth Temple Mandaphia',
        img: '/explorebystate/rajasthan/SawariyaSeth.jpg',
        highlight: 'One of Rajasthan’s Richest and Most Revered Krishna Shrines',
        desc: 'Located in Mandaphia near Chittorgarh, the miraculous Sawariya Seth Temple attracts millions of devotees seeking blessings for business and family prosperity. Approximately 330 km from Indore via Neemuch.'
      },
      {
        name: 'Khatushyamji Temple Sikar',
        img: '/explorebystate/rajasthan/khatushyamji.jpg',
        highlight: 'The Divine Abode of Barbarik / Hare Ka Sahara',
        desc: 'Famous worldwide as the bestower of boons to the defeated, Khatu Shyam Ji temple in Sikar is one of the grandest pilgrimage centers in Rajasthan. We offer specialized group tempo traveller packages from Indore for Nishan Yatra and Ekadashi darshan.'
      },
      {
        name: 'Nathdwara Shrinathji Temple',
        img: '/explorebystate/rajasthan/NathdwaraTemple.jpg',
        highlight: 'Sacred Seat of Pushtimarg Vaishnava Tradition & Vishwas Swaroopam',
        desc: 'Located 48 km north of Udaipur along the Banas river, Nathdwara enshrines the 7-year-old child manifestation of Lord Krishna, Shrinathji. Also famous for the 369-foot Vishwas Swaroopam Shiva statue.'
      },
      {
        name: 'Salasar Balaji Temple',
        img: '/explorebystate/rajasthan/SalasarBalaji Temple.jpg',
        highlight: 'Miraculous Chamatkari Hanuman Shrine with Round Beard & Mustache',
        desc: 'A sacred focal point for Hanuman devotees across India in Churu district. Thousands of pilgrims travel with us from Indore for Tuesday and Saturday darshan and special Savamani offerings.'
      },
      {
        name: 'Mehndipur Balaji Temple',
        img: '/explorebystate/rajasthan/Mehndipurbalaji Temple.jpg',
        highlight: 'Famed Spiritual Center for Exorcism & Divine Healing',
        desc: 'Situated in Dausa district, Mehndipur Balaji is revered for its extraordinary spiritual vibrations, Pretraj Sarkar, and Bhairav Baba shrines, drawing seekers from every corner of India.'
      },
      {
        name: 'Ramdevra Temple Jaisalmer',
        img: '/explorebystate/rajasthan/RamdevraTemple.jpg',
        highlight: 'Samadhi Shrine of Baba Ramdevji, Symbol of Communal Harmony',
        desc: 'Located near Pokhran in Jaisalmer district, this holy shrine is visited by both Hindu and Muslim devotees seeking the grace of 14th-century saint Baba Ramdevji.'
      },
      {
        name: 'Udaipur City of Lakes',
        img: '/explorebystate/rajasthan/udaipurcity.jpg',
        highlight: 'Venice of the East, Lake Pichola & Majestic City Palace',
        desc: 'Romantic lake vistas, historic palaces, Sajjangarh Monsoon Palace, and boat cruises on Lake Pichola. A top road trip destination just 410 km from Indore.'
      },
      {
        name: 'Jodhpur Blue City & Mehrangarh Fort',
        img: '/explorebystate/rajasthan/jodhpur.jpg',
        highlight: 'Imposing Citadel, Umaid Bhawan & Azure Painted Streets',
        desc: 'Dominated by the massive Mehrangarh Fort towering on a perpendicular cliff, Jodhpur captivates with royal museums, clock tower bazaars, and rich Marwari hospitality.'
      },
      {
        name: 'Jaipur Pink City',
        img: '/explorebystate/rajasthan/jaipur.jpg',
        highlight: 'Hawa Mahal, Amer Fort, Jantar Mantar & Royal Heritage',
        desc: 'The capital of Rajasthan and a UNESCO World Heritage City, offering grand forts, regal shopping for gemstones and textiles, and mouthwatering Rajasthani cuisine.'
      }
    ],
    itineraries: [
      {
        title: "Indore to Sawariya Seth & Nathdwara Spiritual Darshan",
        duration: "2 Days / 1 Night",
        route: "Indore → Ratlam → Nimbahera → Sawariya Seth → Nathdwara → Indore",
        details: "A dedicated pilgrimage tour covering morning darshan at Sawariya Seth Mandaphia and evening Aarti at Shrinathji Nathdwara."
      },
      {
        title: "Indore to Udaipur Royal Lakes & Palaces Tour",
        duration: "3 Days / 2 Nights",
        route: "Indore → Chittorgarh Fort → Udaipur City Palace → Lake Pichola → Indore",
        details: "Explore Chittorgarh's Vijay Stambh and Kumbha Palace en route, followed by two full days of royal sightseeing and lake leisure in Udaipur."
      },
      {
        title: "Grand Rajasthan Royal & Holy Circuit",
        duration: "6 Days / 5 Nights",
        route: "Indore → Udaipur → Jodhpur → Pushkar → Jaipur → Indore",
        details: "The ultimate road journey across Rajasthan's most iconic heritage landmarks and sacred lakes in an ultra-luxurious Force Urbania or Innova Crysta."
      }
    ],
    travelTips: [
      "Carry woollens during November to February as desert nights can be quite cold.",
      "Check temple darshan timings in advance, especially for Pushtimarg Jhanki darshan at Nathdwara.",
      "Plan overnight halts in Udaipur or Chittorgarh when heading towards Jodhpur or Jaisalmer.",
      "Our chauffeurs know all trusted hygienic vegetarian food stops along the Indore-Neemuch-Udaipur highway."
    ],
    faqs: [
      {
        question: "How long does it take to reach Udaipur from Indore by cab?",
        answer: "The distance is approximately 410 km via Ratlam and Neemuch, which typically takes 7.5 to 8.5 hours with comfortable tea and meal breaks."
      },
      {
        question: "Can we hire a Force Urbania for a family pilgrimage to Khatu Shyam Ji and Salasar?",
        answer: "Absolutely! Our 10, 13, and 17-seater Force Urbania vans are the most preferred choice for Khatu Shyam Ji and Salasar Balaji tours due to reclining seats and generous luggage space."
      },
      {
        question: "Does the rental fare include Rajasthan state border tax and toll charges?",
        answer: "All commercial vehicles crossing from MP to Rajasthan require an interstate permit and road tax. We provide transparent all-inclusive quotes covering state permits, toll plaza tags, and driver allowances."
      },
      {
        question: "Can we customize the tour itinerary during our road trip?",
        answer: "Yes, our round-trip bookings give you the flexibility to add nearby sightseeing points or adjust departure times to suit your family's convenience."
      }
    ]
  },
  gujarat: {
    name: "Gujarat",
    tagline: "Land of Divine Jyotirlingas, Dwarkadhish & the World’s Tallest Monument",
    coverImg: '/explorebystate/Gujarat.jpg',
    description: "Hire taxis, Force Urbania, and Tempo Travellers from Indore to Gujarat. Tour Somnath Jyotirlinga, Dwarkadhish, Statue of Unity, Nageshwar, and Pavagadh.",
    distanceFromIndore: "Indore to Statue of Unity: ~390 km | Indore to Somnath: ~730 km",
    bestTimeToVisit: "October to March (Ideal for coastal temple darshan and Statue of Unity visits)",
    overview: [
      "Gujarat is a powerhouse of spirituality, coastal beauty, and visionary engineering. From the sacred Char Dham temple of Dwarkadhish to the First Jyotirlinga at Somnath and the towering Statue of Unity at Kevadia, Gujarat offers a deeply enriching travel experience.",
      "Traveling from Indore to Gujarat is exceptionally convenient via the new expressways and 4-lane highways passing through Dhar, Jhabua, Dahod, and Vadodara. The world-famous Statue of Unity is merely 390 km from Indore, making it an easy 7 to 8-hour drive.",
      "Rahul Tour & Travels provides specialized Saurashtra pilgrimage packages, coastal temple tours, and family holidays with comfortable multi-seater vehicles and experienced drivers."
    ],
    places: [
      {
        name: 'Somnath Jyotirlinga Temple',
        img: '/destination/Omkareshwar .jpg',
        highlight: 'The First of the Twelve Holy Jyotirlingas on the Arabian Shore',
        desc: 'Rebuilt multiple times through history as a symbol of invincible faith, the eternal shrine of Somnath sits on the rugged seashore of Prabhas Patan. Witness the awe-inspiring evening Light and Sound show and sacred ocean Aarti.'
      },
      {
        name: 'Dwarkadhish Temple (Jagat Mandir)',
        img: '/states_images/dwarkadhish.jpg',
        highlight: 'Ancient Char Dham Temple of Lord Krishna (King of Dwarka)',
        desc: 'Dating back over 2,200 years, the 5-story limestone Jagat Mandir stands proudly at the confluence of the Gomti river and the Arabian Sea, featuring a grand 52-yard flag unfurled five times daily.'
      },
      {
        name: 'Nageshwar Jyotirlinga Temple',
        img: '/destination/Omkareshwar .jpg',
        highlight: 'Protective Jyotirlinga with Giant 80-Foot Lord Shiva Statue',
        desc: 'Located between Dwarka and Bet Dwarka, Nageshwar Jyotirlinga protects devotees against all poisons and negative energies. Features an imposing seated Shiva statue visible from miles away.'
      },
      {
        name: 'Beyt Dwarka Temple',
        img: '/states_images/bet_dwarka.jpg',
        highlight: 'Historic Island Residence of Lord Krishna & Sudama Meeting Spot',
        desc: 'An idyllic island in the Gulf of Kutch accessible via the newly constructed Sudarshan Setu cable bridge. Home to Lord Krishna’s personal palace and ancient golden shrines.'
      },
      {
        name: 'Pavagadh Mahakali Temple',
        img: '/states_images/pavagadh.jpg',
        highlight: 'Ancient Shaktipeeth atop Volcanic Peak with Modern Ropeway',
        desc: 'Perched on the summit of Pavagadh Hill near Champaner, this sacred Shaktipeeth is dedicated to Goddess Kalika. Devotees enjoy scenic hill views via the fast-moving ropeway system.'
      },
      {
        name: 'Statue of Unity Kevadia',
        img: '/states_images/statue_of_unity.jpg',
        highlight: 'World’s Tallest Monument (182 meters) Honoring Sardar Patel',
        desc: 'A modern marvel standing beside the Sardar Sarovar Dam on the Narmada river. Includes high-speed observation elevators, valley of flowers, glow garden, and laser light spectacle.'
      }
    ],
    itineraries: [
      {
        title: "Indore to Statue of Unity Weekend Tour",
        duration: "2 Days / 1 Night",
        route: "Indore → Jhabua → Vadodara → Kevadia (Statue of Unity) → Indore",
        details: "Departure from Indore early morning. Arrive at Kevadia by afternoon, visit the viewing gallery, Sardar Sarovar Dam, and the evening laser projection show. Return the next evening."
      },
      {
        title: "Complete Gujarat Jyotirlinga & Dwarka Yatra",
        duration: "5 Days / 4 Nights",
        route: "Indore → Ahmedabad → Dwarka → Bet Dwarka → Somnath → Indore",
        details: "Complete pilgrimage covering Dwarkadhish, Nageshwar Jyotirlinga, Sudarshan Setu, Somnath Jyotirlinga, and Bhalka Tirth in our luxury AC tempo traveller."
      },
      {
        title: "Pavagadh Shaktipeeth & Vadodara Cultural Tour",
        duration: "2 Days / 1 Night",
        route: "Indore → Dahod → Champaner → Pavagadh → Laxmi Vilas Palace → Indore",
        details: "Divine darshan of Mahakali Mata at Pavagadh combined with the grand royal architecture of Vadodara’s Laxmi Vilas Palace."
      }
    ],
    travelTips: [
      "Book Statue of Unity viewing gallery tickets online in advance to guarantee entry slots.",
      "The new Sudarshan Setu makes traveling to Bet Dwarka swift and eliminates ferry boat queues.",
      "Dress conservatively for Dwarkadhish and Somnath temple complexes; electronic gadgets and leather items are restricted inside.",
      "Taste authentic Gujarati Thali and Kathiyawadi cuisine at trusted roadside dhabas recommended by our drivers."
    ],
    faqs: [
      {
        question: "How far is the Statue of Unity from Indore by car?",
        answer: "The Statue of Unity is approximately 390 km from Indore via Dahod and Vadodara. The drive takes about 7 to 8 hours on well-maintained national and state highways."
      },
      {
        question: "What vehicle is best for a 5-day Dwarka-Somnath group trip?",
        answer: "For groups of 8 to 16 passengers, our 13-seater or 17-seater Force Urbania and 17-seater AC Tempo Travellers provide the ultimate comfort with pushback seating, luggage racks, and climate control."
      },
      {
        question: "Is alcohol allowed when traveling by road in Gujarat?",
        answer: "Gujarat is a dry state. Alcohol consumption or possession without an official tourist permit is strictly prohibited by law. Our drivers ensure full compliance with interstate transport guidelines."
      },
      {
        question: "Can we cover both Somnath and Dwarka in one trip?",
        answer: "Yes, Somnath and Dwarka are connected along the Saurashtra coastal highway (approx. 230 km, 4.5 hours drive). Most of our pilgrimage tours cover both seamlessly in 4 to 5 days."
      }
    ]
  },
  maharashtra: {
    name: "Maharashtra",
    tagline: "Home of 3 Sacred Jyotirlingas, Shirdi Sai Baba & Mountain Shrines",
    coverImg: '/explorebystate/Maharastra.jpg',
    description: "Book outstation cabs and luxury tempo travellers from Indore to Maharashtra. Visit Shirdi Sai Baba, Shani Shingnapur, Trimbakeshwar, Bhimashankar, and Grishneshwar.",
    distanceFromIndore: "Indore to Shirdi: ~410 km | Indore to Trimbakeshwar (Nashik): ~420 km",
    bestTimeToVisit: "July to February (Pleasant winter and breathtaking lush greenery during post-monsoon)",
    overview: [
      "Maharashtra holds a uniquely revered place in Hindu pilgrimage, housing 3 of the 12 sacred Jyotirlingas (Trimbakeshwar, Bhimashankar, and Grishneshwar) alongside the world-famous spiritual sanctuary of Shirdi Sai Baba Sansthan and the miraculous Shani Shingnapur shrine.",
      "From Indore, Maharashtra is directly accessible via the famous Agra-Bombay National Highway (NH 52) cutting straight south through Sendhwa and Dhule to Nashik and Shirdi. The 4-lane smooth highway ensures that Shirdi can be reached in approximately 8 to 9 hours.",
      "Rahul Tour & Travels operates regular round-trip tempo travellers, Force Urbania vans, and Toyota Innova cabs from Indore to Shirdi, Nashik Trimbakeshwar, and Pune for family groups, senior citizens, and corporate devotees."
    ],
    places: [
      {
        name: 'Shirdi Sai Baba Temple',
        img: '/explorebystate/maharastra/Shirditemple.jpg',
        highlight: 'World-Renowned Universal Abode of Revered Saint Sai Baba',
        desc: 'The Samadhi Mandir of Shri Sai Baba draws devotees from all over the world. Experience peaceful darshan, the divine Kakad Aarti, Dwarkamai, Chavadi, and receive sacred prasad laddoos.'
      },
      {
        name: 'Shani Shingnapur Temple',
        img: '/explorebystate/maharastra/ShaniSingapurtemple.jpg',
        highlight: 'Miraculous Open-Air Black Stone Shrine of Lord Shani Dev',
        desc: 'Located in Ahmednagar district, this unique village is world-famous for houses without doors or locks, protected solely by the divine justice and power of Lord Shani Dev.'
      },
      {
        name: 'Trimbakeshwar Jyotirlinga Temple Nashik',
        img: '/explorebystate/maharastra/TrimbakeshwarTemple.jpg',
        highlight: 'Only Jyotirlinga Embodying the Holy Trinity: Brahma, Vishnu & Mahesh',
        desc: 'Nestled at the foothills of the Brahmagiri mountain, the source of the holy Godavari river. Famed for ancient black stone architecture and sacred rituals like Narayan Nagbali.'
      },
      {
        name: 'Bhimashankar Jyotirlinga Temple',
        img: '/explorebystate/maharastra/Bhimashankarjyotirlingtemple.jpg',
        highlight: 'Sacred Hilltop Shrine in Sahyadri Wildlife Sanctuary',
        desc: 'Set amidst dense Sahyadri forests near Pune, Bhimashankar is the source of the Bhima river. Built in graceful Nagara architecture with ornate wooden carvings.'
      },
      {
        name: 'Grishneshwar Jyotirlinga Temple',
        img: '/explorebystate/maharastra/grishneshwarjyotirligatemple.jpg',
        highlight: 'The 12th & Final Jyotirlinga near the Historic Ellora Caves',
        desc: 'Constructed by Ahilyabai Holkar of Indore using striking red stone, Grishneshwar is located right beside the UNESCO World Heritage Ellora Caves in Chhatrapati Sambhajinagar.'
      },
      {
        name: 'Saptashrungi Devi Temple Vani',
        img: '/explorebystate/maharastra/saptashrugi.jpg',
        highlight: 'Half-Shaktipeeth Shrine Nestled among Seven Hill Peaks',
        desc: 'Situated atop a hill in Nashik district, the 8-foot-tall idol of Mahishasuramardini with 18 arms is a revered stop for devotees seeking the Mother Goddess’s blessings.'
      }
    ],
    itineraries: [
      {
        title: "Indore to Shirdi & Shani Shingnapur Darshan Yatra",
        duration: "2 Days / 1 Night",
        route: "Indore → Dhule → Shirdi Sai Temple → Shani Shingnapur → Indore",
        details: "Smooth early morning drive from Indore to Shirdi. Attend evening Kakad Aarti and Samadhi darshan, followed by morning visit to Shani Shingnapur and comfortable return trip."
      },
      {
        title: "Maharashtra 3-Jyotirlinga & Shirdi Mega Pilgrimage",
        duration: "4 Days / 3 Nights",
        route: "Indore → Trimbakeshwar → Shirdi → Shani Shingnapur → Grishneshwar (Ellora) → Indore",
        details: "Complete divine circuit covering two sacred Jyotirlingas, Shirdi Sai Baba, and Grishneshwar in an air-conditioned Force Urbania or Innova Crysta."
      },
      {
        title: "Indore to Nashik & Trimbakeshwar Tour",
        duration: "2 Days / 1 Night",
        route: "Indore → Malegaon → Nashik Panchavati → Trimbakeshwar → Indore",
        details: "Visit sacred Panchavati (Sita Gufa, Kalaram temple) on the banks of Godavari, followed by holy Jyotirlinga darshan at Trimbakeshwar."
      }
    ],
    travelTips: [
      "Book Shirdi VIP darshan and Aarti passes online on the official Sansthan portal to avoid long queues during weekends.",
      "Men must wear traditional dhotis/kurta for inner sanctum entry during Abhishek at Trimbakeshwar.",
      "The scenic Kasara Ghat and Nashik route offers beautiful waterfalls during the monsoon season (July to September).",
      "Our drivers are well-versed with the Mumbai-Agra highway toll booths and reliable clean food plazas."
    ],
    faqs: [
      {
        question: "How long does it take to drive from Indore to Shirdi?",
        answer: "The distance from Indore to Shirdi is roughly 410 km via NH 52 (Dhule - Malegaon route), taking approximately 8 to 9 hours of comfortable driving."
      },
      {
        question: "Can we cover both Shirdi and Shani Shingnapur in a 2-day trip?",
        answer: "Yes, Shani Shingnapur is about 70 km (1.5 hours) from Shirdi. Most our clients easily visit both within a convenient 2-day, 1-night weekend itinerary."
      },
      {
        question: "Do you have Force Urbania or Innova Crysta for outstation family trips to Maharashtra?",
        answer: "Yes, our fleet includes luxury Force Urbania (10, 13, 17 seater) with pushback recliner seats and Innova Crysta MPVs with experienced highway chauffeurs."
      },
      {
        question: "Are Maharashtra state road taxes and border permits handled by the driver?",
        answer: "Yes, all interstate taxes, permits, and highway tolls are taken care of by our commercial yellow-plate fleet, ensuring a seamless, uninterrupted journey."
      }
    ]
  },
  'uttar-pradesh': {
    name: "Uttar Pradesh",
    tagline: "The Sacred Spiritual Cradle: Kashi Vishwanath, Ayodhya Ram Mandir & Mathura-Vrindavan",
    coverImg: '/explorebystate/uttarpradesh.jpg',
    description: "Book outstation cabs, Force Urbania, and AC tempo travellers from Indore to Uttar Pradesh. Explore Kashi Vishwanath, Ayodhya Ram Mandir, Mathura, Vrindavan, and Agra.",
    distanceFromIndore: "Indore to Agra: ~580 km | Indore to Ayodhya: ~870 km | Indore to Varanasi: ~940 km",
    bestTimeToVisit: "October to March (Pleasant winter climate for temple circuits and heritage tours)",
    overview: [
      "Uttar Pradesh is the spiritual epicentre of India, blessed by the sacred currents of the Ganga and Yamuna. It is home to Lord Rama's birthplace in Ayodhya, Lord Krishna's playground in Mathura-Vrindavan, the ancient spiritual heart of Kashi Vishwanath in Varanasi, and the timeless marble poetry of the Taj Mahal in Agra.",
      "Traveling from Indore to Uttar Pradesh has become remarkably fast and comfortable thanks to modern expressways like the Bundelkhand Expressway, Purvanchal Expressway, and Agra-Lucknow Expressway. A journey that once took days can now be covered in smooth highway comfort.",
      "Rahul Tour & Travels provides customized spiritual tour itineraries from Indore featuring premium Force Urbania luxury vans, 12 to 26-seater tempo travellers, and executive sedans with seasoned drivers experienced in North Indian highways."
    ],
    places: [
      {
        name: 'Kashi Vishwanath Jyotirlinga Temple Varanasi',
        img: '/destination/Mahakaleshwar .jpg',
        highlight: 'The Eternal Golden Temple on the Ghats of Sacred Ma Ganga',
        desc: 'One of the holiest Jyotirlingas, transformed by the majestic Kashi Vishwanath Corridor connecting the temple directly to the Ganga Ghats. Experience the world-famous evening Ganga Aarti at Dashashwamedh Ghat and serene morning boat rides.'
      },
      {
        name: 'Ayodhya Shri Ram Janmabhoomi Mandir',
        img: '/destination/baglamukhitemple .jpg',
        highlight: 'The Magnificent New Mandir at Lord Rama’s Sacred Birthplace',
        desc: 'The historic new Ram Mandir in Ayodhya stands as a supreme monument of Indian culture and devotion. Visit Ram Lalla darshan, Hanumangarhi, Kanak Bhawan, and take a holy dip in the sacred Saryu river.'
      },
      {
        name: 'Chitrakoot Dham',
        img: '/states_images/chitrakoot.jpg',
        highlight: 'Lord Rama, Sita & Lakshmana’s 11-Year Exile Hermitage',
        desc: 'Enveloped by forested hills along the Mandakini river, Chitrakoot is renowned for Ramghat, Kamadgiri Parikrama, Sphatik Shila, and the miraculous Gupt Godavari caves.'
      },
      {
        name: 'Mathura Shri Krishna Janmasthan',
        img: '/states_images/mathura.jpg',
        highlight: 'The Exact Birthplace Prison Cell of Bhagwan Shri Krishna',
        desc: 'The deeply sacred Katra Keshavdev shrine marks the divine advent of Lord Krishna. Famous for Dwarkadhish temple, Vishram Ghat Yamuna Aarti, and vibrant festive celebrations.'
      },
      {
        name: 'Vrindavan Prem Mandir & Banke Bihari',
        img: '/states_images/vrindavan.jpg',
        highlight: 'Divine Leelas of Radha-Krishna & Musical Fountain Spectacles',
        desc: 'The spiritual town of Vrindavan enchants devotees with the blissful darshan of Thakur Banke Bihari, the architectural brilliance of Prem Mandir carved in Italian marble, and ISKCON Vrindavan.'
      },
      {
        name: 'Agra Taj Mahal',
        img: '/states_images/taj_mahal.jpg',
        highlight: 'UNESCO World Heritage Site & Wonder of the World',
        desc: 'The world-celebrated ivory-white marble mausoleum on the south bank of the Yamuna river, complemented by the formidable red-sandstone Agra Fort and Fatehpur Sikri.'
      }
    ],
    itineraries: [
      {
        title: "Braj Bhoomi Mathura - Vrindavan - Agra Heritage Tour",
        duration: "3 Days / 2 Nights",
        route: "Indore → Gwalior → Agra Taj Mahal → Mathura → Vrindavan → Indore",
        details: "Visit the Taj Mahal and Agra Fort, followed by evening Aarti at Prem Mandir Vrindavan and morning darshan at Krishna Janmabhoomi Mathura."
      },
      {
        title: "Ayodhya Ram Mandir & Kashi Vishwanath Holy Yatra",
        duration: "4 Days / 3 Nights",
        route: "Indore → Prayagraj Sangam → Ayodhya Ram Lalla → Kashi Vishwanath → Indore",
        details: "A transformative spiritual expedition combining Holy Sangam Snan at Prayagraj, divine darshan of Ram Lalla in Ayodhya, and Kashi Vishwanath Ganga Aarti."
      },
      {
        title: "Complete UP Spiritual & Cultural Grand Tour",
        duration: "6 Days / 5 Nights",
        route: "Indore → Chitrakoot → Prayagraj → Varanasi → Ayodhya → Lucknow → Indore",
        details: "The ultimate pilgrimage covering all major spiritual powerhouses of Uttar Pradesh in an executive Force Urbania or luxury AC tempo traveller."
      }
    ],
    travelTips: [
      "Book Ayodhya Ram Mandir and Kashi Vishwanath Sugam Darshan passes online in advance during festive periods.",
      "Keep electronic gadgets, bags, and leather belts in hotel lockers before entering the inner temple corridors in Mathura and Varanasi.",
      "The Yamuna Expressway and Bundelkhand Expressway offer smooth high-speed cruising with designated rest areas.",
      "Try local delicacies like Mathura ke Peda, Banarasi Paan, and Ayodhya Malpua at verified clean vendors."
    ],
    faqs: [
      {
        question: "How can I travel from Indore to Ayodhya Ram Mandir by road?",
        answer: "The road distance from Indore to Ayodhya is approximately 870 km. With modern expressways, our clients travel in luxury Force Urbania or Innova Crysta with a comfortable overnight halt or continuous chauffeur rotation."
      },
      {
        question: "Can we hire a 17-seater Tempo Traveller for an extended family yatra to Varanasi and Ayodhya?",
        answer: "Yes, our 17-seater AC Tempo Travellers with executive pushback seating, ample luggage space, and seasoned highway drivers are the top choice for multi-day pilgrimage tours from Indore."
      },
      {
        question: "Is it possible to include Prayagraj Sangam in the Kashi-Ayodhya tour?",
        answer: "Yes, Prayagraj lies strategically between Indore, Varanasi, and Ayodhya. Our 4-day and 5-day itineraries seamlessly incorporate holy Sangam snan and Bade Hanuman Ji darshan."
      },
      {
        question: "Are your drivers experienced on the expressways of Uttar Pradesh?",
        answer: "All our long-distance chauffeurs are background-verified, non-smoking professionals who regularly drive across MP, Rajasthan, and UP expressways with impeccable safety records."
      }
    ]
  },
  uttarakhand: {
    name: "Uttarakhand",
    tagline: "Devbhoomi: Sacred Chardham Yatra, Ganga Aarti & Himalayan Hill Retreats",
    coverImg: '/explorebystate/uttrakhand.jpg',
    description: "Book Tempo Travellers, Force Urbania, and cabs from Indore to Uttarakhand. Complete Chardham Yatra, Kedarnath, Badrinath, Haridwar, Rishikesh, and Nainital.",
    distanceFromIndore: "Indore to Haridwar: ~920 km | Indore to Rishikesh: ~945 km",
    bestTimeToVisit: "May to June & September to November for Chardham; Round-the-year for Haridwar & Rishikesh",
    overview: [
      "Uttarakhand, revered across the world as 'Devbhoomi' (The Land of Gods), is home to India’s most sacred high-altitude pilgrimage — the Holy Chardham (Yamunotri, Gangotri, Kedarnath, and Badrinath) — set against the breathtaking snow-capped peaks of the Garhwal Himalayas.",
      "For devotees and travelers embarking on this once-in-a-lifetime journey from Indore, choosing a dependable, high-comfort vehicle is paramount. Mountain roads require skilled hill-certified chauffeurs, powerful engines, and top-tier safety standards.",
      "Rahul Tour & Travels provides specialized Chardham Yatra packages and leisure hill station tours starting directly from your doorstep in Indore. Our fleet of 10/13/17-seater Force Urbania and heavy-duty AC Tempo Travellers are engineered for superior mountain stability, passenger legroom, and effortless ghat climbs."
    ],
    places: [
      {
        name: 'Haridwar Har Ki Pauri Ganga River',
        img: '/destination/Narmada.jpg',
        highlight: 'Gateway to the Gods & Mesmerizing Evening Ganga Aarti',
        desc: 'Where the holy Ganga enters the plains from the Himalayas. Thousands gather daily at Har Ki Pauri to witness floating diya lamps, Vedic chanting, and take an auspicious purifying dip in the sacred river.'
      },
      {
        name: 'Rishikesh Ram Jhula & Yoga Capital',
        img: '/destination/Narmada.jpg',
        highlight: 'Global Yoga Capital, Iconic Suspension Bridges & River Rafting',
        desc: 'Surrounded by forested hills and emerald waters, Rishikesh offers serene ashrams, Parmarth Niketan Ganga Aarti, ancient shrines, and thrilling white-water river rafting adventures.'
      },
      {
        name: 'Kedarnath Jyotirlinga Temple',
        img: '/states_images/kedarnath.jpg',
        highlight: 'Highest of the 12 Jyotirlingas at 3,584m in the Mandakini Valley',
        desc: 'Standing tall amidst snow-capped peaks behind Mandakini river, Kedarnath was revived by Adi Shankaracharya. Accessible via trek or helicopter from Gaurikund/Phata.'
      },
      {
        name: 'Badrinath Temple',
        img: '/states_images/badrinath.jpg',
        highlight: 'Sacred Himalayan Char Dham Abode of Lord Badri Vishal',
        desc: 'Situated between the Nar and Narayana mountain ranges along the Alaknanda river, Badrinath features colorful temple architecture, Tapt Kund hot springs, and Mana (India’s first village).'
      },
      {
        name: 'Gangotri Temple',
        img: '/destination/CharDham.jpg',
        highlight: 'Holy Origin Shrine of Goddess Ganga at Bhagirathi Valley',
        desc: 'The pristine white granite shrine dedicated to Ma Ganga where King Bhagirath performed intense penance to bring the divine river down to Earth.'
      },
      {
        name: 'Yamunotri Temple',
        img: '/states_images/yamunotri.jpg',
        highlight: 'Westernmost Himalayan Shrine & Origin of River Yamuna',
        desc: 'Nestled in the Garhwal Himalayas, Yamunotri is famous for the Divya Shila, Surya Kund natural thermal springs where rice is cooked as prasad, and scenic mountain treks.'
      },
      {
        name: 'Nainital Lake & Hill Resort',
        img: '/states_images/nainital.jpg',
        highlight: 'Picturesque Eye-Shaped Naini Lake & Naina Devi Temple',
        desc: 'A charming hill station centered around a glistening emerald lake surrounded by seven hills, offering yachting, cable cars, Snow View point, and vibrant Mall Road shopping.'
      },
      {
        name: 'Mussoorie Queen of the Hills',
        img: '/states_images/mussoorie.jpg',
        highlight: 'Panoramic Doon Valley Views, Kempty Falls & Gun Hill',
        desc: 'Perched at 2,000 meters above sea level, Mussoorie charms visitors with its British-colonial architecture, misty cedar pathways, and panoramic vistas of the Himalayan snowline.'
      }
    ],
    itineraries: [
      {
        title: "Haridwar & Rishikesh Spiritual Weekend Tour",
        duration: "4 Days / 3 Nights",
        route: "Indore → Delhi → Haridwar (Har Ki Pauri) → Rishikesh (Ram Jhula) → Indore",
        details: "Attend the divine Ganga Aarti at Har Ki Pauri, visit Mansa Devi and Chandi Devi ropeway temples, explore Rishikesh ashrams and return relaxed."
      },
      {
        title: "Do Dham Yatra: Kedarnath & Badrinath from Indore",
        duration: "8 Days / 7 Nights",
        route: "Indore → Haridwar → Guptkashi → Kedarnath → Pipalkoti → Badrinath → Rishikesh → Indore",
        details: "Our most sought-after pilgrimage package. Complete sacred darshan at both Kedarnath and Badrinath with dedicated chauffeurs experienced on mountain roads."
      },
      {
        title: "Complete Chardham Yatra by Road",
        duration: "12 Days / 11 Nights",
        route: "Indore → Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Indore",
        details: "The ultimate spiritual pilgrimage encompassing all four sacred Himalayan dhams in a sanitized, luxury Force Urbania or AC Tempo Traveller."
      }
    ],
    travelTips: [
      "Biometric Chardham Yatra registration on the Uttarakhand government portal is mandatory for all pilgrims before starting.",
      "Pack multi-layered woollen clothing, thermals, raincoats, and comfortable hiking footwear, as mountain weather changes rapidly.",
      "Keep sufficient cash on hand as high-altitude ATM networks and digital mobile connectivity can be intermittent.",
      "Our drivers are specifically trained for safe hill driving, adhering strictly to mountain speed limits and daylight transit guidelines."
    ],
    faqs: [
      {
        question: "When do the Chardham temples open and close each year?",
        answer: "The Chardham portals usually open on the auspicious day of Akshaya Tritiya (late April or early May) and close shortly after Diwali/Bhai Dooj in November."
      },
      {
        question: "Why is Force Urbania recommended for Chardham Yatra from Indore?",
        answer: "Force Urbania offers a high-roof cabin, powerful engine torque for steep Himalayan ghats, individual AC vents, and deep reclining seats that prevent travel fatigue on long multi-day journeys."
      },
      {
        question: "Can senior citizens comfortably undertake the yatra in your vehicles?",
        answer: "Yes, our tempo travellers feature low-entry steps, cushioned suspension, and considerate chauffeurs who take scheduled breaks at hygienic roadside rest stops."
      },
      {
        question: "Do you assist with Kedarnath helicopter bookings and yatra registration?",
        answer: "We guide all our guests with official registration procedures and synchronize road travel timings with your confirmed helicopter or pony/palki schedules at Gaurikund."
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(stateData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stateInfo = stateData[slug];

  if (!stateInfo) {
    return {
      title: "State Tour Packages | Rahul Tour & Travels Indore",
      description: "Explore outstation tour packages and car rentals from Indore across India.",
    };
  }

  const topPlaces = stateInfo.places.slice(0, 4).map((p) => p.name).join(", ");

  return {
    title: `${stateInfo.name} Tour Packages & Car/Tempo Traveller Rental`,
    description: `Book premium taxi service, Force Urbania, and AC Tempo Travellers from Indore to ${stateInfo.name}. Visit ${topPlaces} with expert drivers at best rates.`,
    alternates: {
      canonical: `/states/${slug}`,
    },
    openGraph: {
      title: `${stateInfo.name} Tour Packages & Cab Hire | Rahul Tour & Travels Indore`,
      description: `Explore top pilgrimage and tourist destinations in ${stateInfo.name} with premium vehicles from Indore.`,
      url: `https://www.travelwithrahul.in/states/${slug}`,
      siteName: "Rahul Tour & Travels Indore",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stateInfo = stateData[slug];

  if (!stateInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">State Tour Not Found</h1>
          <p className="text-gray-600 mb-6 text-sm">The state tour package you are looking for does not exist or has been relocated.</p>
          <Link
            href="/#states"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#1e7123] text-white font-medium rounded-full hover:bg-[#16561a] transition-colors"
          >
            Explore All State Tours
          </Link>
        </div>
      </div>
    );
  }

  const otherStates = Object.entries(stateData)
    .filter(([key]) => key !== slug)
    .map(([key, data]) => ({
      slug: key,
      name: data.name,
      tagline: data.tagline,
      coverImg: data.coverImg,
      description: data.description,
    }));

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": stateInfo.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.travelwithrahul.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "State Tours",
        "item": "https://www.travelwithrahul.in/#states",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${stateInfo.name} Tours`,
        "item": `https://www.travelwithrahul.in/states/${slug}`,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Header Bar */}
      <header className="bg-black py-4 md:py-6 px-4 sm:px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-white/90 hover:text-white font-medium text-sm transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="tel:08989299997"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0066cc] hover:bg-[#0052a3] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call: 089892 99997
            </a>
            <a
              href={`https://wa.me/918989299997?text=${encodeURIComponent(
                `Hello Rahul Tour & Travels, I want to inquire about the ${stateInfo.name} tour package.`
              )}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1DA851] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
            >
              <WhatsApp className="w-3.5 h-3.5" /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-emerald-950 text-white py-14 sm:py-20 px-4 sm:px-6 border-b border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center space-x-2 text-xs text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link href="/#states" className="hover:text-white transition-colors">Explore by State</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="text-emerald-400 font-medium" aria-current="page">
                {stateInfo.name}
              </li>
            </ol>
          </nav>

          <span className="inline-block px-3.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-3 border border-emerald-500/30">
            Outstation Tour Package from Indore
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {stateInfo.name} Tour Packages
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed mb-6">
            {stateInfo.tagline}
          </p>

          {/* Quick Metrics Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
              <span className="font-semibold text-white">Distance:</span>
              <span>{stateInfo.distanceFromIndore}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
              <span className="font-semibold text-white">Best Season:</span>
              <span>{stateInfo.bestTimeToVisit}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/15">
              <span className="font-semibold text-white">Fleet:</span>
              <span>Force Urbania, Innova & Tempo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-[95%] mx-auto max-w-7xl py-12 flex-1">
        {/* Comprehensive State Overview (Rich Text) */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              About Traveling to {stateInfo.name} from Indore
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base font-light">
              {stateInfo.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Famous Places & Attractions Section */}
        <section className="mb-14">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#1e7123] font-bold">Top Sightseeing & Pilgrimage Sites</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              Popular Attractions to Visit in {stateInfo.name}
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Every destination is covered seamlessly with our dedicated chauffeurs, point-to-point transfers, and flexible halts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stateInfo.places.map((place, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col group"
              >
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-100">
                  <img
                    src={place.img}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    By Travel with Rahul
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#1e7123] uppercase tracking-wide">
                      {place.highlight}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-1 mb-2 leading-snug group-hover:text-[#1e7123] transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                      {place.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">Chauffeur Driven</span>
                    <a
                      href={`https://wa.me/918989299997?text=${encodeURIComponent(
                        `Hi, I want to book a taxi/tempo traveller to visit ${place.name} in ${stateInfo.name}.`
                      )}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-xs font-semibold text-[#1e7123] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Inquire Now</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Tour Itineraries */}
        <section className="bg-emerald-50/60 rounded-2xl p-6 sm:p-10 border border-emerald-100 mb-14">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#1e7123] font-bold">Tailored Travel Plans</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                Recommended {stateInfo.name} Tour Itineraries
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                All itineraries are 100% customizable based on your group size, travel dates, and preferred pickup location in Indore.
              </p>
            </div>

            <div className="space-y-6">
              {stateInfo.itineraries.map((itinerary, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 sm:p-6 shadow-xs border border-emerald-100/80 hover:border-emerald-300 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{itinerary.title}</h3>
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-[#1e7123] text-xs font-bold rounded-full w-fit">
                      {itinerary.duration}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-gray-500 mb-2">
                    <span className="text-gray-700">Route:</span> {itinerary.route}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                    {itinerary.details}
                  </p>
                  <a
                    href={`https://wa.me/918989299997?text=${encodeURIComponent(
                      `Hello, I would like to book the "${itinerary.title}" for ${stateInfo.name}.`
                    )}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e7123] hover:text-emerald-800 transition-colors"
                  >
                    <span>Request Custom Quote & Booking</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicles Available for this State Tour */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 mb-14">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#1e7123] font-bold">Our Premium Fleet</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                Vehicles Available for {stateInfo.name} Tours
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                All vehicles feature commercial state permits, fast-tag, comprehensive insurance, and verified drivers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-2xl mb-2">🚐</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Force Urbania</h4>
                <p className="text-xs text-gray-600 mb-2">10, 13 & 17 Seater VIP Luxury Van with Pushback Recliners</p>
                <span className="text-[11px] font-semibold text-[#1e7123]">Best for VIP & Family Tours</span>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-2xl mb-2">🚌</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">AC Tempo Traveller</h4>
                <p className="text-xs text-gray-600 mb-2">12, 17, 20 & 26 Seater with Top Carrier & Boot Space</p>
                <span className="text-[11px] font-semibold text-[#1e7123]">Best for Pilgrimages & Groups</span>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-2xl mb-2">🚗</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Innova Crysta / Hycross</h4>
                <p className="text-xs text-gray-600 mb-2">6 to 7 Seater Premium MPV with Dual Air Conditioning</p>
                <span className="text-[11px] font-semibold text-[#1e7123]">Best for Executive Small Families</span>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-2xl mb-2">🚘</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Sedans & Compacts</h4>
                <p className="text-xs text-gray-600 mb-2">Swift Dzire & Toyota Etios for 4 Passengers</p>
                <span className="text-[11px] font-semibold text-[#1e7123]">Best for Economical Round Trips</span>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips & Why Choose Us */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#1e7123]">💡</span>
              <span>Essential Road Travel Tips for {stateInfo.name}</span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-700 font-light">
              {stateInfo.travelTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1e7123] mt-2 shrink-0"></span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#1e7123]">⭐</span>
              <span>Why Choose Rahul Tour & Travels Indore</span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-700 font-light">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e7123] mt-2 shrink-0"></span>
                <span><strong>Clean & Sanitized Vehicles:</strong> Every vehicle undergoes rigorous interior cleaning before departure.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e7123] mt-2 shrink-0"></span>
                <span><strong>Experienced Highway Drivers:</strong> Polite, non-smoking chauffeurs thoroughly familiar with interstate routes and safety protocols.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e7123] mt-2 shrink-0"></span>
                <span><strong>Transparent Pricing:</strong> Clear per-km or package billing with zero hidden surcharges or surprise costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e7123] mt-2 shrink-0"></span>
                <span><strong>24x7 Customer Support:</strong> On-road assistance and quick dispatch for complete peace of mind.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Frequently Asked Questions (FAQ) */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 mb-14">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#1e7123] font-bold">Got Questions?</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                Frequently Asked Questions about {stateInfo.name} Tours
              </h2>
            </div>

            <div className="space-y-4">
              {stateInfo.faqs.map((faq, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-gray-700 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other State Tours Section (Cross-Linking for SEO) */}
        <section className="mb-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#1e7123] font-bold">More Destinations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              Explore Other State Tour Packages from Indore
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Choose from our popular road trip circuits across Central and North India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherStates.map((st, i) => (
              <Link
                key={i}
                href={`/states/${st.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all border border-gray-100 group flex flex-col"
              >
                <div className="h-32 w-full overflow-hidden bg-gray-100">
                  <img
                    src={st.coverImg}
                    alt={st.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#1e7123] transition-colors">
                      {st.name} Tour
                    </h3>
                    <p className="text-xs text-gray-500 font-light line-clamp-2 mt-1">
                      {st.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#1e7123] mt-3 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Package →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#1e7123] text-gray-200 py-16 sm:py-20 font-sans mt-auto">
        <div className="w-[95%] mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {/* Quick Links */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Quick Links</h3>
            <ul className="flex flex-col space-y-2.5 text-white/80 font-light text-sm">
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
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">State Tours</h3>
            <ul className="flex flex-col space-y-2.5 text-white/80 font-light text-sm">
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
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Destinations</h3>
            <ul className="flex flex-col space-y-2.5 text-white/80 font-light text-sm">
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
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Our Services</h3>
            <ul className="flex flex-col space-y-2.5 text-white/80 font-light text-sm">
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
            <h3 className="text-white font-semibold text-lg mb-4 tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-white/50">Contact Us</h3>
            <ul className="flex flex-col space-y-3.5 text-white/80 font-light text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                <span>Indore, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-start gap-3 mt-2">
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
        <div className="w-[95%] mx-auto max-w-7xl mt-14 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 font-light">
          <p>© {new Date().getFullYear()} Rahul Tour & Travels. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3.5">
        {/* Call Button */}
        <a
          href="tel:08989299997"
          aria-label="Call Rahul Tour and Travels"
          className="flex items-center justify-center bg-gray-900 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 transition-transform group relative border-2 border-white/20"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
          <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded shadow-lg text-xs font-bold opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/918989299997?text=${encodeURIComponent(
            `Hi, I want to book a cab/tempo traveller for ${stateInfo.name} tour.`
          )}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Chat with Rahul Tour and Travels on WhatsApp"
          className="flex items-center justify-center bg-[#1e7123] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 transition-transform group relative border-2 border-white/20"
        >
          <WhatsApp className="w-7 h-7 md:w-8 md:h-8" />
          <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded shadow-lg text-xs font-bold opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
