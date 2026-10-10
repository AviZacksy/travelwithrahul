import type { Metadata } from "next";
import { Jost, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Tour & Travels Indore | Premium Car, Van & Tempo Traveller on Rent",
  description: "Best taxi services and premium car/luxury van rentals in Indore. Book AC Tempo Travellers, Force Urbania, Innova, and luxury vehicles for outstation trips, local tours, corporate travel, and pilgrimages like Omkareshwar, Ujjain, Kedarnath, and more.",
  keywords: [
    "Rahul Tour and Travels Indore", "Tour and Travels Indore", "Car Rental Indore", "Car Hire Indore",
    "Force Traveller on Rent in Indore", "Force Urbania on Rent in Indore", "Luxury Van on Rent in Indore",
    "Airport Transfer Indore", "Round Trip Taxi Indore", "Innova Hycross on rent in Indore",
    "Fortuner on rent in Indore", "Innova Crysta rent Indore", "Indore Local Sightseeing Taxi",
    "Baglamukhi Temple Nalkheda Taxi", "Khajrana Ganesh Temple Taxi", "Indore Zoo Taxi",
    "56 Dukan Taxi", "Rajwada Palace Taxi", "Lal Bagh Palace Taxi", "Annapurna Mandir Taxi",
    "Tempo Travellers On Rent For Vaishno Devi", "Taxi Services For Badrinath", "Taxi Services For Prayagraj",
    "Taxi Services For Kedarnath", "Taxi Services For Amritsar", "Taxi Services For Rishikesh",
    "Tempo Travellers On Rent For Manali", "Taxi Services For Rajkot", "Tempo Traveller On Rent For Corporate On Monthly Basis",
    "7 Seater Tempo Travellers On Rent", "8 Seater Tempo Travellers On Rent", "9 Seater Tempo Travellers On Rent",
    "10 Seater Tempo Travellers On Rent", "11 Seater Tempo Travellers On Rent", "14 Seater Tempo Travellers On Rent",
    "15 Seater Tempo Travellers On Rent", "16 Seater Tempo Travellers On Rent", "17 Seater Tempo Travellers On Rent",
    "22 Seater Tempo Travellers On Rent", "25 Seater Tempo Travellers On Rent", "17 Seater Tempo Travellers On Rent-Force Urbania",
    "Tempo Travellers On Rent For Bhavnagar", "Vans On Rent-Force Urbania", "Taxi Services For Srinagar",
    "Taxi Services For Ludhiana", "Taxi Services For Omkareshwar", "Taxi Services For Outstation",
    "Taxi Services For Mahabaleshwar", "Tempo Travellers On Rent For Delhi", "Taxi Services For Jaipur",
    "Taxi Services For Tirupati", "Taxi Services For Goa", "Taxi Services For Bhopal", "Taxi Services For Ujjain",
    "AC Tempo Traveller On Rent", "Vans On Rent", "Taxi Services For Mumbai", "Tourist Taxi Operators",
    "Taxi Services For Shirdi", "Taxi Services", "Car Rental-Toyota", "Car Rental-Toyota Innova",
    "Car Rental For Outstation", "Car Rental", "24 Hours Taxi Services", "Urbania for outstation",
    "Urbania on rent", "Luxury car on rent", "Traveller on rent", "Traveller for outstation",
    "Luxury Traveller on rent", "Best traveller service Indore", "Best traveller van Indore",
    "Traveller hire Indore", "Tempo traveller on rent Indore", "Traveller on rent near me",
    "Luxury car rental Indore", "Indore tempo traveller service", "Indore Urbania on rent",
    "Outstation Taxi Indore", "Chardham Yatra Taxi", "Mahakaleshwar Taxi from Indore",
    "Omkareshwar to Indore Taxi", "Corporate Travel Indore", "Wedding Car Rental Indore",
    "Luxury Bus Rent Indore", "Best Taxi Service in Indore"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${dancingScript.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased text-gray-800 bg-[#FAFAFA] font-sans">
        {children}
      </body>
    </html>
  );
}
