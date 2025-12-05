import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JoinUs = () => {
    const navigate = useNavigate()
  return (
    <div className='py-10 lg:py-20 bg-gradient-to-br to-[#009B4C] from-[#0A3B2E]  mx-auto relative overflow-hidden'>
        <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
          <div className="  max-w-7xl mx-auto bg-white/10 backdrop-blur-sm lg:p-8 border border-white/20 shadow-2xl rounded-2xl lg:rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4 lg:mb-6">Join the Green Innovators Hub</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be part of a generation creating sustainable solutions through innovation,
              collaboration, and technology.
            </p>
            <button
              onClick={() => {
                navigate('/contact-us')
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-[#009B4C] px-8 py-4 rounded-full font-semibold hover:bg-[#F2F0EA] transition-all inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
    </div>
  )
}

export default JoinUs
