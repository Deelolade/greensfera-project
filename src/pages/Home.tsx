import About from "../components/About"
import Gallery from "../components/Gallery"
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
    </>
  )
}

export default Home
