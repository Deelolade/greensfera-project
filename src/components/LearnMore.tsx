import { useNavigate } from 'react-router-dom'
import image from '../public/images/plant-in-earth.jpg'
const LearnMore = () => {
  const navigate = useNavigate()
  return (
    <section className=" h-[60vh] lg:h-[90vh] w-full bg-gradient-to-br from-[#009B4C] to-[#0A3B2E]  py-6 px-3  lg:p-20">
        <div style={{ backgroundImage: `url(${image})` }}  className="relative bg-cover bg-center h-full p-5 lg:p-10 flex flex-col justify-start items-start rounded-3xl" >
        <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
        <div className="z-50 absolute bottom-5 lg:bottom-16 ">
            <h1 className='text-[#fff] font-semibold text-2xl lg:text-6xl'>Join the Green Innovators Hub</h1>
        <p className='max-w-3xl text-sm lg:text-lg font-sans text-[#fff] mt-4'>We drive practical climate solutions through technology, community engagement, and youth-led initiatives, restoring ecosystems and empowering communities for a greener future.</p>
        <button onClick={()=>{
          navigate('/projects')
          window.scrollTo({top: 0, behavior: 'smooth'})
        }} className='text-white font-semibold bg-[#009B4C] px-8  py-3 mt-3 rounded-md hover:bg-[#007A3D] transition-all hover:shadow-lg hover:shadow-[#009B4C]/30'>Our Projects</button>
        </div>
        </div>
        
    </section>
  )
}
export default LearnMore;