"use client";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const productsConfig = [
  { id: 'bricks', name: 'Common Bricks', unit: 'bricks', transport: { base: 6, per: 3000, radiusKm: 10 } },
  { id: 'pavers', name: 'Pavers', unit: 'sqm', transport: { base: 8, per: 20, radiusKm: 10 } },
  { id: 'window-sills', name: 'Window Sills', unit: 'pieces', transport: { base: 10, per: 50, radiusKm: 10 } },
  { id: 'air-vents', name: 'Air Vents', unit: 'pieces', transport: { base: 10, per: 50, radiusKm: 10 } },
  { id: 'quarry-stone', name: 'Quarry Stones', unit: 'ton', transport: { base: 25, per: 1, radiusKm: 10 } },
  { id: 'river-sand', name: 'River Sand', unit: 'ton', transport: { base: 25, per: 1, radiusKm: 10 } },
  { id: 'pit-sand', name: 'Pit Sand', unit: 'ton', transport: { base: 20, per: 1, radiusKm: 10 } },
]

export default function WhatsAppButton() {
  const phoneNumber = "263786507755";
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    product: 'bricks',
    quantity: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
      >
        <MessageCircle size={28} />
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3">
              <X size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4">Request a Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full border rounded p-2"/>
              <input name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required className="w-full border rounded p-2"/>
              
              <select name="product" value={formData.product} onChange={handleChange} className="w-full border rounded p-2">
                {productsConfig.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>

              <input 
                name="quantity" 
                type="number" 
                placeholder={`Quantity in ${selectedProduct.unit}`} 
                value={formData.quantity} 
                onChange={handleChange} 
                required 
                className="w-full border rounded p-2"
              />
              
              <input name="address" placeholder="Delivery Address" value={formData.address} onChange={handleChange} required className="w-full border rounded p-2"/>

              {formData.quantity && (
                <p className="text-sm text-gray-600">
                  Est Transport: ${calculateTransport()} for {selectedProduct.transport.radiusKm}km radius
                </p>
              )}

              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}