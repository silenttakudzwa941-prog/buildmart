"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
import  Navbar  from '../../../components/Navbar';
import  Footer  from '../../../components/Footer';
import { Trash2, MessageCircle, X } from 'lucide-react';

export default function QuotePage() {
  const { quoteItems, removeFromQuote, clearQuote } = useQuote();

  const generateWhatsAppMessage = () => {
    let message = `*KAZMAT HARDWARE - QUOTE REQUEST*\n\nHi, I would like a quote for the following items:\n\n`;
    
    quoteItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.id})\n`;
      message += `   Qty: ${item.quantity}\n`;
      message += `   Price: $${item.price} each\n\n`;
    });

    const total = quoteItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `*Estimated Total: $${total.toFixed(2)}*\n\n`;
    message += `Please send me the final quote including delivery to Marondera.\nThank you!`;

    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/263786507755?text=${generateWhatsAppMessage()}`;

  if (quoteItems.length === 0) {
    return (
      <main>
        <Navbar />
        <div className="container mx-auto p-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Your Quote is Empty</h1>
          <p className="text-gray-500 mb-6">Add products to get a quote</p>
          <Link href="/" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Quote</h1>
        
        <div className="space-y-4 mb-8">
          {quoteItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg bg-white">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image src={item.image || "/placeholder.jpg"} alt={item.name} fill className="object-contain" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="text-orange-600 font-bold">${item.price} each</p>
              </div>
              <button onClick={() => removeFromQuote(item.id)} className="text-red-500 hover:text-red-700">
                <X size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 flex-col md:flex-row gap-4 justify-end">
          <button 
            onClick={clearQuote}
            className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg"
          >
            <Trash2 size={18} /> Clear Quote
          </button>
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg"
          >
            <MessageCircle size={20} /> Send Quote via WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}