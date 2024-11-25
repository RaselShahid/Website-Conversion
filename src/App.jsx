import About from "./components/About";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Foot from "./components/Foot";
import Footer from "./components/Footer";
import Navbar from "./Components/Navbar";
import Partner from "./components/Partner";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Testimonial/>
      <Partner/>
      <Blogs/>
      <Contact/>
      <Footer/>
      <Foot/>
    </>
  )
}

export default App
