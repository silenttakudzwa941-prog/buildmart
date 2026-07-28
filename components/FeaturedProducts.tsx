"use client";
import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import {products} from "./data/products"; // FIXED: use ./ not ../

type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  stock: boolean;
};



export default function FeaturedProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tools", "Electricals", "Building Materials", "Agriculture", "General Hardware"];

  const filteredProducts = products.filter((product) => { // use products not productsData
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

        {/* Search Bar with Icon */}
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto mb-8 justify-center pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
             <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition group">
  <div className="relative w-full h-40 mb-3 overflow-hidden rounded bg-gray-100">
    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-cover group-hover:scale-105 transition-transform"
      unoptimized // add this temporarily if images still dont load
    />
  </div>
  <h3 className="font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
  <p className="text-sm text-gray-500 line-clamp-2 h-10">{product.description}</p>
  <p className="font-bold text-lg mt-2 text-blue-600">${product.price.toFixed(2)}</p>
</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}