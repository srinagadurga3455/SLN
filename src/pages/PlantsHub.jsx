import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import PlantCard from '../components/PlantCard'
import { plantsData, categoriesWithPlants } from '../data/plantsData'
import { breadcrumbSchema, websiteJsonLd } from '../structuredData'

const PlantsHub = () => {
  return (
    <>
      <Seo
        title="Plants for Sale in Kadiyam | Buy Plants Online from Siva Lalitha Nursery"
        description="Buy plants in Kadiyam — fruit plants, flower plants, indoor plants, outdoor plants, ornamental, avenue, medicinal and tree plants. 100+ varieties at Siva Lalitha Nursery. Call +91 9502835577."
        path="/plants"
        keywords="buy plants Kadiyam, plants for sale Andhra Pradesh, nursery plants Kadiyam, fruit plants, flower plants, indoor plants"
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'Plants', item: 'https://sivalalithanursery.in/plants' },
          ]),
        ]}
      />

      <PageHeader
        title="Our Plants — Available at Siva Lalitha Nursery, Kadiyam"
        intro="Browse our featured plant collection. We stock 100+ varieties of fruit, flowering, ornamental, indoor, outdoor, medicinal, avenue and tree plants — all raised in Kadiyam and ready to thrive in East Godavari's climate."
        breadcrumb={[
          { name: 'Home', to: '/' },
          { name: 'Plants' },
        ]}
      />

      {/* Categories */}
      <section className="section-padding bg-clay">
        <div className="container-custom">
          <h2 className="font-display font-black text-3xl md:text-4xl text-leaf text-center mb-10 uppercase">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoriesWithPlants.map((cat) => (
              <Link
                key={cat.key}
                to={`/plants/${cat.slug}`}
                className="bg-white border-2 border-leaf/20 hover:border-leaf/50 hover:shadow-lg p-6 text-center transition-all group"
              >
                <div className="text-4xl mb-3" aria-hidden="true">{cat.icon}</div>
                <h3 className="font-bold text-lg text-leaf group-hover:text-marigold transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{cat.plants.length} varieties</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All plants */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-display font-black text-3xl md:text-4xl text-leaf text-center mb-10 uppercase">
            All Featured Plants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plantsData.map((plant, index) => (
              <PlantCard key={plant.slug} plant={plant} index={index} />
            ))}
          </div>
          <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
            Featured varieties are shown above. We have many more plants available at the nursery —
            <Link to="/contact" className="text-leaf font-semibold underline"> contact us</Link> for availability of specific plants and bulk orders.
          </p>
        </div>
      </section>

      <section className="section-padding bg-clay">
        <div className="container-custom">
          <CtaBanner
            title="Looking for a specific plant?"
            text="We have many more varieties at our Kadiyam nursery than listed online. Call +91 9502835577 for availability and wholesale pricing."
          />
        </div>
      </section>
    </>
  )
}

export default PlantsHub
