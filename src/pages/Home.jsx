import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import OurWork from '../components/OurWork'
import PlantsSection from '../components/PlantsSection'
import ServicesSection from '../components/ServicesSection'
import Contact from '../components/Contact'
import FaqAccordion from '../components/FaqAccordion'
import Seo from '../Seo'
import { homeFaqs } from '../data/seoContent'
import { websiteJsonLd, breadcrumbSchema, faqSchema, localBusinessSchema } from '../structuredData'

function Home() {
  return (
    <>
      <Seo
        title="Siva Lalitha Nursery | Plant Nursery & Landscaping in Kadiyam, Andhra Pradesh"
        description="Siva Lalitha Nursery in Kadiyam, East Godavari — family-run plant nursery since 2010. 100+ plant varieties, landscaping services, wholesale supply for farms & resorts. Call +91 9502835577."
        path="/"
        keywords="plant nursery in Kadiyam, best nursery in Kadiyam, Kadiyam nursery, landscaping services Kadiyam, wholesale plant nursery, fruit plants, flower plants, indoor plants, outdoor plants, garden plants, ornamental plants, avenue plants, medicinal plants, tree plants"
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([{ name: 'Home', item: 'https://sivalalithanursery.in/' }]),
          faqSchema(homeFaqs),
        ]}
      />
      <Hero />
      <About />
      <OurWork />
      <PlantsSection />
      <ServicesSection />
      <section id="faq" className="section-padding bg-clay">
        <div className="container-custom">
          <FaqAccordion faqs={homeFaqs} title="Frequently Asked Questions" />
        </div>
      </section>
      <Contact />
    </>
  )
}

export default Home
