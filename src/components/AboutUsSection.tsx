import { useState, useEffect } from 'react';
import { Sparkles, Zap, Users, Globe2, ArrowRight, PlayCircle } from 'lucide-react';

const AboutUsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const impactStories = [
    {
      number: "73%",
      label: "reduction in carbon footprint",
      detail: "achieved by our community members in 2024"
    },
    {
      number: "10K+",
      label: "changemakers worldwide",
      detail: "creating ripples of positive impact"
    },
    {
      number: "156",
      label: "countries represented",
      detail: "in our growing global network"
    }
  ];

  const quotes = [
    {
      text: "We're not just another platform. We're the people who believe that small actions, multiplied by millions, change everything.",
      author: "Our Philosophy"
    },
    {
      text: "Every person who joins us isn't a number—they're a force for good, a story worth telling, a future worth building.",
      author: "Our Promise"
    },
    {
      text: "We started because we were tired of talking. Now we're a global movement of doers, makers, and believers.",
      author: "Our Reality"
    }
  ];

  return (
    <div className='relative bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-white rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        ></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section - Asymmetric Layout */}
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Story */}
            <div className="space-y-4 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Est. 2019</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                We're Building
                <span className="block text-white/70 mt-2">Something Real</span>
              </h1>

              <div className="space-y-4 text-md lg:text-lg text-white/90 leading-relaxed"> 
              <p> GreenSfera was founded with a simple belief: climate action becomes powerful when technology and community work together. What started as a small youth-led initiative in Nigeria has grown into a movement focused on practical, scalable solutions for a healthier planet. </p> 
              <p> Instead of waiting for change, we build it through data-driven environmental projects, hands-on community programs, and digital tools that make sustainable living easier for everyone. Our team brings together technologists, young innovators, and local changemakers passionate about turning ideas into real impact. </p> 
              <p className="text-lg lg:text-xl text-white font-medium"> Today, GreenSfera is helping communities adopt smarter, cleaner habits and we’re just getting started. </p> </div>

              <div className="flex flex-wrap  gap-2 lg:gap-4 pt-4">
                <button className="bg-white text-[#009B4C] px-4 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2">
                  <span>Join the Movement</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white px-4 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30 inline-flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Our Story</span>
                </button>
              </div>
            </div>

            {/* Right: Dynamic Quote Carousel */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 lg:p-12 border border-white/20 shadow-2xl">
                <div className="relative h-64 lg:h-80">
                  {quotes.map((quote, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700  ${
                        activeQuote === index 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8 pointer-events-none'
                      }`}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="text-white/40 text-4xl lg:text-8xl font-serif leading-none lg:mb-4">"</div>
                          <p className="text-xl lg:text-3xl text-white font-medium leading-relaxed">
                            {quote.text}
                          </p>
                        </div>
                        <div className="text-white/70 text-sm font-medium mt-4 lg:mt-8">
                          — {quote.author}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote indicators */}
                <div className="flex gap-2 justify-center mt-6">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveQuote(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeQuote === index 
                          ? 'w-12 bg-white' 
                          : 'w-1.5 bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* What Makes Us Different */}
        <div className="pb-20 lg:pb-32">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 lg:p-16 border border-white/20">
            <div className="text-center mb-8 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-6">
                Why We're Different
              </h2>
              <p className="text-sm lg:text-xl text-white/80 max-w-3xl mx-auto">
                We're not another corporate CSR initiative or feel-good newsletter. Here's what actually sets us apart.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full hover:bg-white/20 transition-all">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Community, Not Customers
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm lg:text-lg">
                    You're not a user ID in our database. You're part of a living, breathing community where your voice matters, your ideas get heard, and your impact is celebrated.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full hover:bg-white/20 transition-all">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <Zap className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Action Over Awareness
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm lg:text-lg">
                    We've had enough awareness campaigns. Every feature we build is designed to turn intention into action—real projects, real results, real change.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full hover:bg-white/20 transition-all">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <Globe2 className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Radically Transparent
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm lg:text-lg">
                    Our impact reports are public. Our finances are open. Our failures are documented. We believe trust is built through honesty, not marketing speak.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full hover:bg-white/20 transition-all">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Built by Believers
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm lg:text-lg">
                    Our team works here because they believe in the mission, not because it's a job. Every line of code, every feature, every decision comes from people who genuinely care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;