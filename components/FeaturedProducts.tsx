"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  badge: string;
};

 
export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/featuredProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Products</h2>
        <p className="text-center text-gray-600 mb-10">Our top picks for builders this month</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">${product.price}</p>
                
                <Link 
                  href={`https://wa.me/2637XXXXXXX?text=Quote for ${product.name}`}
                  target="_blank"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg block text-center font-medium"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}