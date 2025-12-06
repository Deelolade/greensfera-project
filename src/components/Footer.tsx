import { Leaf, Instagram, Facebook, Linkedin, LucideTwitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



export default function Footer() {
  const navigate = useNavigate()
  const handleNavClick = (section: string) => {
    navigate(`/${section}`)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A3B2E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Leaf className="w-8 h-8 text-[#009B4C]" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-bold">GreenSfera</h3>
                <p className="text-xs text-[#009B4C]">Climate-Tech Solutions</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Combining technology, digital engagement, and community participation to drive
              practical climate solutions for a greener future.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('who-we-are')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Who We Are
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('youth-hub')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Youth Hub
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('contact-us')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact-us')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Partner With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact-us')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact-us')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-[#009B4C] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-[#009B4C] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-[#009B4C] transition-all"
                aria-label="Twitter"
              >
                <LucideTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-[#009B4C] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              <a href="mailto:info@greensfera.org" className="hover:text-white transition-colors">
                info@greensfera.org
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} GreenSfera. All rights reserved. Develop by <a href="https://www.tinzwave.com" className='hover:underline'>Tinzwave technologies</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
