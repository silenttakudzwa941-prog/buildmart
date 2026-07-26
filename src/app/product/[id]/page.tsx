"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "./components/Header";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  badge: string;
  description: string; // add this to your json
};

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/featuredProducts.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p: Product) => p.id === Number(params.id));
        setProduct(found);
      });
  }, [params.id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  const whatsappLink = `https://wa.me/26377XXXXXXX?text=Hi Kazmat, I want to order: ${product.name}`;

  return (
    
    <div className="max-w-6xl mx-auto px-4 py-16">
    <Header/>
      <button onClick={() => router.back()} className="flex items-center gap-2 mb-8 text-brand hover:underline">
        <ArrowLeft size={20} /> Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <Image src={product.image} alt={product.name} width={600} height={600} className="rounded-lg w-full object-cover" />
        
        <div>
          <span className="text-sm bg-orange-100 text-brand px-3 py-1 rounded-full">{product.category}</span>
          <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
          <p className="text-3xl font-bold text-brand my-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description || "No description available."}</p>
          
          <a 
            href={whatsappLink}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition"
          >
            <MessageCircle size={24} /> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}