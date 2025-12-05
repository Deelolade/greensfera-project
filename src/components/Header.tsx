import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Who We Are' },
    { id: 'projects', label: 'Projects' },
    { id: 'youth-hub', label: 'Youth Hub' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0  backdrop-blur-sm z-50 ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white md:bg-transparent">
        <div className="flex justify-between items-center h-[10vh] lg:h-20 ">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#0A3B2E] rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <Leaf className="size-5 lg:size-10 text-[#009B4C] relative" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-sm lg:text-2xl font-bold text-[#0A3B2E]">GreenSfera</h1>
              <p className="text-xs text-[#0A3B2E] lg:text-[#fff] font-medium">Climate-Tech Solutions</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm text-white font-medium transition-colors hover:text-[#009B4C] 
                  
                  `}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#009B4C] text-white px-8 py-2.5 rounded-md text-[16px] font-medium hover:bg-[#007A3D] transition-all hover:shadow-lg hover:shadow-[#009B4C]/30"
            >
              Join Us
            </button>
          </div>

          <button
            className="md:hidden text-[#0A3B2E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white ">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  item.id === 'contact' ? 'text-[#009B4C]' : 'text-[#0A3B2E]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full mt-4 bg-[#009B4C] text-white px-6 py-3 rounded-full text-sm font-medium"
            >
              Join Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
