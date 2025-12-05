import { useState } from 'react';
import { Target, Heart, Lightbulb, Users, Globe, TrendingUp, Award, Leaf, ArrowRight } from 'lucide-react';

const WhoWeAreSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { value: "2019", label: "Founded" },
    { value: "50+", label: "Countries" },
    { value: "10K+", label: "Members" },
    { value: "1M+", label: "Lives Impacted" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Impact",
      description: "We're driven by genuine care for people and the planet, not just profit."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly seek creative solutions to today's most pressing challenges."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Together we're stronger. Collaboration is at the heart of everything we do."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Local action, global impact. We think beyond borders to create lasting change."
    }
  ];

  const achievements = [
    {
      icon: Leaf,
      metric: "500K+",
      label: "Trees Planted",
      description: "Contributing to reforestation efforts globally"
    },
    {
      icon: Users,
      metric: "2,500+",
      label: "Projects Launched",
      description: "Community-led initiatives worldwide"
    },
    {
      icon: TrendingUp,
      metric: "95%",
      label: "Success Rate",
      description: "Of projects achieving their goals"
    },
    {
      icon: Award,
      metric: "25+",
      label: "Awards Won",
      description: "Recognition for innovation and impact"
    }
  ];

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: Target },
    { id: 'vision', label: 'Our Vision', icon: Lightbulb },
    { id: 'story', label: 'Our Story', icon: Heart }
  ];

  const tabContent = {
    mission: {
      title: "Empowering Changemakers Worldwide",
      content: "Our mission is to create a global platform where passionate individuals and organizations can connect, collaborate, and create sustainable solutions to the world's most pressing challenges. We believe that by bringing together diverse perspectives, innovative technologies, and dedicated communities, we can accelerate the transition to a more sustainable and equitable future for all.",
      highlights: [
        "Connect changemakers across the globe",
        "Provide tools and resources for impact",
        "Foster innovation through collaboration",
        "Scale sustainable solutions worldwide"
      ]
    },
    vision: {
      title: "A World Where Everyone Can Make a Difference",
      content: "We envision a future where sustainability is not just an aspiration but a way of life. A world where every individual has the resources, knowledge, and community support to contribute meaningfully to positive change. Through technology, education, and collaboration, we're building the foundation for generations to come.",
      highlights: [
        "100% renewable energy adoption globally",
        "Zero-waste circular economies",
        "Universal access to sustainable solutions",
        "Thriving ecosystems and communities"
      ]
    },
    story: {
      title: "From Idea to Global Movement",
      content: "What started as a small gathering of environmental enthusiasts in 2019 has grown into a worldwide movement. Frustrated by the gap between good intentions and meaningful action, our founders created a platform that removes barriers and empowers people to turn their passion into impact. Today, we're proud to support thousands of changemakers across 50+ countries.",
      highlights: [
        "Started with 5 founders in a small office",
        "First project: local community garden initiative",
        "Reached 1,000 members in our first year",
        "Now connecting 10,000+ changemakers globally"
      ]
    }
  };

  const activeContent = tabContent[activeTab];

  return (
    <div className='py-16 lg:py-24 bg-gradient-to-br from-[#009B4C] to-[#0A3B2E] relative overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
            <span>🌍</span>
            <span>Discover Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            We're more than an organization—we're a movement of passionate individuals 
            committed to creating a sustainable future for all.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission/Vision/Story Tabs */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-10 border border-white/20 mb-16">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                    ${activeTab === tab.id 
                      ? 'bg-white text-[#009B4C] shadow-lg scale-105' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                {activeContent.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                {activeContent.content}
              </p>
              <div className="space-y-3 pt-4">
                {activeContent.highlights.map((highlight:any, index:any) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                <div className="aspect-square bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      {activeTab === 'mission' && <Target className="w-12 h-12 text-white" />}
                      {activeTab === 'vision' && <Lightbulb className="w-12 h-12 text-white" />}
                      {activeTab === 'story' && <Heart className="w-12 h-12 text-white" />}
                    </div>
                    <div className="text-white/80 text-sm">
                      {activeTab === 'mission' && 'Focused on Impact'}
                      {activeTab === 'vision' && 'Driven by Innovation'}
                      {activeTab === 'story' && 'Built with Passion'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              The principles that guide every decision we make and action we take.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105 group"
                >
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Real metrics that showcase the tangible difference we're making together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transition-all duration-300 hover:bg-white hover:text-[#009B4C] group"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-white group-hover:text-[#009B4C] transition-colors" strokeWidth={1.5} />
                  <div className="text-4xl font-bold text-white group-hover:text-[#009B4C] mb-2 transition-colors">
                    {achievement.metric}
                  </div>
                  <div className="font-semibold text-white group-hover:text-[#009B4C] mb-2 transition-colors">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-white/80 group-hover:text-[#009B4C]/80 transition-colors">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-white text-[#009B4C] px-8 py-4 rounded-full font-semibold hover:bg-[#F2F0EA] transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
            <span>Learn More About Our Work</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

{/* // Demo wrapper */}
export default WhoWeAreSection;