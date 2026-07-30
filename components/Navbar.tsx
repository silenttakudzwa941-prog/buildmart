"use client"
import Link from "next/link"
import Image from "next/image"
import { useQuote } from '@/context/QuoteContext';
import { Menu, X, ShoppingCart } from "lucide-react"

export default function Navbar() {
  const { getTotalItems } = useQuote();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/categories" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[9999]">
      <div className="flex justify-between items-center h-20 px-4">

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <Image src="/logo01.png" alt="KAZMAT Hardware" className="h-10 mb-1" width={80} height={40} priority />
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

        {/* Mobile Menu - CSS ONLY */}
        <div className="md:hidden">
          <input id="menu-toggle" type="checkbox" className="peer hidden" />
          <label htmlFor="menu-toggle" className="p-3 cursor-pointer text-gray-700 hover:text-brand min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Menu size={28} className="peer-checked:hidden" />
            <X size={28} className="hidden peer-checked:block" />
          </label>

          {/* Menu slides down with keyframes */}
          <div className="fixed left-0 top-20 w-full bg-white border-t shadow-lg
                          max-h-0 overflow-hidden transition-all duration-300 ease-in-out
                          peer-checked:max-h-[500px] z-[9998]">
            <div className="flex flex-col p-2 animate-slideDown">
              {navLinks.map((link) => (
                <label key={link.name} htmlFor="menu-toggle">
                  <Link href={link.href} className="text-gray-700 hover:text-brand hover:bg-gray-50 font-medium py-4 px-4 text-lg rounded-md min-h-[48px] flex items-center">
                    {link.name}
                  </Link>
                </label>
              ))}
              <label htmlFor="menu-toggle">
                <Link href="https://wa.me/263786507755" className="bg-brand hover:bg-brand font-semibold text-white px-4 py-4 rounded-md mt-2 text-center">
                  Get Quote on WhatsApp
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>

     
    </nav>
  )
}