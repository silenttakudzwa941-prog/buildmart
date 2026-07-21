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
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-800">Kazmat Hardware</h1>
        </Link>

        <div className="flex items-center gap-6">
          <a href="tel:+26377XXXXXXX" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-orange-600">
            <Phone size={20} /> +263 77X XXX
          </a>
          <Link href="#products" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold">
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}