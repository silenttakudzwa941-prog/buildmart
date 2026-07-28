import Link from "next/link";
import { ShoppingCart, Phone } from "lucide-react";
import Image from "next/image"; // add this

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo01.png"  // <- THIS IS THE PATH. / means public folder
            alt="Kazmat Hardware Logo"
            width={90}
            height={50}
            className="object-contain"
          />
          <p className="text-2xl semibold text-brand">Good tools for good work!</p>
        </Link>

        <div className="flex items-center gap-6">
          <a href="tel:+263786507755" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-brand">
            <Phone size={20} /> +263 786 50 7755
          </a>
          <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-brand">
            <ShoppingCart size={20} />
          </Link>
          <Link href="#products" className="bg-brand hover:bg-brand text-white px-5 py-2 rounded-lg font-semibold">
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}