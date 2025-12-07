
import { motion } from 'framer-motion';
import aboutImage from '../public/images/hand-tech-background.jpg';
import aboutImageTwo from '../public/images/plant-in-hand.jpg';


export default function About() {
  return (
    <div className=" bg-gray-50">
      <div className="max-w-max mx-auto px-4 py-5 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center my-8 lg:my-16"
        >
          <p className="text-sm md:text-lg max-w-4xl text-center lg:text-justify text-gray-600 font-semibold mx-auto">
            At GreenSfera, sustainability isn’t just an option, it's the future. We develop greener solutions powered by smarter technology, helping individuals, businesses, and communities reduce their environmental impact in practical, accessible ways. As a youth-led climate-tech organization in Nigeria, we blend innovation, data insights, and community-driven action to make sustainable living a reality for everyone.
          </p>

          <p className="text-sm md:text-lg max-w-4xl text-center hidden lg:flex text-gray-600 font-semibold mx-auto">
            Our vision is simple: a cleaner environment, smarter choices, and a sustainable future for all. Together, we’re not just imagining a better world—we’re actively building it.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 lg:gap-32  lg:px-20">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            src={aboutImageTwo} alt="" className='h-auto lg:h-[700px] object-cover' />
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="lg:py-10 flex flex-col justify-center">
            <h2 className='text-2xl md:text-4xl lg:text-7xl text-[#009B4C] font-bold mb-4 max-w-3xl'>Powering a greener future</h2>
            <p className='text-sm md:text-lg text-gray-700 text-justify'>GreenSfera supports communities with smart, tech-driven clean energy solutions. By leveraging solar power and sustainable technology, we help reduce carbon footprints, improve access to renewable energy, and make eco-friendly living practical and achievable for everyone.</p>
          </motion.div>
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="lg:py-10 flex flex-col justify-center">
            <h2 className='text-2xl md:text-4xl lg:text-7xl text-[#009B4C] font-bold mb-4 max-w-3xl'>Inspiring the next generation of eco-innovators</h2>
            <p className='text-sm md:text-lg text-gray-700 text-justify'>
              GreenSfera’s Youth Hub equips young people with the tools, knowledge, and mentorship to design climate-smart solutions. Through workshops, bootcamps, and eco-challenges, we empower students to lead sustainability initiatives in their communities.
            </p>
          </motion.div>
          <motion.img src={aboutImage}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            alt="" className='h-auto lg:h-[700px] object-cover' />
        </div>
      </div>
    </div>
  );
}