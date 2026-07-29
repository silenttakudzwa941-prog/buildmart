"use client"
import { useState } from "react"
import Link from "next/link"
import { Gift } from "lucide-react" // for promo icon
import Footer from "../../../components/Footer"

export default function OrderBricksPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const quantityNum = Number(formData.quantity) || 0
  const qualifiesForPromo = quantityNum > 30000
  const totalBricks = qualifiesForPromo ? quantityNum + 500 : quantityNum

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const promoText = qualifiesForPromo ? `\n*PROMO APPLIED:* Free 500 bricks!` : ''
    
    const message = `Hello KAZMAT Hardware! I would like to order bricks.
    
*Full Name:* ${formData.name}
*Phone:* ${formData.phone}
*Delivery Address:* ${formData.address}
*Quantity Ordered:* ${formData.quantity} bricks
*Total After Promo:* ${totalBricks} bricks${promoText}

Please get back to me with a quote. Thank you!`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "263786507755" // your number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">Order Bricks</h1>
      <p className="text-gray-600 text-center mb-6">Fill in your details and we’ll send your order to WhatsApp</p>
      
      {/* SPECIAL PROMO BANNER */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 rounded-md flex items-start gap-3">
        <Gift size={24} className="text-orange-500 mt-1 flex-shrink-0" />
        <div>
          <p className="font-bold text-orange-800">Special Promotion!</p>
          <p className="text-orange-700 text-sm">Order more than <span className="font-bold">30,000 bricks</span> and get <span className="font-bold">500 bricks FREE!</span></p>
        </div>
      </div>
      
      <form onSubmit={handleWhatsAppSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-brand focus:border-brand"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:ring-brand focus:border-brand"
            placeholder="+263 7X XXXX"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
          <textarea 
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={3}
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:ring-brand focus:border-brand"
            placeholder="Stand 123, Marondera"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity of Bricks</label>
          <input 
            type="number" 
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="100"
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:ring-brand focus:border-brand"
            placeholder="e.g. 30000"
          />
          {qualifiesForPromo && (
            <p className="text-green-600 text-sm font-semibold mt-2">
              🎉 You qualify for 500 FREE bricks! Total: {totalBricks.toLocaleString()} bricks
            </p>
          )}
        </div>

        <button 
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition"
        >
          Send Order via WhatsApp
        </button>
      </form>

      <div className="text-center mt-6">
        <Link href="/" className="text-brand hover:underline font-medium">
          ← Back to Home
        </Link>
    
      </div>
    <Footer/>
    </div>
    
  )
}