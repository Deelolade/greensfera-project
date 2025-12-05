
import aboutImage from '../public/images/young-boys-planting.jpg';
import aboutImageTwo from '../public/images/solar-house.webp';

export default function About() {
  return (
    <div className=" bg-gray-50">
      <div className="max-w-max mx-auto px-6 py-20">
        <div className="text-center my-16">
          <p className="text-lg max-w-4xl text-justify text-gray-600 font-semibold mx-auto">
            At GreenSfera, sustainability isn’t just an option, it’s the future. We create greener solutions powered by smarter technology, helping individuals, businesses, and communities reduce their environmental impact.
            As a youth-led climate-tech organization in Nigeria, we combine innovation, data insights, and community-driven initiatives to make sustainable living easier and more accessible.
            Our vision is simple: a cleaner environment, smarter choices, and a sustainable future for everyone. Together, we’re not just imagining a better world—we’re building it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-32 px-20">
          <img src={aboutImageTwo} alt="" className='h-[700px] object-cover' />
          <div className="py-10 flex flex-col justify-center">
            <h2 className='text-5xl md:text-7xl text-[#009B4C] font-bold mb-4 max-w-3xl'>Powering a greener future</h2>
            <p className='text-lg text-gray-700 text-justify'>GreenSfera supports communities with smart, tech-driven clean energy solutions. By leveraging solar power and sustainable technology, we help reduce carbon footprints, improve access to renewable energy, and make eco-friendly living practical and achievable for everyone.</p>
          </div>
          <div className="py-10 flex flex-col justify-center">
            <h2 className='text-5xl md:text-7xl text-[#009B4C] font-bold mb-4 max-w-3xl'>Inspiring the next generation of eco-innovators</h2>
            <p className='text-lg text-gray-700 text-justify'>
              GreenSfera’s Youth Hub equips young people with the tools, knowledge, and mentorship to design climate-smart solutions. Through workshops, bootcamps, and eco-challenges, we empower students to lead sustainability initiatives in their communities.
            </p>
          </div>
          <img src={aboutImage} alt="" className='h-[700px] object-cover'/>
        </div>
      </div>



    </div>
  );
}