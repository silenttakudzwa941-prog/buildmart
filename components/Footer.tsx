import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaMapPin, FaPhone, FaTwitter } from 'react-icons/fa'
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand */}
          <div>
              <Image src="/logo01.png" alt="Kazmat Hardware" width={100} height={50} />
            <p className="text-gray-400 text-sm mb-4">
              Your trusted hardware partner. Quality tools for good work!
            </p>
             <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" className="hover:text-orange-500"><FaFacebook size={24} /></a>
        <a href="https://instagram.com" target="_blank" className="hover:text-orange-500"><FaInstagram size={24} /></a>
        <a href="https://twitter.com" target="_blank" className="hover:text-orange-500"><FaTwitter size={24} /></a>
      </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link href="#categories" className="hover:text-orange-500 transition">Shop</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition">About</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Branches */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Branches</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <p className="font-semibold text-white">Marondera Branch</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 123 Main Street, Marondera</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 77 123 4567</p>
              </div>
              <div>
                <p className="font-semibold text-white">Harare Branch</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 45 Industrial Road, Harare</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 78 987 6543</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> info@kazmat.co.zw</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 24 2 123456</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4"/> Mon - Sat: 8AM - 5PM</li>
            </ul>
            
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition">
              Get Quote on WhatsApp
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
         © 2026 KAZMAT. All rights reserved. | Built by Silent Programs
        </div>
      </div>
    </footer>
  );
}