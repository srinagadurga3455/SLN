import React from 'react'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import FaqAccordion from '../components/FaqAccordion'
import { homeFaqs } from '../data/seoContent'
import { websiteJsonLd, breadcrumbSchema, faqSchema } from '../structuredData'

const FaqPage = () => {
  return (
    <>
      <Seo
        title="FAQ | Siva Lalitha Nursery, Kadiyam — Plant Nursery Questions Answered"
        description="Frequently asked questions about Siva Lalitha Nursery Kadiyam — plants available, nursery timings, landscaping services, bulk orders and delivery. Call +91 9502835577."
        path="/faq"
        keywords="nursery FAQ, plant nursery questions, Kadiyam nursery timings"
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'FAQ', item: 'https://sivalalithanursery.in/faq' },
          ]),
          faqSchema(homeFaqs),
        ]}
      />

      <PageHeader
        title="Frequently Asked Questions"
        intro="Everything you need to know about buying plants and landscaping services from Siva Lalitha Nursery in Kadiyam."
        breadcrumb={[{ name: 'Home', to: '/' }, { name: 'FAQ' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <FaqAccordion faqs={homeFaqs} title="Plant Nursery FAQs" />
        </div>
      </section>

      <section className="section-padding bg-clay">
        <div className="container-custom">
          <CtaBanner
            title="Still have a question?"
            text="Call +91 9502835577 or WhatsApp us — we are happy to answer questions about plants, pricing and landscaping."
          />
        </div>
      </section>
    </>
  )
}

export default FaqPage
