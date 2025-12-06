import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Environmental Activist",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5,
      text: "Joining this community has been life-changing. I've connected with amazing people who share my passion for creating positive change. The support and resources available have empowered me to make a real difference in my local community.",
      impact: "Planted 5,000+ trees",
      video: false
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Youth Coordinator",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 5,
      text: "The training programs and mentorship I received here transformed my approach to youth engagement. Now I'm leading initiatives that impact hundreds of young people every month. This platform gave me the tools and confidence to scale my impact.",
      impact: "Mentored 200+ youth",
      video: true
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Community Organizer",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      rating: 5,
      text: "What stands out most is the genuine care and support from everyone involved. This isn't just another organization—it's a family united by purpose. The impact we're creating together is beyond what I could have imagined achieving alone.",
      impact: "Organized 50+ events",
      video: false
    },
    {
      id: 4,
      name: "David Martinez",
      role: "Social Entrepreneur",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 5,
      text: "The network and partnerships I've built through this platform have been invaluable. I've launched three successful social enterprises with support from this community. The collaborative spirit here is unmatched.",
      impact: "3 social enterprises launched",
      video: false
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "Sustainability Consultant",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      rating: 5,
      text: "As a professional in the sustainability sector, I've worked with many organizations. This one stands out for its authenticity and measurable impact. The transparency in operations and the dedication to real change is refreshing and inspiring.",
      impact: "Advised 30+ companies",
      video: true
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Volunteer Coordinator",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      rating: 5,
      text: "I started as a volunteer and now I coordinate programs that engage thousands. The growth opportunities and leadership development here are exceptional. They truly invest in their people and empower us to lead.",
      impact: "Coordinated 1000+ volunteers",
      video: false
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index:number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-10 lg:py-20 bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#009B4C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#009B4C]/5 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 opacity-10">
        {/* <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-white" />
            <span>Trusted by Thousands</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Stories of Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from real people making real change. Their stories inspire us every day.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-white/20 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-8 p-4 lg:p-8 md:p-12">
              {/* Left: Image & Info */}
              <div className="md:col-span-2 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#009B4C]/20 shadow-xl">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-300 font-medium mb-1">{currentTestimonial.role}</p>
                <p className="text-gray-300 text-sm mb-4">{currentTestimonial.location}</p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Impact Badge */}
                <div className="bg-[#009B4C]/10 text-[#fff] px-4 py-2 rounded-full text-sm font-medium">
                  {currentTestimonial.impact}
                </div>
              </div>

              {/* Right: Testimonial Content */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-[#009B4C] mb-4 hidden md:flex" />
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-center">
                  {currentTestimonial.text}
                </p>
                
                {/* Navigation */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200">
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full group bg-[#009B4C]  hover:bg-gray-200 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5 group-hover:text-[#009B4C] text-gray-700 dark:text-gray-300" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full group bg-[#009B4C] hover:bg-gray-200 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5 group-hover:text-[#009B4C] text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'w-8 bg-[#009B4C]' 
                            : 'w-2 bg-gray-200'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4 ">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#009B4C]/20"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;