import { ArrowRight, Sparkles, Leaf, Cpu } from 'lucide-react';
import image from '../public/images/two-people-sitting-on-grass.jpg'
import { useNavigate } from 'react-router-dom';


const taglines = [
  'Greening the Planet Through Innovation',
  'Smart Solutions for a Healthier Earth',
  'Sustainability, Powered by Technology',
  'Digital Action for a Greener Future',
  'Every Step Greener, Every Impact Smarter'
];

export default function Hero() {
  const navigate = useNavigate()
  const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];

  return (
    <section className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F2F0EA] via-white to-[#C2F0D5]/30">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#009B4C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A3B2E] rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-[#009B4C]/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-[#0A3B2E]/20 rounded-full animate-pulse delay-75"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#009B4C]/20">
              <Sparkles className="w-4 h-4 text-[#009B4C]" />
              <span className="text-sm font-medium text-[#0A3B2E]">{randomTagline}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A3B2E] leading-tight">
              Greener solutions.{' '}
              <span className="text-[#009B4C]">Smarter technology.</span>{' '}
              A sustainable future for all.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              GreenSfera combines environmental action with digital innovation, green technology,
              and youth-led climate solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  navigate('/contact-us')
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-[#009B4C] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#007A3D] transition-all hover:shadow-xl hover:shadow-[#009B4C]/30 flex items-center space-x-2"
              >
                <span>Join Our Movement</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  navigate('/projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white text-[#0A3B2E] px-8 py-4 rounded-full text-base font-medium border-2 border-[#0A3B2E] hover:bg-[#0A3B2E] hover:text-white transition-all"
              >
                Explore Projects
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-[#009B4C]" />
                <span className="text-sm font-medium text-gray-700">GreenTech Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-[#009B4C]" />
                <span className="text-sm font-medium text-gray-700">Digital Innovation</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] rounded-full opacity-20 blur-2xl animate-pulse"></div>

              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#C2F0D5] via-[#009B4C]/40 to-[#0A3B2E]/60 p-8 backdrop-blur-sm border-4 border-white shadow-2xl">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Leaf className="w-16 h-16 text-[#009B4C]" strokeWidth={1.5} />
                    </div>
                    <p className="text-white font-bold text-xl">Sustainability</p>
                    <p className="text-white font-bold text-xl">Powered by Tech</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold text-[#009B4C]">2022</div>
                  <div className="text-xs text-gray-600">Founded</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold text-[#009B4C]">100%</div>
                  <div className="text-xs text-gray-600">Impact Driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
