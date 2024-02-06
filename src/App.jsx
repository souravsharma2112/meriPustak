
import './App.css'
import './shopgrid.css'
// import Navbar1 from './Components/Navbar1'
// import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
// import Section from './Components/Section'
import Shopgrid from './Components/Shopgrid'
import Shopcontent from './Components/Shopcontent'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    {/* <Navbar1/> */}
      <Navbar/>
      {/* <HeroSection/> */}
      {/* <Section/> */}
      <Shopgrid/>
      <Shopcontent/>
      <Footer/>
      
    </>
  )
}

export default App
