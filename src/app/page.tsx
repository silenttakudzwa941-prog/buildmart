import Image from "next/image";
import { Hammer, PaintBucket, Package, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Home() {
  const whatsappNumber = "2637XXXXXXXX"; // replace with Buidmart WhatsApp
  const products = [
    { name: "Power Tools", desc: "Drills, Grinders, Saws", icon: <Hammer /> },
    { name: "Paint & Supplies", desc: "Interior, Exterior, Brushes", icon: <PaintBucket /> },
    { name: "Building Materials", desc: "Cement, Bricks, Roofing", icon: <Package /> },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">KAZ<span className="text-orange-500">MART</span></h1>
          <a href={`https://wa.me/${whatsappNumber}`} className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600">
            WhatsApp Us
          </a>
        </div>
      </nav>
<div className="absolute inset-0">
  <Image 
    src="/hero-hardware.jpg" 
    alt="Buidmart Hardware" 
    fill 
    className="object-cover brightness-50" 
  />
</div>
    {/* Hero Section */}
<section className="relative h-[70vh] flex items-center">
  <Image
    src="/hero-hardware.jpg"
    alt="Buidmart Hardware"
    fill
    priority
    quality={100}
    sizes="100vw"
    className="object-cover"
  />
  
  {/* Dark overlay so text is readable */}
  <div className="absolute inset-0 bg-black/50"></div>
  
  {/* Text */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
      Quality Hardware.
      <br />
      Delivered Fast.
    </h1>
    <p className="text-xl text-gray-200 mb-8 max-w-2xl">
      Your one-stop shop for tools, paint, and building materials in Marondera.
    </p>
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
    >
      Order on WhatsApp
    </a>
  </div>
</section>

      {/* PRODUCTS */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What We Stock</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition mx-4 md:mx-0">
                <div className="text-orange-500 mb-4 w-12 h-12">{p.icon}</div>
                <h4 className="text-xl font-bold mb-2">{p.name}</h4>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <a href={`https://wa.me/${whatsappNumber}?text=Hi, I want to order ${p.name}`} 
                   className="flex items-center gap-2 text-orange-500 font-semibold">
                  <MessageCircle size={18} /> Order on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Visit Us Today</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <div className="flex items-center gap-2 justify-center"><Phone /> +263 77 549 6377</div>
            <div className="flex items-center gap-2 justify-center"><MapPin /> Marondera, Zimbabwe</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        © 2026 Kazmart Hardware. All rights reserved.
      </footer>
    </main>
  );
}