"use client"
import { useState } from "react";
import Link from "next/link";
import Footer from "../../../components/Footer";

// 1. PUT CONFIG INSIDE SAME FILE FOR NOW
const productsConfig = [
  { id: 'bricks', name: 'Common Bricks', unit: 'bricks', transport: { base: 6, per: 3000, radiusKm: 10 } },
  { id: 'pavers', name: 'Pavers', unit: 'sqm', transport: { base: 8, per: 20, radiusKm: 10 } },
  { id: 'window-sills', name: 'Window Sills', unit: 'pieces', transport: { base: 10, per: 50, radiusKm: 10 } },
  { id: 'air-vents', name: 'Air Vents', unit: 'pieces', transport: { base: 10, per: 50, radiusKm: 10 } },
  { id: 'quarry-stone', name: 'Quarry Stones', unit: 'ton', transport: { base: 25, per: 1, radiusKm: 10 } },
  { id: 'river-sand', name: 'River Sand', unit: 'ton', transport: { base: 25, per: 1, radiusKm: 10 } },
  { id: 'pit-sand', name: 'Pit Sand', unit: 'ton', transport: { base: 20, per: 1, radiusKm: 10 } },
]

export default function ConcreteProductQuotePage() {
  // 2. ALL HOOKS MUST BE INSIDE HERE
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    product: 'bricks',
    quantity: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const selectedProduct = productsConfig.find(p => p.id === formData.product)!
  
  const calculateTransport = () => {
    const qty = Number(formData.quantity) || 0
    const trips = Math.ceil(qty / selectedProduct.transport.per)
    return trips * selectedProduct.transport.base
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const transportCost = calculateTransport()
    
    const message = `*NEW ORDER REQUEST - Kazmat Hardware*

Name: ${formData.name}
Phone: ${formData.phone}
Product: ${selectedProduct.name}
Quantity: ${formData.quantity} ${selectedProduct.unit}
Delivery Address: ${formData.address}

Est. Transport: $${transportCost} for delivery within ${selectedProduct.transport.radiusKm}km

Please get back to me with a quote. Thank you!`

    const url = `https://wa.me/263786507755?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Request Quote</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* PRODUCT DROPDOWN */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Product *</label>
  <select
    name="product"
    value={formData.product}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md p-2"
    required
  >
    {productsConfig.map(p => (
      <option key={p.id} value={p.id}>{p.name}</option>
    ))}
  </select>
</div>

{/* QUANTITY - NOW DYNAMIC */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Quantity in {selectedProduct.unit} *
  </label>
  <input 
    name="quantity" 
    type="number" 
    placeholder={`e.g. 3 ${selectedProduct.unit}`}
    value={formData.quantity} 
    onChange={handleChange} 
    required 
    className="w-full border rounded p-2"
  />
</div>

{/* TRANSPORT ESTIMATE */}
{formData.quantity !== '' && (
  <div className="bg-orange-50 border border-orange-200 p-3 rounded mt-2">
    <p className="text-sm font-medium text-orange-800">
      Est Transport: ${calculateTransport()} for {selectedProduct.transport.radiusKm}km radius
    </p>
  </div>
)}

        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full border rounded p-2"/>
        <input name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required className="w-full border rounded p-2"/>
        <textarea name="address" placeholder="Delivery Address" value={formData.address} onChange={handleChange} required className="w-full border rounded p-2"/>

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded">
          Send via WhatsApp
        </button>
      </form>

      <Link href="/" className="text-brand underline mt-4 block text-center">Back to Home</Link>
    <Footer />
    </div>
  )
}