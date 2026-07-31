import Link from 'next/link';
import Image from 'next/image';
import { products } from '../../../../components/data/products';
import  Footer  from '../../../../components/Footer';
import  Navbar from '../../../../components/Navbar';

// Next 15: params is now a Promise
type Props = {
  params: Promise<{ id: string }>
}

export default async function DetailPage({ params }: Props) {
  const { id } = await params; // <-- AWAIT IT

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main>
        <Navbar />
        <div className="container mx-auto p-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="text-gray-500 mt-2">ID: {id}</p> {/* Now this will show p002 */}
          <Link href="/" className="text-orange-500 underline mt-4 inline-block">
            ← Back to Shop
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image 
              src={product.image || "/placeholder.jpg"} 
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-contain rounded-lg border"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase">{product.category}</p>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
            <p className="text-4xl font-bold text-orange-600 mt-3">${product.price}</p>
            <p className={`mt-2 font-semibold ${product.stock ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className="text-gray-600 mt-4">{product.description}</p>

            <Link 
              href={`https://wa.me/263786507755?text=Hi%20KAZMAT,%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20${product.id}`}
              target="_blank"
              className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg"
            >
              Order via WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}