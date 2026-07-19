      {/* PRODUCTS */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What We Stock</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  {products.map((p) => (
    <div key={p.name} className="bg-white rounded-xl shadow-md hover:shadow-lg transition mx-4 md:mx-0 overflow-hidden">
      
      {/* Image at top */}
      <div className="relative h-40 w-full">
        <Image src={p.image} alt={p.name} fill className="object-cover" />
      </div>
      
      <div className="p-6">
        <div className="text-orange-500 mb-2">{p.icon}</div>
        <h4 className="text-xl font-bold mb-2">{p.name}</h4>
        <p className="text-gray-600 mb-4">{p.desc}</p>
        
        {/* Two buttons */}
        <div className="flex gap-3">
          <a href={`https://wa.me/${whatsappNumber}?text=Hi, I want ${p.name}`}
             className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
            <MessageCircle size={18} /> Order
          </a>
          <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg font-semibold">
            View More
          </button>
        </div>
      </div>

    </div> // <-- this closes the card
  ))}
</div> 
</div>
</section>s