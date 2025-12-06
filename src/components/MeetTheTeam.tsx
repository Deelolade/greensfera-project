import { useState } from 'react';
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const MeetTheTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Obele Ezugorie",
      role: " Founder & Executive Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Environmental scientist with 15+ years of experience in sustainable development and green technology innovation.",
      linkedin: "#",
      twitter: "#",
      email: "sarah@example.com"
    },
    {
      id: 2,
      name: "Ofodile Emmanuel",
      role: "Director of Climate Programs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Tech innovator passionate about building platforms that connect people with purpose and drive sustainable change.",
      linkedin: "#",
      twitter: "#",
      email: "james@example.com"
    },
    {
      id: 3,
      name: "Chisom Grace",
      role: " Director of Operations & Communications",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Community builder and social impact strategist dedicated to fostering meaningful connections and collaboration.",
      linkedin: "#",
      twitter: "#",
      email: "maria@example.com"
    },
  ];


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
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
            <span>🌟</span>
            <span>The People Behind the Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            A diverse group of passionate innovators, technologists, and changemakers 
            united by a shared vision for a sustainable future.
          </p>
        </div>

        {/* Leadership Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Bio */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-[#0A3B2E] via-[#0A3B2E]/95 to-transparent
                  transition-opacity duration-300
                  ${hoveredMember === member.id ? 'opacity-100' : 'opacity-0'}
                  flex items-end p-6
                `}>
                  <p className="text-white text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links Overlay */}
                <div className={`
                  absolute top-4 right-4 flex flex-col gap-2
                  transition-all duration-300
                  ${hoveredMember === member.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                `}>
                  <a 
                    href={member.linkedin}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-lg"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Linkedin className="w-4 h-4 text-[#009B4C]" />
                  </a>
                  <a 
                    href={member.twitter}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-lg"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Twitter className="w-4 h-4 text-[#009B4C]" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-lg"
                  >
                    <Mail className="w-4 h-4 text-[#009B4C]" />
                  </a>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Want to Join Our Team?
            </h3>
            <p className="text-white/90 mb-6">
              We're always looking for passionate individuals who want to make a difference.
            </p>
            <button className="bg-white text-[#009B4C] px-8 py-3 rounded-full font-semibold hover:bg-[#F2F0EA] transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
              <span>View Open Positions</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo wrapper
export default  MeetTheTeam;