import About from "../components/About"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import GetInvolved from "../components/GetInvolved"
import Header from "../components/HeroHeader"
import Hero from "../components/Hero"
import Impact from "../components/Impact"
import Projects from "../components/Projects"
import TestimonialsSection from "../components/Testimonials"

const Home = () => {
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Projects/>
      <Impact/>
      <Gallery/>
      <TestimonialsSection/>
      <GetInvolved/>
      <Footer/>
    </>
  )
}

export default Home
