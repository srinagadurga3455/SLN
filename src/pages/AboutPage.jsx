import React from 'react'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import { websiteJsonLd, breadcrumbSchema, organizationSchema } from '../structuredData'

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About Us | Siva Lalitha Nursery, Kadiyam — Family-Run Since 2010"
        description="About Siva Lalitha Nursery — a family-run plant nursery and landscaping service on Veeravaram Road, Kadiyam. 10+ years, 100+ plant varieties, 500+ happy customers. Founded by Kamireddy Nagu."
        path="/about"
        keywords="about Siva Lalitha Nursery, nursery owner Kadiyam, family nursery East Godavari"
        jsonLd={[
          websiteJsonLd(),
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'About', item: 'https://sivalalithanursery.in/about' },
          ]),
        ]}
      />

      <PageHeader
        title="About Siva Lalitha Nursery"
        intro="A family-run plant nursery and landscaping service on Veeravaram Road in Kadiyam — serving Andhra Pradesh's green spaces since 2010."
        breadcrumb={[{ name: 'Home', to: '/' }, { name: 'About' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              <span className="font-bold text-leaf">Siva Lalitha Nursery</span> is a family-run
              plant nursery and landscaping service on Veeravaram Road in Kadiyam — widely
              recognized as Andhra Pradesh's premier nursery hub, supplying plants to buyers
              across the state.
            </p>
            <p>
              "Our passion is helping people grow — whether it's a home garden, a farm orchard,
              or a large commercial landscape," says <span className="font-semibold">Kamireddy Nagu</span>,
              founder and owner. "Kadiyam has been a nursery hub for generations, and we take
              pride in carrying that tradition forward with quality plants and honest service."
            </p>
            <p>
              We supply <span className="font-semibold">100+ varieties</span> of fruit plants,
              flowering plants, avenue trees, lawn grass (Mexican and Pearl varieties), and
              landscaping materials for homes, farms, resorts, and commercial projects across
              East Godavari district. Our expertise includes grafted fruit varieties,
              air-layered ornamentals, and drip-irrigated landscaping solutions.
            </p>
            <p>
              Whether you're planting a small home garden or setting up an orchard,
              we have the plants and 10+ years of hands-on experience to help you succeed.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-l-4 border-marigold pl-6 text-left">
              <div className="text-4xl font-bold text-leaf mb-1">100+</div>
              <div className="text-gray-600 text-sm">Plant Varieties</div>
            </div>
            <div className="border-l-4 border-marigold pl-6 text-left">
              <div className="text-4xl font-bold text-leaf mb-1">10+</div>
              <div className="text-gray-600 text-sm">Years in Business</div>
            </div>
            <div className="border-l-4 border-marigold pl-6 text-left">
              <div className="text-4xl font-bold text-leaf mb-1">500+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div className="border-l-4 border-marigold pl-6 text-left">
              <div className="text-4xl font-bold text-leaf mb-1">7-7</div>
              <div className="text-gray-600 text-sm">Open Daily</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-clay">
        <div className="container-custom">
          <CtaBanner
            title="Meet us in Kadiyam"
            text="Visit Siva Lalitha Nursery on Veeravaram Road, Kadiyam, or call +91 9502835577. We are happy to help you pick the right plants."
          />
        </div>
      </section>
    </>
  )
}

export default AboutPage
