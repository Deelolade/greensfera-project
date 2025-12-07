import { Lightbulb, Rocket, Users, Award, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: Lightbulb,
    title: 'Eco-Tech Bootcamps',
    description: 'Intensive training programs combining environmental science with cutting-edge technology.',
  },
  {
    icon: Rocket,
    title: 'Green Entrepreneurship Training',
    description: 'Build sustainable businesses that solve climate challenges and create economic opportunities.',
  },
  {
    icon: Users,
    title: 'Campus Eco-Leaders Network',
    description: 'Connect with fellow student leaders driving sustainability initiatives on campuses.',
  },
  {
    icon: Award,
    title: 'Community Eco-Challenges',
    description: 'Compete in innovative challenges to develop and implement local climate solutions.',
  },
];

export default function YouthHubSection() {
  // if (true) {
  //   return (
  //     <section className="pt-32 pb-20 bg-gradient-to-br from-white via-[#C2F0D5]/30 to-white">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="text-center mb-16">
  //           <h2 className="text-5xl font-bold text-[#0A3B2E] mb-6">Youth Hub</h2>
  //           <div className="w-24 h-1 bg-[#009B4C] mx-auto rounded-full mb-6"></div>
  //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //             A creativity space for young people to build tech-powered environmental solutions.
  //           </p>
  //         </div>

  //               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  //         {programs.map((program, index) => {
  //           const Icon = program.icon;
  //           return (
  //             <div
  //               key={index}
  //               className="bg-gradient-to-br from-[#F2F0EA] to-white rounded-2xl p-6 border border-[#009B4C]/20 hover:border-[#009B4C] transition-all group"
  //             >
  //               <Icon className="w-10 h-10 text-[#009B4C] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
  //               <h3 className="text-lg font-bold text-[#0A3B2E] mb-2">{program.title}</h3>
  //               <p className="text-gray-600 text-sm">{program.description}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3B2E] mb-4">GreenTech Ideas Hub</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering youth to innovate for sustainability through technology and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F2F0EA] to-white rounded-2xl p-6 border border-[#009B4C]/20 hover:border-[#009B4C] transition-all group"
              >
                <Icon className="w-10 h-10 text-[#009B4C] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#0A3B2E] mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              // setCurrentSection('youth-hub');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center space-x-2 text-[#009B4C] font-semibold hover:text-[#007A3D] transition-colors"
          >
            <span>Explore Youth Programs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
