// import { useState } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Impact from './components/Impact';
// import YouthHub from './components/YouthHub';
// import Gallery from './components/Gallery';
// import GetInvolved from './components/GetInvolved';
// import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Projects from './pages/Projects';
import YouthHub from './pages/YouthHub';
import Contact from './pages/Contact';

function App() {
  // const [currentSection, setCurrentSection] = useState('home');

  return (
    <>
    {/* <div className="min-h-screen bg-white">
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
    </div> */}
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='who-we-are' element={<WhoWeAre/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='youth-hub' element={<YouthHub/>}/>
      <Route path='contact-us' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
