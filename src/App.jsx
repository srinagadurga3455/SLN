import React from 'react'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>Siva Lalitha Nursery | Landscapers & Plant Suppliers in Kadiyam, Andhra Pradesh</title>
        <meta name="description" content="Siva Lalitha Nursery in Kadiyam, East Godavari offers landscaping, garden design, and all types of fruit and flower plants. Contact us for home, farm, and commercial plant supply." />
      </Helmet>
      
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
