import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import OurWork from './components/OurWork'
import PlantsSection from './components/PlantsSection'
import ServicesSection from './components/ServicesSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <OurWork />
        <PlantsSection />
        <ServicesSection />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default App
