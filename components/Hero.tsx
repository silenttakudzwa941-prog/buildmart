import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center">
      
      {/* Background Image */}
      <Image 
        src="/hero-hardware.jpg" 
        alt="Kazmat Hardware Store"
        fill
        className="object-cover brightness-[0.6]"
        priority // loads fast
      />

      {/* Overlay Content */}
      <div className="relative z-10 px-4 text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Quality Hardware. Delivered Fast
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Your trusted partner for building materials, tools, and home essentials in Marondera
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#categories"
            className="bg-brand hover:bg-brand text-white px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            Shop Now
          </Link>
          <Link 
            href="https://wa.me/263786507755?text=Hi KAZMAT, I want to inquire about your products."
            target="_blank"
            className="bg-brand hover:bg-brand text-white px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            Get Quote on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}