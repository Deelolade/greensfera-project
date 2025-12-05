import { ArrowRight } from 'lucide-react';
import React from 'react'

const JoinUs = () => {
  return (
    <div className='pt-32 pb-20 bg-gradient-to-br from-white via-[#C2F0D5]/30 to-white max-w-7xl mx-auto'>
          <div className="bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Join the Green Innovators Hub</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be part of a generation creating sustainable solutions through innovation,
              collaboration, and technology.
            </p>
            <button
              onClick={() => {
                // setCurrentSection('contact');
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
