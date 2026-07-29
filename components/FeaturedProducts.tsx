"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from './data/products'; // make sure this path is correct
import { Search } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: boolean;
}

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["All", "Tools", "Electricals", "Building Materials", "Paint & Supplies"];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`} // <-- THIS FIXES THE "Product not found"
                className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition group"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.jpg"} // put a placeholder.jpg in public/
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase">{product.category}</p>
                  <h3 className="font-semibold text-gray-800 line-clamp-1 mt-1">{product.name}</h3>
                  <p className="text-orange-600 font-bold text-lg mt-2">${product.price}</p>
                  <p className={`text-sm mt-1 font-medium ${product.stock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}