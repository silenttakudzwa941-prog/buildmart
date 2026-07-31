"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  const [galleryTab, setGalleryTab] = useState("shops");

  const galleryImages = {
    shops: [
      { src: "/gallery/shops/shop1.jpg", alt: "Kazmat Marondera Head Office" },
      { src: "/gallery/shops/shop2.jpg", alt: "Kazmat Macheke Branch" },
      { src: "/gallery/shops/shop3.jpg", alt: "Kazmat Murewa Branch" },
      { src: "/gallery/shops/shop4.jpg", alt: "Kazmat Mutoko Branch" },
      { src: "/gallery/shops/shop5.jpg", alt: "Building Materials Display" },
      { src: "/gallery/shops/shop6.jpg", alt: "Hardware Section" },
    ],
    projects: [
      { src: "/gallery/projects/project1.jpg", alt: "Residential House - Marondera" },
      { src: "/gallery/projects/project2.jpg", alt: "Commercial Building - Murewa" },
      { src: "/gallery/projects/project3.jpg", alt: "Roofing Project - Mutoko" },
      { src: "/gallery/projects/project4.jpg", alt: "Shop Fitting - Macheke" },
      { src: "/gallery/projects/project5.jpg", alt: "Borehole & Plumbing" },
      { src: "/gallery/projects/project6.jpg", alt: "Full House Construction" },
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-2xl font-bold text-orange-500">KAZMAT GALLERY</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">Our Gallery</h2>
        <p className="text-center text-gray-600 mb-10">See our shops and completed projects</p>

        {/* TAB BUTTONS */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setGalleryTab("shops")}
            onTouchStart={() => setGalleryTab("shops")}
            type="button"
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              galleryTab === "shops" 
       ? 'bg-orange-500 text-white shadow-lg' 
              : 'bg-white text-gray-700 border-2 border-gray-300'
            }`}
          >
            Our Shops
          </button>
          <button
            onClick={() => setGalleryTab("projects")}
            onTouchStart={() => setGalleryTab("projects")}
            type="button"
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              galleryTab === "projects" 
       ? 'bg-orange-500 text-white shadow-lg' 
              : 'bg-white text-gray-700 border-2 border-gray-300'
            }`}
          >
            Completed Projects
          </button>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages[galleryTab].map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}