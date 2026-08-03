import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import FaqAccordion from '../components/FaqAccordion'
import { servicesContent } from '../data/seoContent'
import { websiteJsonLd, breadcrumbSchema, faqSchema, serviceSchema } from '../structuredData'

const LandscapingPage = () => {
  const content = servicesContent.landscaping

  return (
    <>
      <Seo
        title="Landscaping Services in Kadiyam | Garden Design & Installation"
        description="Landscaping services in Kadiyam — garden design, installation, lawn development and tree plantation by Siva Lalitha Nursery. Completed projects across East Godavari. Call +91 9502835577."
        path="/services/landscaping"
        keywords="landscaping services Kadiyam, landscape design Andhra Pradesh, garden setup Kadiyam, tree plantation East Godavari"
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'Services', item: 'https://sivalalithanursery.in/services' },
            { name: 'Landscaping Services', item: 'https://sivalalithanursery.in/services/landscaping' },
          ]),
          serviceSchema({
            name: 'Landscaping Services',
            description: content.intro,
            slug: '/services/landscaping',
          }),
          faqSchema(content.faqs),
        ]}
      />

      <PageHeader
        title="Landscaping Services in Kadiyam"
        intro={content.intro}
        breadcrumb={[
          { name: 'Home', to: '/' },
          { name: 'Services', to: '/services' },
          { name: 'Landscaping' },
        ]}
      />

      {/* What we do */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-display font-black text-3xl text-leaf text-center mb-10 uppercase">
            Our Landscaping Services
          </h2>
          <ul className="space-y-4">
            {content.services.map((service, i) => (
              <li key={i} className="flex items-start gap-4 bg-clay border-l-4 border-marigold p-5">
                <svg className="w-6 h-6 text-marigold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Completed projects */}
      <section className="section-padding bg-clay">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-display font-black text-3xl text-leaf text-center mb-10 uppercase">
            Completed Landscaping Projects
          </h2>
          <div className="space-y-6">
            {content.projects.map((project, i) => (
              <div key={i} className="bg-white border-2 border-leaf/20 p-6">
                <h3 className="font-bold text-xl text-leaf mb-2">{project.name}</h3>
                <p className="text-gray-700">{project.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            See photos of these projects on our <Link to="/#our-work" className="text-leaf font-semibold underline">home page</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FaqAccordion faqs={content.faqs} title="Landscaping in Kadiyam — FAQs" />
        </div>
      </section>

      <section className="section-padding bg-clay">
        <div className="container-custom">
          <CtaBanner
            title="Plan your landscape with us"
            text="Get a free assessment and quote for your garden, farm or commercial landscaping project in Kadiyam. Call +91 9502835577."
          />
        </div>
      </section>
    </>
  )
}

export default LandscapingPage
