import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Impact from './components/Impact';
import YouthHub from './components/YouthHub';
import Gallery from './components/Gallery';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {currentSection === 'home' && (
        <>
          <Hero setCurrentSection={setCurrentSection} />
          <About setCurrentSection={setCurrentSection} />
          <Projects />
          <Impact />
          <YouthHub setCurrentSection={setCurrentSection} />
          <Gallery />
          <GetInvolved setCurrentSection={setCurrentSection} />
        </>
      )}
      {currentSection === 'about' && <About setCurrentSection={setCurrentSection} full />}
      {currentSection === 'projects' && <Projects full />}
      {currentSection === 'youth-hub' && <YouthHub setCurrentSection={setCurrentSection} full />}
      {currentSection === 'contact' && <GetInvolved setCurrentSection={setCurrentSection} full />}
      <Footer setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default App;
