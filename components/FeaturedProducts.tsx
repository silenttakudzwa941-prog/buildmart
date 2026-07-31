"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from './data/products'; // make sure this path is correct
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: boolean;
}

const PRODUCTS_PER_PAGE = 8;

export default function FeaturedProducts() {
  const { addToQuote } = useQuote();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Tools", "Electricals", "Building Materials", "Plumbing", "Hardware", "Paint"];

  // 1. FILTER FIRST
  const filteredProducts = products.filter((product: Product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. PAGINATION MATH
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // HANDLERS - reset to page 1 when filter/search changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="shop" className="container mx-auto px-4 py-16 pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <select 
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Product Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pointer-events-auto pb-24">
         {currentProducts.map((product: Product) => (
  <div 
    key={product.id} 
    className="bg-white border rounded-lg shadow-md flex-col"
  >
    {/* Image */}
    <div className="relative w-full h-48 bg-gray-100 pointer-events-none">
      <Image 
        src={product.image} 
        alt={product.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      {product.stock === false && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Out of Stock
        </span>
      )}
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-1 relative z-10">
      <p className="text-sm text-gray-500">{product.category}</p>
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2 flex-1">{product.description}</p>
      <p className="text-orange-500 font-bold text-xl mb-4">${product.price}</p>

     
        {/* UPDATE YOUR BUTTON TO THIS EXACT CODE */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToQuote(product)
          }}
          disabled={!product.stock}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-bold text-base touch-manipulation select-none relative z-[999] min-h-[48px] cursor-pointer"
        >
          {product.stock? 'Add to Quote' : 'Out of Stock'}
        </button>
    </div>
  </div>
))}
        </div>

        {/* Show message if no products */}
        {currentProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No products found.</p>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
            >
              <ChevronLeft size={18} />
              Prev
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 border rounded-lg font-semibold transition ${
                  currentPage === i + 1 
                    ? 'bg-orange-500 text-white border-orange-500' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}