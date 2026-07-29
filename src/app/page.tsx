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
export default function Home() {
  const whatsappNumber = "263782637892"; // replace with Buidmart WhatsApp
 const products = [
  {
    name: "Power Tools",
    icon: <Hammer className="w-12 h-12" />,
    desc: "Drills, Grinders, Saws",
    image: "/drill.jpg" // drill pic
  },
  {
    name: "Paint & Supplies", 
    icon: <PaintBucket className="w-12 h-12" />,
    desc: "Interior, Exterior, Brushes",
    image: "/paint.jpg" // paint pic
  },
  {
    name: "Building Materials",
    icon: <Box className="w-12 h-12" />, 
    desc: "Cement, Bricks, Roofing",
    image: "/bricks.jpg" // bricks pic
  }
]
const benefits = [
  { icon: Truck, title: "Fast Delivery", desc: "Delivered to Marondera, Harare & Macheke" },
  { icon: ShieldCheck, title: "Genuine Brands", desc: "Bosch, Makita, Dulux & more" },
  { icon: Users, title: "Expert Advice", desc: "We help you pick the right tool" },
  { icon: Banknote, title: "Wholesale Prices", desc: "Best prices for builders" },
]
  return (
    <main className="min-h-screen bg-white text-gray-900">
     
  <Navbar />
      <Hero />
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