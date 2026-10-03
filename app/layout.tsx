import type { Metadata } from "next";
import { Jost, Dancing_Script } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Tour & Travels Indore | Premium Car & Van Rental",
  description: "Premium car and luxury van rentals in Indore for local trips, outstation journeys, corporate travel, family tours and special occasions. Book Force Urbania, Traveller, and Luxury Vans.",
  keywords: "Rahul Tour and Travels Indore, Tour and Travels Indore, Car Rental Indore, Car Hire Indore, Force Traveller on Rent in Indore, Force Urbania on Rent in Indore, Luxury Van on Rent in Indore, Airport Transfer Indore, Round Trip Taxi Indore, Innova Hycross on rent in Indore, Fortuner on rent in Indore, Innova Crysta rent Indore, Indore Local Sightseeing Taxi, Baglamukhi Temple Nalkheda Taxi, Khajrana Ganesh Temple Taxi, Indore Zoo Taxi, 56 Dukan Taxi, Rajwada Palace Taxi, Lal Bagh Palace Taxi, Annapurna Mandir Taxi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${dancingScript.variable} scroll-smooth`}>
      <body className="antialiased text-gray-800 bg-[#FAFAFA] font-sans">
        {children}
      </body>
    </html>
  );
}
