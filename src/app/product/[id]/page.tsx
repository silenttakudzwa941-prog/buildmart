'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '../../../../components/data/products';
import Navbar from '../../../../components/Navbar'; // add header
import Footer from '../../../../components/Footer'; // add footer

type Props = {
  params:{ id: string }
}
export default function DetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link href="/" className="text-brand underline mt-4 inline-block">← Go Back Home</Link>
        </div>
        <Footer />
      </>
    )
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand mb-6 font-medium"
        >
          ← Back to Shop
        </Link>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Image Column */}
          <div className="w-full">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[450px] object-contain rounded-lg border bg-gray-50"
            />
          </div>

          {/* Details Column */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-4xl font-bold text-brand my-4">${product.price}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
            
            <Link 
              href={`https://wa.me/263786507755?text=Hi KAZMAT, I want to order: ${product.name}`}
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg inline-block transition"
            >
              Order on WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}