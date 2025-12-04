import { Trees, Trash2, Cpu, GraduationCap } from 'lucide-react';

interface ProjectsProps {
  full?: boolean;
}

const projects = [
  {
    icon: Trees,
    title: 'Green Restoration',
    description: 'Tree planting, biodiversity protection, and re-greening spaces to restore ecosystems.',
    color: 'from-[#009B4C] to-[#0A3B2E]',
    bgColor: 'bg-[#C2F0D5]',
  },
  {
    icon: Trash2,
    title: 'Clean Earth Campaigns',
    description: 'Waste reduction, recycling awareness, and plastic-free community drives.',
    color: 'from-[#0A3B2E] to-[#009B4C]',
    bgColor: 'bg-[#009B4C]/10',
  },
  {
    icon: Cpu,
    title: 'Tech for Earth',
    description: 'Climate data, geospatial tools, and AI-enhanced mapping for environmental monitoring.',
    color: 'from-[#009B4C] to-[#007A3D]',
    bgColor: 'bg-[#C2F0D5]',
  },
  {
    icon: GraduationCap,
    title: 'Community Sustainability Trainings',
    description: 'Workshops on green living, renewable energy, and circular economy practices.',
    color: 'from-[#007A3D] to-[#0A3B2E]',
    bgColor: 'bg-[#009B4C]/10',
  },
];

const researchAreas = [
  'Waste management & circular economy',
  'Soil restoration',
  'Urban greening',
  'Water conservation',
  'Community climate risk awareness',
  'Tech-enabled environmental tracking',
];

export default function Projects({ full = false }: ProjectsProps) {
  return (
    <section className={`${full ? 'pt-32' : 'py-20'} bg-gradient-to-br from-[#F2F0EA] via-white to-[#C2F0D5]/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3B2E] mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative climate solutions combining technology, community action, and environmental restoration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#009B4C]/30 hover:-translate-y-2"
              >
                <div className={`${project.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-[#009B4C]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3B2E] mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            );
          })}
        </div>

        {full && (
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-[#0A3B2E] mb-8 text-center">Research & Insights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-[#F2F0EA] rounded-xl hover:bg-[#C2F0D5] transition-colors"
                >
                  <div className="w-2 h-2 bg-[#009B4C] rounded-full mt-2"></div>
                  <p className="text-[#0A3B2E] font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
