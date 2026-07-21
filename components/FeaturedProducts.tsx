"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  badge: string;
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load products from public folder
  useEffect(() => {
    fetch("/featuredProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products
 const filteredProducts = products.filter((product) => {
  const matchesSearch =
    (product.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (product.category?.toLowerCase() || "").includes(searchTerm.toLowerCase());
  
  const matchesCategory = 
    selectedCategory === "All" || product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

        {/* SEARCH BAR */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search tools, cement, paint..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {searchTerm && (
  <button 
    onClick={() => setSearchTerm("")}
    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
  >
    ✕
  </button>
)}
        </div>
        {/* CATEGORY FILTER */}
<div className="flex flex-wrap justify-center gap-3 mb-8">
  {["All", "Tools", "Building Materials", "Paint", "Plumbing"].map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`px-5 py-2 rounded-full font-semibold transition ${
        selectedCategory === category
          ? "bg-orange-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {category}
    </button>
  ))}
</div>

       {/* PRODUCTS GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <Link href={`/product/${product.id}`} key={product.id}>
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition cursor-pointer">
          <Image 
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="rounded-md mb-3 w-full h-40 object-cover"
          />
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-orange-600 font-bold mt-2">{product.price}</p>
        </div>
      </Link>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-500">No products found</p>
  )}
</div>
      </div>
    </section>
  );
}