import Image from "next/image";
import { FaFacebook, FaInstagram, FaMapPin, FaPhone, FaTwitter } from 'react-icons/fa'
import { Drill, Hammer, PaintBucket, Box, Truck, ShieldCheck, Users, Banknote, MessageCircle, MapPin } from 'lucide-react'
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
export default function Home() {
  const whatsappNumber = "2637XXXXXXXX"; // replace with Buidmart WhatsApp
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
{/* SHOP BY CATEGORY */}
{/* SHOP BY CATEGORY */}
<section className="py-16 px-4 bg-gray-50 pt-20 relative">
  <h2 className="text-center text-4xl font-bold mb-10 text-gray-800" id="categories">Shop by Category</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    
    {/* CATEGORY 1 */}
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-64">
      <Image
        src="/power-tools.jpg"
        alt="Power Tools"
        fill
        className="object-cover group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Power Tools</h3>
      </div>
    </div>

    {/* CATEGORY 2 */}
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-64">
      <Image
        src="/paint1.jpg"
        alt="Paint & Decor"
        fill
        className="object-cover group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Paint & Decor</h3>
      </div>
    </div>

    {/* CATEGORY 3 */}
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-64">
      <Image
        src="/building-materials.jpg"
        alt="Building Materials"
        fill
        className="object-cover group-hover:scale-110 transition duration-300"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">Building Materials</h3>
      </div>
    </div>

  </div>
</section>
      {/* PRODUCTS */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What We Stock</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  {products.map((p) => (
    <div key={p.name} className="bg-white rounded-xl shadow-md hover:shadow-lg transition mx-4 md:mx-0 overflow-hidden">
      
      {/* Image at top */}
      <div className="relative h-40 w-full">
        <Image src={p.image} alt={p.name} fill className="object-cover" />
      </div>
      
      <div className="p-6">
        <div className="text-orange-500 mb-2">{p.icon}</div>
        <h4 className="text-xl font-bold mb-2">{p.name}</h4>
        <p className="text-gray-600 mb-4">{p.desc}</p>
        
        {/* Two buttons */}
        <div className="flex gap-3">
          <a href={`https://wa.me/${whatsappNumber}?text=Hi, I want ${p.name}`}
             className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
            <MessageCircle size={18} /> Order
          </a>
          <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg font-semibold">
            View More
          </button>
        </div>
      </div>

    </div> // <-- this closes the card
  ))}
</div> 
</div>
</section>
{/* feautured products */}
<section className="py-16 px-4 bg-gray-50">
  <h2 className="text-center text-3xl font-bold mb-10">Featured Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    
    {/* PRODUCT 1 */}
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src="/products/drill.jpg" alt="Bosch Drill" className="w-full h-48 object-cover"/>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">Bosch Drill 650W</h3>
        <p className="text-gray-600 text-sm">Perfect for concrete & wood</p>
        <p className="text-orange-500 font-bold text-2xl mt-2">$45.00</p>
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg w-full hover:bg-orange-600">Add to Quote</button>
      </div>
    </div>

    {/* PRODUCT 2 */}
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src="/products/paint.jpg" alt="Dulux Paint" className="w-full h-48 object-cover"/>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">Dulux Paint 5L</h3>
        <p className="text-gray-600 text-sm">White Interior/Exterior</p>
        <p className="text-orange-500 font-bold text-2xl mt-2">$38.00</p>
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg w-full hover:bg-orange-600">Add to Quote</button>
      </div>
    </div>

    {/* PRODUCT 3 */}
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src="/products/cement.jpg" alt="Cement" className="w-full h-48 object-cover"/>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">Cement 50kg</h3>
        <p className="text-gray-600 text-sm">PPC / Lafarge</p>
        <p className="text-orange-500 font-bold text-2xl mt-2">$12.50</p>
        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg w-full hover:bg-orange-600">Add to Quote</button>
      </div>
    </div>

  </div>
</section>
{/* WHY CHOOSE US */}
<section className="py-16 bg-gray-50">
  <h2 className="text-center text-3xl font-bold mb-10">Why Builders Choose Us</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
    {benefits.map((b) => (
      <div key={b.title} className="text-center p-6 bg-white rounded-xl shadow">
        <b.icon className="mx-auto text-orange-500 mb-3" size={40}/>
        <h3 className="font-bold mb-2">{b.title}</h3>
        <p className="text-sm text-gray-600">{b.desc}</p>
      </div>
    ))}
  </div>
</section>
        
      

      {/* CONTACT */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Visit Us Today</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <div className="flex items-center gap-2 justify-center"><FaPhone /> +263 77 549 6377</div>
            <div className="flex items-center gap-2 justify-center"><FaMapPin /> Marondera, Zimbabwe</div>
          </div>
        </div>
      </section>
{/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Column 1: About + Socials */}
    <div>
      <h3 className="text-orange-500 text-2xl font-bold mb-4">KAZMAT</h3>
      <p className="mb-4 text-sm">Your trusted partner for Web Design, Branding & Quality Hardware.</p>
      <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" className="hover:text-orange-500"><FaFacebook size={24} /></a>
        <a href="https://instagram.com" target="_blank" className="hover:text-orange-500"><FaInstagram size={24} /></a>
        <a href="https://twitter.com" target="_blank" className="hover:text-orange-500"><FaTwitter size={24} /></a>
      </div>
    </div>

    {/* Column 2: Harare Branch */}
    <div>
      <h4 className="text-white text-lg font-semibold mb-4">Harare Branch</h4>
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <FaMapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
          <p>123 Robert Mugabe Rd, Harare CBD, Zimbabwe</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone size={18} className="text-orange-500 flex-shrink-0" />
          <p>+263 77 123 4567</p>
        </div>
      </div>
    </div>

    {/* Column 3: Macheke Branch */}
    <div>
      <h4 className="text-white text-lg font-semibold mb-4">Macheke Branch</h4>
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <FaMapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
          <p>45 Mutare Rd, Macheke Town Center, Zimbabwe</p>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone size={18} className="text-orange-500 flex-shrink-0" />
          <p>+263 78 987 6543</p>
        </div>
      </div>
    </div>

  </div>

  {/* Copyright */}
  <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
    © 2026 KAZMAT. All rights reserved. | Built by Silent Programs
  </div>
</footer>
    </main>
  );
}