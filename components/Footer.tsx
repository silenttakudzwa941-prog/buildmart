import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaMapPin, FaPhone, FaTwitter } from 'react-icons/fa'
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
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
              <li><Link href="/" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link href="#categories" className="hover:text-orange-500 transition">Shop</Link></li>
              <li><Link href="#about" className="hover:text-orange-500 transition">About</Link></li>
              <li><Link href="#contact" className="hover:text-orange-500 transition">Contact</Link></li>
               <li><Link href="/email-us" className="hover:text-orange-500 transition">Email Us</Link></li>
    <li><Link href="/privacy-and-cookie-policy" className="hover:text-orange-500 transition">Privacy and Cookie Policy</Link></li> {/* ADD THIS */}
    <li><Link href="/returns-and-refund-policy" className="hover:text-orange-500 transition">Returns and Refund Policy</Link></li> {/* ADD THIS */}
            </ul>
          </div>

          {/* Column 3: Branches */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Branches</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <p className="font-semibold text-white">Marondera(Head Office)</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 47 Elm Street,Bata Complex, Marondera</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 71 212 4211</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 78 650 7755</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> sales:0652324483</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> admin:0652324318</p>
              </div>
              <div>
                <p className="font-semibold text-white">Macheke Branch</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Stand 955, Macheke</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 78 601 7309</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> Tel:0652080533</p>
              </div>
              <div>
                <p className="font-semibold text-white">Murewa Branch</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 262c Mapfumo Complex Next To Murewa Council, Murewa</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 77 844 4778</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> Tel:0652123556</p>
              </div>
              <div>
                <p className="font-semibold text-white">Mtoko Branch</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 992 Mtoko Centre Opposite Pick n Pay, Mtoko</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 71 926 2621</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> Tel:0652132645</p>
              </div>
              <div>
                <p className="font-semibold text-white">Marondera Precast</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 133 Chicago Drive Industrial site, Marondera</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +263 71 383 6126</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Mail mailto="kazmathardware@gmail.com" className="w-4 h-4"/> kazmathardware@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> 065 232 4483</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4"/> Mon - Fri: 8AM - 5PM</li>
               <li className="flex items-center gap-2"><Clock className="w-4 h-4"/> Sat: 8AM - 4PM</li>
            </ul>
            
            <button className="mt-4 w-full bg-orange-500 hover:bg-brand text-white py-2 px-4 rounded-lg font-semibold transition">
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