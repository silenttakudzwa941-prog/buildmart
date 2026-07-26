import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Building Materials",
    image: "/products/building.jpg",
    count: "120+ Products"
  },
  {
    id: 2,
    name: "Power Tools",
    image: "/products/power.jpg", 
    count: "80+ Products"
  },
  {
    id: 3,
    name: "Paint & Supplies",
    image: "/products/paint.jpg",
    count: "60+ Products"
  },
  {
    id: 4,
    name: "Plumbing",
    image: "/products/plumbing.jpg",
    count: "90+ Products"
  },
  {
    id: 5,
    name: "Electrical",
    image: "/products/electricals.jpg",
    count: "70+ Products"
  },
  {
    id: 6,
    name: "Hardware & Fasteners",
    image: "/products/fastener.jpg",
    count: "200+ Products"
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Shop by Category</h2>
        <p className="text-center text-gray-600 mb-10">Find everything you need for your next project</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link 
              href={`#`} 
              key={category.id}
              className="group text-center"
            >
              <div className="relative mb-3 overflow-hidden rounded-lg">
                <Image 
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-32 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm md:text-base group-hover:text-brand transition">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500">{category.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}