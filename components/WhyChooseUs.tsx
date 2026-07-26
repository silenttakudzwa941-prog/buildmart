import { Shield, Truck, Wrench, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Full Quality",
    desc: "All products tested and guaranteed. No fake goods."
  },
  {
    icon: Truck,
    title: "Same Day Delivery", 
    desc: "Fast delivery across Marondera and surrounding areas."
  },
  {
    icon: Wrench,
    title: "Expert Advice",
    desc: "Our team helps you pick the right materials for your job."
  },
  {
    icon: Users,
    title: "Wholesale Prices",
    desc: "Best prices for contractors and bulk buyers."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Why Builders Choose Us</h2>
        <p className="text-center text-gray-600 mb-12">Your trusted hardware partner in Marondera</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}