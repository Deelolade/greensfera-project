// import { Trees, Trash2, Cpu, GraduationCap } from 'lucide-react';
import { Eye, MoveLeft, MoveRight } from 'lucide-react';
import projectImageOne from '../public/images/project-image-one.jpg'
import projectImageTwo from '../public/images/globe.jpg'
import projectImageThree from '../public/images/plant-in-hand.jpg'


const projects = [
  {
    image: projectImageTwo,
    title: 'CLEAN EARTH CAMPAIGNS',
    description: 'A cleaner community starts with smarter choices',

  },
  {
    image: projectImageOne,
    title: 'YOUTH INNOVATORS HUB',
    description: 'Where young minds build tomorrow’s climate solutions',

  },
  {
    image: projectImageThree,
    title: 'DIGITAL CLIMATE ACTION',
    description: 'Mobilizing communities through smart, tech-powered campaigns.',

  },
  // {
  //   image: projectImageOne,
  //   title: 'Community Sustainability Trainings',
  //   description: 'Workshops on green living, renewable energy, and circular economy practices.',

  // },
];

// const researchAreas = [
//   'Waste management & circular economy',
//   'Soil restoration',
//   'Urban greening',
//   'Water conservation',
//   'Community climate risk awareness',
//   'Tech-enabled environmental tracking',
// ];

export default function Projects() {
  return (
    <section className={`py-20 bg-gradient-to-br from-[#F2F0EA] via-white to-[#C2F0D5]/20`}>
      <div className="max-w-max mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3B2E] mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative climate solutions combining technology, community action, and environmental restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {projects.map((project, idx) => {
            return (
              <div key={idx} className='overflow-hidden '>
                <div className='overflow-hidden rounded-2xl shadow-lg'>
                  <img src={project.image} alt="" className='max-w-[620px] h-[384px] w-full rounded-2xl object-cover transition-transform duration-700 ease-in-out hover:scale-105' />
                </div>
                <div className="mt-6 ">
                  <p className=' text-[#009B4C] font-semibold '>{project.title}</p>
                  <h2 className='text-2xl font-semibold md:text-4xl my-2 font-heading'>{project.description}</h2>
                  <div className="mt-4 group flex items-center space-x-2 cursor-pointer">
                    <span className="text-lg font-semibold">Learn more</span>
                    <MoveRight
                      className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    />
                  </div>
                </div>


              </div>
            )
          })}
        </div>

        {/* max-w-[620px] h-[384px] */}

        {/* {full && (
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
        )} */}
      </div>
    </section>
  );
}
