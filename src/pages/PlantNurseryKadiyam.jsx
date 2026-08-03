import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import FaqAccordion from '../components/FaqAccordion'
import { categoriesWithPlants } from '../data/plantsData'
import {
  localBusinessSchema,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '../structuredData'

const PlantNurseryKadiyam = () => {
  const faqs = [
    { q: 'Why is Kadiyam famous for nurseries?', a: 'Kadiyam, in East Godavari District, Andhra Pradesh, is widely known as the nursery hub of the state. Its soil and climate are ideal for plant cultivation, and nurseries here supply plants to buyers across Andhra Pradesh, Telangana and beyond.' },
    { q: 'Is Siva Lalitha Nursery the best nursery in Kadiyam?', a: 'Siva Lalitha Nursery is a trusted, family-run nursery on Veeravaram Road, Kadiyam with over a decade of experience, 100+ plant varieties and completed landscaping projects including government beautification work. Visit us or call +91 9502835577 to see why customers trust us.' },
    { q: 'What plants can I buy from a Kadiyam nursery?', a: 'You can buy fruit plants (grafted mango, lemon, guava), flowering plants (rose, jasmine, hibiscus), ornamental plants, avenue trees, lawn grass, indoor plants, bonsai and medicinal plants from Kadiyam nurseries.' },
    { q: 'How do I reach Siva Lalitha Nursery?', a: 'We are located on Veeravaram Road, Kadiyam, East Godavari District, Andhra Pradesh. Open every day 7 AM – 7 PM. Call +91 9502835577 for directions or use the map on our contact page.' },
    { q: 'Do Kadiyam nurseries deliver plants?', a: 'Many Kadiyam nurseries, including ours, arrange delivery for bulk orders within East Godavari. Contact us with your requirement for delivery options and pricing.' },
  ]

  return (
    <>
      <Seo
        title="Plant Nursery in Kadiyam | Best Nursery in Kadiyam, Andhra Pradesh"
        description="Looking for the best plant nursery in Kadiyam? Siva Lalitha Nursery — 100+ varieties of fruit, flowering, ornamental, indoor & medicinal plants plus landscaping. Open daily 7-7. Call +91 9502835577."
        path="/plant-nursery-in-kadiyam"
        keywords="plant nursery in Kadiyam, best nursery in Kadiyam, Kadiyam nursery, nurseries in Kadiyam, plant shop Kadiyam"
        jsonLd={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'Plant Nursery in Kadiyam', item: 'https://sivalalithanursery.in/plant-nursery-in-kadiyam' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        title="Plant Nursery in Kadiyam, Andhra Pradesh"
        intro="Siva Lalitha Nursery is a family-run plant nursery on Veeravaram Road in Kadiyam — Andhra Pradesh's famous nursery hub. We supply 100+ varieties of fruit plants, flowering plants, ornamental plants, indoor plants, avenue trees, lawn grass and medicinal plants to homes, farms, resorts and commercial projects."
        breadcrumb={[
          { name: 'Home', to: '/' },
          { name: 'Plant Nursery in Kadiyam' },
        ]}
      />

      {/* Why choose us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-display font-black text-3xl md:text-4xl text-leaf text-center mb-12 uppercase">
            Why Choose Siva Lalitha Nursery?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🌱', title: '10+ Years of Experience', text: 'A decade of hands-on experience growing and supplying healthy plants across East Godavari district.' },
              { icon: '🪴', title: '100+ Plant Varieties', text: 'Fruit, flowering, ornamental, indoor, medicinal, avenue and hedge plants — with bilingual Telugu names.' },
              { icon: '🏆', title: 'Government & Commercial Projects', text: 'Trusted for public works including the Rajamahendravaram Pushkaralu beautification and Araku Utsav plantation.' },
              { icon: '🚚', title: 'Wholesale & Bulk Supply', text: 'Reliable bulk supply for farms, resorts, real-estate projects and event organisers across Andhra Pradesh.' },
              { icon: '💬', title: 'Bilingual Service', text: 'Friendly service in English and Telugu — we help you choose the right plants for your space and budget.' },
              { icon: '☀️', title: 'Open Daily 7 AM – 7 PM', text: 'Visit us any day of the week, including weekends, at Veeravaram Road, Kadiyam.' },
            ].map((item, i) => (
              <div key={i} className="bg-clay border-l-4 border-marigold p-6">
                <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-lg text-leaf mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant categories available */}
      <section className="section-padding bg-clay">
        <div className="container-custom">
          <h2 className="font-display font-black text-3xl md:text-4xl text-leaf text-center mb-4 uppercase">
            What We Grow & Supply
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
            Explore our plant categories — each stocked with healthy, climate-acclimatised saplings raised in Kadiyam.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesWithPlants.map((cat) => (
              <Link
                key={cat.key}
                to={`/plants/${cat.slug}`}
                className="bg-white border-2 border-leaf/20 hover:border-leaf/50 p-6 transition-colors group"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{cat.icon}</div>
                <h3 className="font-bold text-xl text-leaf group-hover:text-marigold transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{cat.plants.length} varieties featured in this category</p>
                <span className="text-marigold font-semibold text-sm">View category →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Kadiyam hub */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-leaf text-center mb-8 uppercase">
            Kadiyam — Andhra Pradesh's Nursery Hub
          </h2>
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Kadiyam, located in East Godavari District of Andhra Pradesh, has been the state's nursery hub
              for generations. Its fertile soil, ample water and warm climate make it ideal for growing
              everything from grafted fruit trees to ornamental plants and avenue saplings. Buyers travel
              from across the state to source quality plants here.
            </p>
            <p>
              Siva Lalitha Nursery carries forward this tradition with honest pricing, healthy stock and
              expert guidance. Whether you are a home gardener looking for your first rose plant or a
              resort manager planning a large landscape, our team on Veeravaram Road, Kadiyam is ready to help.
            </p>
            <p>
              Our completed projects — including the Rajamahendravaram Railway Bridge beautification during
              Pushkaralu 2016 and 500+ trees planted for the Araku Utsav festival — show the scale and
              reliability we bring to every order, big or small.
            </p>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="section-padding bg-clay">
        <div className="container-custom">
          <h2 className="font-display font-black text-3xl md:text-4xl text-leaf text-center mb-4 uppercase">
            Beyond Plants — Complete Nursery Services
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-10">
            We do more than sell plants. From garden setup to large-scale landscaping, we deliver end-to-end greenery solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Link to="/services/landscaping" className="bg-white border-2 border-leaf/20 hover:border-leaf/50 p-8 transition-colors">
              <div className="text-4xl mb-3" aria-hidden="true">🏡</div>
              <h3 className="font-bold text-xl text-leaf mb-2">Landscaping Services</h3>
              <p className="text-gray-600">Design, garden setup, lawn development and tree plantation for homes, farms and public spaces.</p>
              <span className="text-marigold font-semibold text-sm inline-block mt-3">Learn more →</span>
            </Link>
            <Link to="/wholesale-plants" className="bg-white border-2 border-leaf/20 hover:border-leaf/50 p-8 transition-colors">
              <div className="text-4xl mb-3" aria-hidden="true">📦</div>
              <h3 className="font-bold text-xl text-leaf mb-2">Wholesale Plant Supply</h3>
              <p className="text-gray-600">Bulk fruit, flowering and avenue plants for resorts, farms, projects and government works.</p>
              <span className="text-marigold font-semibold text-sm inline-block mt-3">Learn more →</span>
            </Link>
            <Link to="/services" className="bg-white border-2 border-leaf/20 hover:border-leaf/50 p-8 transition-colors">
              <div className="text-4xl mb-3" aria-hidden="true">🌿</div>
              <h3 className="font-bold text-xl text-leaf mb-2">All Services</h3>
              <p className="text-gray-600">Lawn grass supply, seasonal flowering plants, grafted fruit saplings and more.</p>
              <span className="text-marigold font-semibold text-sm inline-block mt-3">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FaqAccordion faqs={faqs} title="Plant Nursery in Kadiyam — FAQs" />
        </div>
      </section>

      <section className="section-padding bg-clay">
        <div className="container-custom">
          <CtaBanner
            title="Visit the Best Nursery in Kadiyam"
            text="Come see our collection at Veeravaram Road, Kadiyam — open daily 7 AM – 7 PM. Call +91 9502835577 for availability and bulk orders."
          />
        </div>
      </section>
    </>
  )
}

export default PlantNurseryKadiyam
