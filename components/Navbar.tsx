"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useQuote } from '@/context/QuoteContext';
import {Menu, X, ShoppingCart} from "lucide-react" // <-- THIS IS THE CORRECT IMPORT
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
 const { getTotalItems } = useQuote(); // <-- THIS LINE
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/categories" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center h-20 px-4">
      {/* Logo */}
<Link href="/" className="flex flex-col items-center">
  <Image src="/logo01.png" alt="KAZMAT Hardware" className="h-10 mb-1" width={80} height={40} />
  <span className="font-bold text-brand text-sm text-center">Good tools for good work!!</span>
</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-700 hover:text-brand font-medium">
              {link.name}
            </Link>
          ))}
          <Link href="https://wa.me/263786507755" className="bg-brand hover:bg-brand font-semibold text-white px-4 py-2 rounded-md">
            Get Quote
          </Link>
          <Link href="/quote" className="relative">
  <ShoppingCart size={24} />
  {getTotalItems() > 0 && (
    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
      {getTotalItems()}
    </span>
  )}
</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}  // <-- THIS MAKES IT CLICKABLE
          className="md:hidden p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (  // <-- ONLY SHOWS WHEN CLICKED
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} // close menu when you click a link
                className="text-gray-700 hover:text-brand font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}