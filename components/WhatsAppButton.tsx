"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "263786507755"; // put your real number here
  const message = "Hello Kazmat Hardware, I need a quote for...";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110 animate-bounce"
    >
      <MessageCircle size={28} />
    </a>
  );
}