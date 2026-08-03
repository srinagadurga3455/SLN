import React from 'react'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import { websiteJsonLd, breadcrumbSchema, localBusinessSchema } from '../structuredData'

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact Siva Lalitha Nursery | Plant Nursery in Kadiyam, Andhra Pradesh"
        description="Contact Siva Lalitha Nursery, Kadiyam — phone +91 9502835577, WhatsApp, email and address. Veeravaram Road, Kadiyam, East Godavari, Andhra Pradesh. Open daily 7 AM – 7 PM."
        path="/contact"
        keywords="contact Siva Lalitha Nursery, nursery phone number Kadiyam, plant nursery Kadiyam contact"
        jsonLd={[
          websiteJsonLd(),
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'Contact', item: 'https://sivalalithanursery.in/contact' },
          ]),
        ]}
      />

      <PageHeader
        title="Contact Us — Siva Lalitha Nursery, Kadiyam"
        intro="Call, WhatsApp or visit us at Veeravaram Road, Kadiyam, East Godavari District, Andhra Pradesh. We are open every day from 7 AM to 7 PM."
        breadcrumb={[{ name: 'Home', to: '/' }, { name: 'Contact' }]}
      />

      <Contact />

      <div className="bg-clay py-16">
        <div className="container-custom">
          <div className="bg-white border-2 border-leaf/20 p-8 max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl text-leaf mb-4">Business Hours</h2>
            <p className="text-gray-700 text-lg">
              Monday – Sunday: 7:00 AM – 7:00 PM
            </p>
            <p className="text-gray-600 mt-4">
              We accept orders for bulk plant supply and landscaping projects across Andhra Pradesh and Telangana.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
