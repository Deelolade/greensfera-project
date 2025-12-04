import { Target, Eye, Lightbulb, ArrowRight } from 'lucide-react';

interface AboutProps {
  setCurrentSection: (section: string) => void;
  full?: boolean;
}

export default function About({ setCurrentSection, full = false }: AboutProps) {
  if (full) {
    return (
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-[#F2F0EA] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0A3B2E] mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-[#009B4C] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#0A3B2E]">Our Story</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                GreenSfera is an environmental sustainability organization founded in 2022. We focus on
                restoring ecosystems, promoting green living, and empowering young innovators with technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Sfera" symbolizes Earth, representing knowledge, innovation, and environmental action.
                We believe sustainability is simple when paired with the right tools.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C2F0D5] p-3 rounded-xl">
                    <Eye className="w-6 h-6 text-[#009B4C]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3B2E] mb-2">Vision</h4>
                    <p className="text-gray-700">A cleaner, greener, tech-empowered world.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C2F0D5] p-3 rounded-xl">
                    <Target className="w-6 h-6 text-[#009B4C]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3B2E] mb-2">Mission</h4>
                    <p className="text-gray-700">
                      Drive climate restoration and sustainability by combining grassroots action with
                      digital tools, innovation hubs, and green-technology thinking.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C2F0D5] p-3 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-[#009B4C]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A3B2E] mb-2">Our Identity</h4>
                    <p className="text-gray-700">
                      "Sfera" symbolizes Earth, representing knowledge, innovation, and environmental action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Founder's Message</h3>
            <p className="text-lg leading-relaxed mb-4">
              "GreenSfera was created to show that sustainability is simple when paired with the right tools.
              We help communities and young people adopt climate-smart habits using innovation, digital tools,
              and practical solutions."
            </p>
            <p className="text-lg leading-relaxed mb-4">
              "Since 2022, GreenSfera has empowered individuals to build a greener, smarter world."
            </p>
            <p className="text-xl font-semibold mt-8">— Ezugorie Obele, Founder</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A3B2E]">About GreenSfera</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              An environmental sustainability organization combining technology, digital engagement,
              and community participation to drive practical climate solutions for a greener future.
            </p>
            <button
              onClick={() => {
                setCurrentSection('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center space-x-2 text-[#009B4C] font-semibold hover:text-[#007A3D] transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-[#C2F0D5] to-white p-8 rounded-2xl border border-[#009B4C]/20">
              <Eye className="w-10 h-10 text-[#009B4C] mb-4" />
              <h3 className="text-xl font-bold text-[#0A3B2E] mb-2">Vision</h3>
              <p className="text-gray-700">A cleaner, greener, tech-empowered world.</p>
            </div>
            <div className="bg-gradient-to-br from-[#009B4C]/10 to-white p-8 rounded-2xl border border-[#009B4C]/20">
              <Target className="w-10 h-10 text-[#009B4C] mb-4" />
              <h3 className="text-xl font-bold text-[#0A3B2E] mb-2">Mission</h3>
              <p className="text-gray-700">
                Drive climate restoration through grassroots action and digital innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
