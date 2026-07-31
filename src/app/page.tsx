"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaMapPin, FaPhone, FaTwitter } from 'react-icons/fa'
import { Drill, Hammer, PaintBucket, Box, Truck, ShieldCheck, Users, Banknote, MessageCircle, MapPin } from 'lucide-react'
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import WhyChooseUs from "../../components/WhyChooseUs";
import Footer from "../../components/Footer";
import VisitUs from "../../components/VisitUs";
import Link from 'next/link';
import { useState } from "react";

// dynamic hero image based on time of day
export default function Home() {
  const [selectedBranch, setSelectedBranch] = useState("marondera");

  const whatsappNumber = "263782637892"; // replace with Buidmart WhatsApp
 const products = [
  {
    name: "Power Tools",
    icon: <Hammer className="w-12 h-12" />,
    desc: "Drills, Grinders, Saws",
    image: "/powertools.jpeg" // drill pic
  },
  {
    name: "Paint & Supplies", 
    icon: <PaintBucket className="w-12 h-12" />,
    desc: "Interior, Exterior, Brushes",
    image: "/paints.jpeg" // paint pic
  },
  {
    name: "Building Materials",
    icon: <Box className="w-12 h-12" />, 
    desc: "Cement, Bricks, Roofing",
    image: "/bricks.jpg" // bricks pic
  }
 ]
   const branches = [
  {
      id: "marondera",
      name: "Marondera (Head Office)",
      address: "Marondera, Zimbabwe",
      phones: ["+263 712 124 211", "+263 786 507 755", "Sales: 065 232 4453", "Admin: 065 232 4318"],
      img: "/hero/marondera.jpg"
    },
    {
      id: "macheke", 
      name: "Macheke",
      address: "Macheke, Zimbabwe",
      phones: ["0786 017 309", "Tel: 065 209 0533"],
      img: "/hero/macheke.jpg"
    },
    {
      id: "murewa",
      name: "Murewa",
      address: "Murewa, Zimbabwe", 
      phones: ["+263 778 444 778", "065 212 3886"],
      img: "/hero/murewa.jpg"
    },
    {
      id: "mutoko",
      name: "Mutoko",
      address: "Mutoko, Zimbabwe",
      phones: ["+263 719 292 621", "+263 652 132 645"],
      img: "/hero/mutoko.jpg"
    },
]
const currentBranch = branches.find(b => b.id === selectedBranch) || branches[0];
const benefits = [
  { icon: Truck, title: "Fast Delivery", desc: "Delivered to Marondera, Harare & Macheke" },
  { icon: ShieldCheck, title: "Genuine Brands", desc: "Bosch, Makita, Dulux & more" },
  { icon: Users, title: "Expert Advice", desc: "We help you pick the right tool" },
  { icon: Banknote, title: "Wholesale Prices", desc: "Best prices for builders" },
]
  return (
    <main className="min-h-screen bg-white text-gray-900">
     
  <Navbar />
      {/* HERO WITH DYNAMIC BACKGROUND */}
      <section 
        className="relative h-[500px] md:h-[600px] bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentBranch.img})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">KAZMAT HARDWARE</h1>
          <p className="text-lg md:text-2xl mb-4">Good tools for good work!!</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 mb-6">
            <p className="text-sm">Now Shopping from:</p>
            <p className="text-xl md:text-2xl font-bold text-yellow-400">{currentBranch.name}</p>
          </div>
          <Link href="#shop" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-bold text-lg">
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* BRANCHES SELECTOR */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">Our Branches</h2>
          <p className="text-center text-gray-600 mb-8">Select your nearest branch</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {branches.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(branch.id)}
                className={`border-2 rounded-xl p-5 text-left transition-all duration-300 ${
                  selectedBranch === branch.id 
                ? 'border-orange-500 bg-orange-50 shadow-lg scale-105' 
                  : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow'
                }`}
              >
                <h3 className="font-bold text-lg mb-2 text-gray-800">{branch.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{branch.address}</p>
                <div className="space-y-1">
                  {branch.phones.map((phone, i) => (
                    <p key={i} className="text-sm font-semibold text-orange-600">{phone}</p>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
  {/* PROMO BANNERS SECTION - MOBILE FIXED */}
<section className="py-8 px-4 bg-gray-50 animate-fade-in">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">

    {/* PROMO 1: BULK BRICKS */}
    <Link href="/order-bricks" className="bg-orange-500 active:bg-orange-600 text-white rounded-xl p-6 shadow-lg transition transform active:scale-95">
      <div className="flex items-start gap-4">
        <span className="text-4xl">🎁</span>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-1 text-white">BULK BUYER PROMO</h3>
          <p className="text-sm mb-3 text-white">
            Buy <span className="font-bold">30,000 Common Bricks</span> Get <span className="font-bold text-yellow-300">500 FREE</span>
          </p>
          <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full inline-block">Limited Time</span>
        </div>
      </div>
    </Link>

    {/* PROMO 2: FREE DELIVERY */}
    <Link href="/order-delivery" className="bg-green-500 active:bg-green-600 text-white rounded-xl p-6 shadow-lg transition transform active:scale-95">
      <div className="flex items-start gap-4">
        <span className="text-4xl">🚚</span>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-1 text-white">FREE LOCAL DELIVERY</h3>
          <p className="text-sm mb-3 text-white">
            Spend <span className="font-bold">$250+</span> and Get <span className="font-bold text-yellow-300">Free Delivery</span> within 10km
          </p>
          <span className="bg-white text-green-600 text-xs font-bold px-3 py-1 rounded-full inline-block">Marondera & Surrounds</span>
        </div>
      </div>
    </Link>

  </div>
</section>
{/* TRUSTED BRANDS - AUTO SCROLL MARQUEE FIXED V2 */}
<section className="sticky top-[64px] z-40 bg-white border-b shadow-sm py-4"> {/* top-[64px] so it sticks under your navbar */}
  <p className="text-center text-xs font-semibold text-gray-500 mb-3">WE STOCK TRUSTED BRANDS</p>
  
  <div className="overflow-hidden w-full">
    <div className="flex animate-marquee min-w-[200%]"> {/* min-w-[200%] is the key */}
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center justify-around gap-10 md:gap-16 px-8 flex-shrink-0 w-1/2"> {/* w-1/2 is the key */}
          <img src="/brands/total.png" alt="Total Tools" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/yale.jpg" alt="Yale" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/union.png" alt="Union" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/emtop.png" alt="Emtop" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/pioneer.png" alt="Pioneer" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/gedore.svg" alt="Gedore" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/wembley.png" alt="Wembley" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/splash.png" alt="Splash" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/turo.png" alt="Turo" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/nexus.jpg" alt="Nexus" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/decor.jpg" alt="Decor" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/wako.png" alt="Wako" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
          <img src="/brands/mk.jpg" alt="MK" className="h-8 md:h-10 w-auto object-contain flex-shrink-0" />
        </div>
      ))}
    </div>
  </div>
</section>
<Categories />
<FeaturedProducts />
<WhyChooseUs />
<section id="about" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left: Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About KAZMAT Hardware</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          For over 10 years, KAZMAT Hardware has been Zimbabwe’s trusted partner for quality building materials, tools, and home improvement solutions. 
          What started as a single store has grown into 4 branches serving communities across the region.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          We pride ourselves on genuine products, fair prices, and expert advice. From contractors to homeowners, our mission is simple: 
          to help you build better. Visit any of our branches or request a quote online and experience the KAZMAT difference.
        </p>

        {/* Branch Locations with Maps */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4 text-orange-500">Our Branches</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <Link href="https://maps.google.com/?q=Marondera+Zimbabwe" target="_blank" className="flex items-center gap-2 hover:text-orange-500 transition">
                📍 <span className="font-semibold">Marondera</span> - Main Branch
              </Link>
            </li>
            <li>
              <Link href="https://maps.google.com/?q=Murewa+Zimbabwe" target="_blank" className="flex items-center gap-2 hover:text-orange-500 transition">
                📍 <span className="font-semibold">Murewa</span>
              </Link>
            </li>
            <li>
              <Link href="https://maps.google.com/?q=Mutoko+Zimbabwe" target="_blank" className="flex items-center gap-2 hover:text-orange-500 transition">
                📍 <span className="font-semibold">Mutoko</span>
              </Link>
            </li>
            <li>
              <Link href="https://maps.google.com/?q=Macheke+Zimbabwe" target="_blank" className="flex items-center gap-2 hover:text-orange-500 transition">
                📍 <span className="font-semibold">Macheke</span>
              </Link>
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-3">Click a location to get directions on Google Maps</p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="/kaz.jpg" 
          alt="KAZMAT Hardware Store" 
          fill 
          className="object-cover"
        />
      </div>

    </div>
  </div>
</section>
<VisitUs />
<Footer />   
   </main>
  );
}