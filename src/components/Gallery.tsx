import { Camera, Heart, Users, Sprout } from 'lucide-react';

const highlights = [
  {
    icon: Sprout,
    title: 'Tree Planting Drive',
    description: '500+ trees planted in local communities',
    color: 'from-[#009B4C] to-[#007A3D]',
  },
  {
    icon: Users,
    title: 'Youth Summit 2024',
    description: '200+ young innovators collaborated',
    color: 'from-[#0A3B2E] to-[#009B4C]',
  },
  {
    icon: Camera,
    title: 'Clean-Up Campaign',
    description: '2 tons of waste collected and recycled',
    color: 'from-[#009B4C] to-[#0A3B2E]',
  },
  {
    icon: Heart,
    title: 'Community Workshop',
    description: 'Training 100+ on sustainable practices',
    color: 'from-[#007A3D] to-[#0A3B2E]',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F2F0EA] via-white to-[#C2F0D5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3B2E] mb-4">Our Impact in Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Witness the positive change we're creating together in communities worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${highlight.color} rounded-2xl p-8 text-white overflow-hidden group cursor-pointer hover:scale-105 transition-transform`}
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <Icon className="w-12 h-12 mb-4 opacity-90" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-white/90 text-sm">{highlight.description}</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
