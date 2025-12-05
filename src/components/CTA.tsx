import { useState } from 'react';
import { ArrowRight, Sparkles, Users, Target, CheckCircle, Star } from 'lucide-react';

const CTASectionDemo = () => {
  const [selectedPlan, setSelectedPlan] = useState('volunteer');

  const benefits = [
    "Make a real, measurable impact",
    "Connect with a global community",
    "Access exclusive resources and training",
    "Track your contribution and progress",
    "Receive recognition and certificates"
  ];

  const actionPlans = [
    {
      id: 'volunteer',
      title: "Volunteer",
      description: "Contribute your time and skills",
      icon: Users,
      popular: false
    },
    {
      id: 'donate',
      title: "Support Us",
      description: "Make a financial contribution",
      icon: Target,
      popular: true
    },
    {
      id: 'partner',
      title: "Partner",
      description: "Collaborate for bigger impact",
      icon: Sparkles,
      popular: false
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Members" },
    { value: "50+", label: "Countries" },
    { value: "1M+", label: "Lives Impacted" }
  ];

  const handleJoinNow = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Joining as:', selectedPlan);
    alert(`Great choice! Redirecting to ${selectedPlan} registration...`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main CTA Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-white" />
            <span>Join Our Growing Movement</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Be Part of Something Bigger
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Your actions today create the change tomorrow. Choose how you want to make an impact and join thousands of changemakers around the world.
          </p>
        </div>

        {/* Action Selection Cards */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {actionPlans.map((plan) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.id;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`
                    relative p-6 rounded-2xl border-2 transition-all duration-300 text-left
                    ${isSelected 
                      ? 'bg-white text-[#009B4C] border-white scale-105 shadow-2xl' 
                      : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-102'
                    }
                  `}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-4 bg-yellow-400 text-[#0A3B2E] px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  )}
                  <Icon className={`w-10 h-10 mb-3 ${isSelected ? 'text-[#009B4C]' : 'text-white'}`} strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
                  <p className={`text-sm ${isSelected ? 'text-[#009B4C]/80' : 'text-white/80'}`}>
                    {plan.description}
                  </p>
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="w-6 h-6 text-[#009B4C] fill-[#009B4C]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Main CTA Button */}
          <div className="text-center">
            <button
              onClick={handleJoinNow}
              className="inline-flex items-center gap-3 bg-white text-[#009B4C] px-12 py-5 rounded-full text-lg font-bold hover:bg-[#F2F0EA] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 group"
            >
              <span>Join Now as {actionPlans.find(p => p.id === selectedPlan)?.title}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-white/70 text-sm mt-4">
              No credit card required • Free to start • Cancel anytime
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              What You'll Get
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm mb-6">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-xs font-semibold">LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTASectionDemo;