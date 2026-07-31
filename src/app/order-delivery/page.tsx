"use client"
import { useState } from "react";
import Link from "next/link";
import Footer from "../../../components/Footer";

const productsConfig = [
  { id: 'bricks', name: 'Common Bricks', unit: 'bricks', price: 0.12, transport: { base: 6, per: 3000, radiusKm: 10 } },
  { id: 'pavers', name: 'Pavers', unit: 'sqm', price: 18, transport: { base: 8, per: 20, radiusKm: 10 } },
  { id: 'window-sills', name: 'Window Sills', unit: 'pieces', price: 12, transport: { base: 10, per: 50, radiusKm: 10 } },
  { id: 'air-vents', name: 'Air Vents', unit: 'pieces', price: 8, transport: { base: 10, per: 50, radiusKm: 10 } },
  { id: 'quarry-stone', name: 'Quarry Stones', unit: 'ton', price: 25, transport: { base: 25, per: 1, radiusKm: 10 } },
  { id: 'river-sand', name: 'River Sand', unit: 'ton', price: 22, transport: { base: 25, per: 1, radiusKm: 10 } },
  { id: 'pit-sand', name: 'Pit Sand', unit: 'ton', price: 18, transport: { base: 20, per: 1, radiusKm: 10 } },
]

type CartItem = { productId: string, quantity: number }

export default function OrderDeliveryPage() {
  const [cart, setCart] = useState<CartItem[]>([{ productId: 'bricks', quantity: 0 }])
  const [itemNotes, setItemNotes] = useState('') // NEW: For item descriptions
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', deliveryDate: '', notes: '', payment: 'cod'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const addItem = () => setCart([...cart, { productId: 'bricks', quantity: 0 }])
  const removeItem = (index: number) => setCart(cart.filter((_, i) => i!== index))
  const updateItem = (index: number, field: keyof CartItem, value: any) => {
    const newCart = [...cart]
    newCart[index] = {...newCart[index], [field]: value}
    setCart(newCart)
  }

  const cartDetails = cart.map(item => {
    const product = productsConfig.find(p => p.id === item.productId)!
    const qty = Number(item.quantity) || 0
    const subtotal = qty * product.price
    const trips = Math.ceil(qty / product.transport.per)
    const transport = qty > 0? trips * product.transport.base : 0
    return {...item, product, qty, subtotal, transport }
  }).filter(i => i.qty > 0)

  const productsSubtotal = cartDetails.reduce((sum, i) => sum + i.subtotal, 0)
  const maxTransport = Math.max(...cartDetails.map(i => i.transport), 0)
  const transportCost = productsSubtotal >= 250? 0 : maxTransport
  const total = productsSubtotal + transportCost
  const bricksQty = cartDetails.find(i => i.product.id === 'bricks')?.qty || 0
  const promoApplies = bricksQty >= 30000

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itemsText = cartDetails.map(i =>
      `- ${i.product.name}: ${i.qty} ${i.product.unit} = $${i.subtotal.toFixed(2)}`
    ).join('\n')

    const promoText = promoApplies? "\n🎁 PROMO: +500 FREE Bricks Applied" : ""
    const deliveryText = transportCost === 0? "FREE" : `$${transportCost}`
    const itemNotesText = itemNotes? `\n*ITEM DETAILS:* ${itemNotes}` : "" // NEW

    const message = `*NEW ORDER - Kazmat Hardware*

*CUSTOMER*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*DELIVERY*
Address: ${formData.address}
Date: ${formData.deliveryDate || 'ASAP'}
Notes: ${formData.notes || 'None'}

*ORDER ITEMS*
${itemsText}${promoText}${itemNotesText} // NEW

Subtotal: $${productsSubtotal.toFixed(2)}
Delivery: ${deliveryText}
*TOTAL: $${total.toFixed(2)}*

Payment: ${formData.payment === 'cod'? 'Cash on Delivery' : formData.payment === 'ecocash'? 'Ecocash' : 'Bank Transfer'}`

    window.open(`https://wa.me/263786507755?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-2">Place Order + Delivery</h1>
      <p className="text-gray-600 mb-6">Add anything from the shop to your order</p>

      {promoApplies && (
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-4 mb-6">
          <p className="font-bold">🎁 BULK PROMO APPLIED: +500 FREE Bricks</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* CART ITEMS */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-bold text-lg">Order Items</h3>
          {cart.map((item, index) => (
            <div key={index} className="border p-3 rounded-lg space-y-2">
              <div className="flex gap-2">
                <select
                  value={item.productId}
                  onChange={(e) => updateItem(index, 'productId', e.target.value)}
                  className="flex-1 border rounded p-2"
                >
                  {productsConfig.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
                {cart.length > 1 && (
                  <button type="button" onClick={() => removeItem(index)} className="bg-red-500 text-white px-3 rounded">X</button>
                )}
              </div>
              <input
                type="number"
                placeholder={`Quantity in ${productsConfig.find(p=>p.id===item.productId)!.unit}`}
                value={item.quantity}
                onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
          ))}
          <button type="button" onClick={addItem} className="w-full border-2 border-dashed border-gray-300 rounded p-2 text-gray-600 hover:bg-gray-50">
            + Add Another Product
          </button>

          {/* NEW: ITEM DESCRIPTION FIELD */}
          <div>
            <label className="block text-sm font-medium mb-1">Item Details / Description</label>
            <textarea
              value={itemNotes}
              onChange={(e) => setItemNotes(e.target.value)}
              placeholder="e.g. -10 IBR Sheets, 25 Conduits, 2 Bags of Cement, etc."
              className="w-full border rounded p-2 text-sm"
              rows={3}
            />
          </div>
        </div>

        {/* ORDER SUMMARY */}
        {productsSubtotal > 0 && (
          <div className="bg-gray-50 p-4 rounded border">
            <h3 className="font-bold mb-2">Order Summary</h3>
            <div className="flex justify-between text-sm"><span>Products:</span> <span>${productsSubtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm"><span>Delivery:</span> <span className={transportCost === 0? 'text-green-600 font-bold' : ''}>{transportCost === 0? 'FREE' : `$${transportCost}`}</span></div>
            <div className="border-t mt-2 pt-2 flex justify-between font-bold"><span>TOTAL:</span> <span>${total.toFixed(2)}</span></div>
            {productsSubtotal < 250 && <p className="text-xs text-gray-500 mt-1">Add ${(250 - productsSubtotal).toFixed(2)} more for FREE delivery</p>}
          </div>
        )}

        {/* CUSTOMER + DELIVERY */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h3 className="font-bold text-lg">Customer & Delivery Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required className="border rounded p-2"/>
            <input name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required className="border rounded p-2"/>
          </div>
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2"/>
          <textarea name="address" placeholder="Delivery Address *" value={formData.address} onChange={handleChange} required className="w-full border rounded p-2"/>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="deliveryDate" type="date" value={formData.deliveryDate} onChange={handleChange} className="border rounded p-2"/>
            <select name="payment" value={formData.payment} onChange={handleChange} className="border rounded p-2">
              <option value="cod">Cash on Delivery</option>
              <option value="ecocash">Ecocash</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          <textarea name="notes" placeholder="Notes for Driver" value={formData.notes} onChange={handleChange} className="w-full border rounded p-2"/>
        </div>

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-lg">
          Place Order on WhatsApp
        </button>
      </form>

      <Link href="/" className="text-brand underline mt-4 block text-center">← Back to Home</Link>
    <Footer />
    </div>
  )
}