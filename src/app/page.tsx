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
<VisitUs />
<Footer />   
   </main>
  );
}