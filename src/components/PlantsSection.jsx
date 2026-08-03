import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { plantsData, categories, getPlantsByCategory } from '../data/plantsData'
import PlantCard from './PlantCard'

const extraPhotos = [
  '/images/extraas/image.png',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.08.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.09.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.12.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.13 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.13.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.14 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.14.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.15.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.16 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.16.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.17 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.17.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.18.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.19 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.19.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.20.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.21 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.21.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.23 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.23 (2).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.23.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.24 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.24 (2).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.24.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.25.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.17.49.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.22.39.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.22.40.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 19.24.56.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.04.23.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.04.24 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.04.24.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.04.25 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.04.25 (2).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.04.25.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.06.27 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.06.27.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.06.28 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.06.28.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.06.29 (1).jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.06.29.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.07.00.jpeg',
  '/images/extraas/WhatsApp Image 2026-07-24 at 22.07.01.jpeg',
  '/images/rem/WhatsApp Image 2026-07-24 at 22.10.52 (1).jpeg',
  '/images/rem/WhatsApp Image 2026-07-24 at 22.10.52.jpeg',
  '/images/rem/WhatsApp Image 2026-07-24 at 22.10.53.jpeg',
  '/images/rem/WhatsApp Image 2026-07-24 at 22.10.54.jpeg'
]

const PlantsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filteredPlants = activeCategory === 'all'
    ? plantsData
    : getPlantsByCategory(activeCategory)

  const INITIAL_DISPLAY_COUNT = 10
  const displayedPlants = showAll ? filteredPlants : filteredPlants.slice(0, INITIAL_DISPLAY_COUNT)

  const categoryEntries = Object.entries(categories).filter(
    ([key]) => getPlantsByCategory(key).length > 0
  )

  return (
    <section id="plants" className="section-padding bg-clay">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl text-leaf mb-6 uppercase leaf-vein">
            Our Plants
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-8">
            Featured plants with photos. We have many more varieties available at the nursery - visit us to see our complete collection!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 font-semibold transition-colors ${
              activeCategory === 'all'
                ? 'bg-leaf text-white'
                : 'bg-white text-gray-700 hover:bg-leaf/10 border border-gray-200'
            }`}
          >
            All ({plantsData.length})
          </button>
          {categoryEntries.map(([key, { name }]) => {
            const count = getPlantsByCategory(key).length
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-2.5 font-semibold transition-colors ${
                  activeCategory === key
                    ? 'bg-leaf text-white'
                    : 'bg-white text-gray-700 hover:bg-leaf/10 border border-gray-200'
                }`}
              >
                {name} ({count})
              </button>
            )
          })}
        </div>

        {/* Internal links to SEO category pages */}
        <div className="flex flex-wrap gap-3 justify-center mb-12" aria-label="Plant categories">
          {categoryEntries.map(([key, { name, slug }]) => (
            <Link
              key={key}
              to={`/plants/${slug}`}
              className="bg-leaf/5 hover:bg-leaf hover:text-white text-leaf border border-leaf/30 px-4 py-2 text-sm font-semibold transition-colors"
            >
              {name}
            </Link>
          ))}
          <Link
            to="/plants"
            className="bg-marigold hover:bg-marigold-dark text-white px-4 py-2 text-sm font-semibold transition-colors"
          >
            View All Plants →
          </Link>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedPlants.map((plant, index) => (
            <PlantCard key={plant.slug} plant={plant} index={index} />
          ))}
          {showAll && extraPhotos.map((src, index) => (
            <div key={index} className="relative h-72 bg-gray-100 overflow-hidden border border-leaf/10 group">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* See More Button */}
        {filteredPlants.length > INITIAL_DISPLAY_COUNT || extraPhotos.length > 0 && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-leaf hover:bg-leaf-dark text-white px-10 py-4 font-bold transition-colors inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  See More ({filteredPlants.length - Math.min(filteredPlants.length, INITIAL_DISPLAY_COUNT) + extraPhotos.length} more)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="bg-leaf text-white p-12 text-center max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-3xl mb-4">
            Need something specific?
          </h3>
          <p className="text-white/90 text-lg mb-8">
            We have many more varieties at the nursery. Call for availability and bulk orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919502835577"
              className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 95028 35577
            </a>
            <a
              href="https://wa.me/919502835577?text=Hi%2C%20I%27m%20looking%20for%20plants"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-leaf px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlantsSection
