import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import { servicesContent } from '../data/seoContent'
import { websiteJsonLd, breadcrumbSchema, serviceSchema } from '../structuredData'

const ServicesPage = () => {
  const services = [
    { icon: '🏡', title: 'Landscaping Design & Installation', text: 'Complete landscape design and installation for homes, farms, resorts and commercial spaces. See our Landscaping Services page for details.', to: '/services/landscaping' },
    { icon: '🌱', title: 'Garden Setup for Homes & Farms', text: 'We plan, prepare and plant complete gardens — from soil preparation to final planting and aftercare guidance.' },
    { icon: '📦', title: 'Wholesale Plant Supply', text: 'Bulk fruit, flowering and avenue plants for resorts, farms, real-estate projects and government works. Visit our Wholesale page.', to: '/wholesale-plants' },
    { icon: '🌿', title: 'Lawn Grass (Mexican, Pearl)', text: 'High-quality Mexican and Pearl lawn grass supplied and laid for gardens, farms and commercial grounds.' },
    { icon: '🌺', title: 'Seasonal Flowering Plants', text: 'Fresh seasonal flowering plants through the year — marigolds, balsam and more, ready for beds and events.' },
    { icon: '🥭', title: 'Grafted Fruit Tree Saplings', text: 'Fast-bearing grafted mango, lemon, guava and other fruit saplings for home gardens and orchards.' },
  ]

  return (
    <>
      <Seo
        title="Nursery Services in Kadiyam | Landscaping, Wholesale Plants & Garden Setup"
        description="Nursery services in Kadiyam — landscaping design & installation, garden setup, wholesale plant supply, lawn grass and grafted fruit saplings from Siva Lalitha Nursery. Call +91 9502835577."
        path="/services"
        keywords="nursery services Kadiyam, landscaping services Kadiyam, garden setup, wholesale plants, lawn grass Kadiyam"
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'Services', item: 'https://sivalalithanursery.in/services' },
          ]),
          serviceSchema({
            name: 'Plant Nursery & Landscaping Services',
            description: 'Landscaping, garden setup, wholesale plant supply, lawn grass and fruit saplings in Kadiyam.',
            slug: '/services',
          }),
        ]}
      />

      <PageHeader
        title="Nursery Services in Kadiyam"
        intro="Siva Lalitha Nursery offers complete plant supply and landscaping services in Kadiyam and across East Godavari — from a single garden plant to large-scale commercial landscaping projects."
        breadcrumb={[{ name: 'Home', to: '/' }, { name: 'Services' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-clay border-l-4 border-marigold p-6">
                <div className="text-4xl mb-3" aria-hidden="true">{service.icon}</div>
                <h2 className="font-bold text-xl text-leaf mb-2">{service.title}</h2>
                <p className="text-gray-700 mb-3">{service.text}</p>
                {service.to && (
                  <Link to={service.to} className="text-marigold font-semibold text-sm hover:text-marigold-dark">
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-clay">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-leaf text-center mb-8 uppercase">
            Our Service Areas
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Based in Kadiyam (East Godavari District), we proudly serve plant buyers and landscaping clients
            across Andhra Pradesh and Telangana, including Rajamahendravaram, Visakhapatnam, Hyderabad and
            the Araku Valley region. Our project portfolio includes government beautification works, resort
            landscaping and farm house development.
          </p>
          <div className="bg-leaf text-white p-8">
            <h3 className="font-display font-bold text-2xl mb-4">Recent Project Highlights</h3>
            <ul className="space-y-3 text-white/90">
              <li>• Rajamahendravaram Railway Bridge beautification — Pushkaralu 2016 (inaugurated by the Chief Minister)</li>
              <li>• Araku Utsav Festival — 500+ trees planted, 2 km roadside coverage, 10+ member crew</li>
              <li>• Shankarapalli Farm House, Hyderabad — complete landscaping and greenery development</li>
              <li>• Araku Farm House — hillside landscape design with native and flowering species</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <CtaBanner
            title="Need a nursery service in Kadiyam?"
            text="Call +91 9502835577 or visit Siva Lalitha Nursery on Veeravaram Road, Kadiyam for a free consultation. Open daily 7 AM – 7 PM."
          />
        </div>
      </section>
    </>
  )
}

export default ServicesPage
