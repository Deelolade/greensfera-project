import About from "../components/About"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import GetInvolved from "../components/GetInvolved"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Impact from "../components/Impact"
import Projects from "../components/Projects"

const Home = () => {
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Projects/>
      <Impact/>
      <Gallery/>
      <GetInvolved/>
      <Footer/>
    </>
  )
}

export default Home
