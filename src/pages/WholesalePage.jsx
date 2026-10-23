import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import FaqAccordion from '../components/FaqAccordion'
import { servicesContent } from '../data/seoContent'
import { websiteJsonLd, breadcrumbSchema, faqSchema, serviceSchema } from '../structuredData'

const WholesalePage = () => {
  const content = servicesContent.wholesale

  return (
    <>
      <Seo
        title="Wholesale Plant Nursery in Kadiyam | Bulk Plant Suppliers"
        description="Wholesale plant nursery in Kadiyam — bulk fruit, flowering, avenue plants and lawn grass for resorts, farms and projects. Siva Lalitha Nursery. Get bulk pricing: +91 9502835577."
        path="/wholesale-plants"
        keywords="wholesale plant nursery, bulk plants Kadiyam, plant suppliers Andhra Pradesh, wholesale nursery near me"
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'Wholesale Plants', item: 'https://sivalalithanursery.in/wholesale-plants' },
          ]),
          serviceSchema({
            name: 'Wholesale Plant Supply',
            description: content.intro,
            slug: '/wholesale-plants',
          }),
          faqSchema(content.faqs),
        ]}
      />

      <PageHeader
        title="Wholesale Plant Nursery in Kadiyam"
        intro={content.intro}
        breadcrumb={[
          { name: 'Home', to: '/' },
          { name: 'Wholesale Plants' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="font-display font-black text-3xl text-leaf text-center mb-10 uppercase">
            Why Buy Wholesale From Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.highlights.map((item, i) => (
              <div key={i} className="bg-clay border-l-4 border-marigold p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-marigold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-leaf text-white p-10 mt-12">
            <h3 className="font-display font-bold text-2xl mb-4">Who We Supply</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-white/90">
              <span>• Resorts & hotels</span>
              <span>• Farm orchards</span>
              <span>• Real-estate & builder projects</span>
              <span>• Event & festival organisers</span>
              <span>• Government & public works</span>
              <span>• Retail nurseries & landscapers</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Send us your plant requirement list and we will share bulk pricing. We also arrange delivery
              within East Godavari and beyond for large orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919502835577"
                className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                Call: 95028 35577
              </a>
              <a
                href="https://wa.me/917330873455?text=Hi%2C%20I%27m%20interested%20in%20wholesale%20plant%20supply"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-leaf hover:bg-leaf-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                Request Bulk Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-clay">
        <div className="container-custom">
          <FaqAccordion faqs={content.faqs} title="Wholesale Plants — FAQs" />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <CtaBanner
            title="Need plants in bulk?"
            text="Siva Lalitha Nursery, Kadiyam supplies wholesale plants across Andhra Pradesh. Call +91 9502835577 for the best bulk rates."
          />
        </div>
      </section>
    </>
  )
}

export default WholesalePage
