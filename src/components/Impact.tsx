import { TrendingUp, Users, Leaf, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const counters = [
  { icon: Leaf, label: 'Trees Monitored', target: 5000, suffix: '+' },
  { icon: TrendingUp, label: 'Digital Campaigns', target: 50, suffix: '+' },
  { icon: Users, label: 'Volunteers Engaged', target: 1200, suffix: '+' },
  { icon: MapPin, label: 'Communities Trained', target: 30, suffix: '+' },
];

export default function Impact() {
  const [counts, setCounts] = useState(counters.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          counters.forEach((counter, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = counter.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= counter.target) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = counter.target;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="impact-section" className="py-20 bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Measurable results driving real change for our planet and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => {
            const Icon = counter.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {counts[index].toLocaleString()}{counter.suffix}
                </div>
                <div className="text-white/90 font-medium">{counter.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
