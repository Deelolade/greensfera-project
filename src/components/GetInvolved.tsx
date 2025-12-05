import { HandHeart, Handshake, DollarSign,  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const ways = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    description: 'Join our team of passionate individuals making a difference on the ground.',
    action: 'Become a Volunteer',
  },
  {
    icon: Handshake,
    title: 'Partner',
    description: 'Collaborate with us to scale impact and create sustainable solutions together.',
    action: 'Partner With Us',
  },
  {
    icon: DollarSign,
    title: 'Donate',
    description: 'Support our restoration projects, waste-reduction campaigns, and youth programs.',
    action: 'Make a Donation',
  },
];


export default function GetInvolved() {
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join us in creating a sustainable future. Every action counts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{way.title}</h3>
                <p className="text-white/90 leading-relaxed mb-6">{way.description}</p>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate('/contact-us')
                  }}
                  className="w-full bg-white text-[#009B4C] px-6 py-3 rounded-full font-medium hover:bg-[#F2F0EA] transition-all"
                >
                  {way.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
