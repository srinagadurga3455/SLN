import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import FaqAccordion from '../components/FaqAccordion'
import PlantCard from '../components/PlantCard'
import { getPlantBySlug, getRelatedPlants, categories } from '../data/plantsData'
import { productSchema, breadcrumbSchema, faqSchema, websiteJsonLd } from '../structuredData'
import { siteUrl } from '../siteConfig'

const PlantPage = () => {
  const { slug } = useParams()
  const plant = getPlantBySlug(slug)

  if (!plant) return <Navigate to="/plants" replace />

  const category = categories[plant.category]
  const categoryPath = `/plants/${category.slug}`
  const path = `/plants/${plant.slug}`
  const image = plant.image ? `https://sivalalithanursery.in${plant.image}` : 'https://sivalalithanursery.in/images/gallery/logo.jpeg'
  const relatedPlants = getRelatedPlants(plant, 3)
  const plantFaqs = [
    ...(plant.faqs || []),
    { q: `Where can I buy ${plant.name} in Kadiyam?`, a: `${plant.name} (${plant.teluguName}) is available at Siva Lalitha Nursery, Veeravaram Road, Kadiyam, East Godavari District, Andhra Pradesh. Call +91 9502835577 for availability, pricing and bulk orders.` },
  ]

  const careItems = [
    { label: 'Sunlight', value: plant.care.sunlight, icon: '☀️' },
    { label: 'Watering', value: plant.care.watering, icon: '💧' },
    { label: 'Soil', value: plant.care.soil, icon: '🌱' },
    { label: 'Growth', value: plant.care.growth, icon: '📏' },
  ]

  return (
    <>
      <Seo
        title={`${plant.name} (${plant.teluguName}) — Buy ${category.name} in Kadiyam`}
        description={`Buy ${plant.name} (${plant.teluguName}) plant in Kadiyam. ${plant.description} Sunlight, watering & care guide included. Siva Lalitha Nursery, Veeravaram Road, Kadiyam. Call +91 9502835577.`}
        path={path}
        ogImage={image}
        keywords={`${plant.name} plant, ${plant.name} in Kadiyam, buy ${plant.name} plant, ${category.name} Kadiyam`}
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: siteUrl },
            { name: 'Plants', item: `${siteUrl}/plants` },
            { name: category.name, item: `${siteUrl}${categoryPath}` },
            { name: plant.name, item: `${siteUrl}${path}` },
          ]),
          productSchema({
            name: `${plant.name} Plant`,
            image,
            description: plant.description,
            category: category.name,
            slug: plant.slug,
          }),
          ...(plantFaqs.length ? [faqSchema(plantFaqs)] : []),
        ]}
      />

      <PageHeader
        title={`${plant.name} (${plant.teluguName})`}
        intro={`${plant.description} Available for sale at Siva Lalitha Nursery, Veeravaram Road, Kadiyam, Andhra Pradesh.`}
        breadcrumb={[
          { name: 'Home', to: '/' },
          { name: 'Plants', to: '/plants' },
          { name: category.name, to: categoryPath },
          { name: plant.name },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-96 lg:h-[480px] bg-gray-100 border-2 border-leaf/20 overflow-hidden">
              {plant.image ? (
                <img
                  src={plant.image}
                  alt={`${plant.name} (${plant.teluguName}) ${category.name} for sale at Siva Lalitha Nursery Kadiyam`}
                  width="800"
                  height="600"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f3f4f6" width="800" height="600"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="24" dy="14" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + encodeURIComponent(plant.name) + '%3C/text%3E%3C/svg%3E'
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-leaf/5 p-8">
                  <p className="text-leaf font-semibold text-center text-xl">
                    Photo available at the nursery —<br />ask us for {plant.name}
                  </p>
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <span className="inline-block bg-marigold text-white px-4 py-2 font-semibold text-sm uppercase mb-4">
                {category.name}
              </span>
              <h2 className="font-display font-black text-3xl text-leaf mb-2">
                {plant.name} Plant
              </h2>
              <p className="text-soil font-medium mb-6">తెలుగు: {plant.teluguName}</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{plant.description}</p>

              <div className="space-y-6">
                <h3 className="font-display font-bold text-2xl text-leaf">Care Instructions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {careItems.map((item) => (
                    <div key={item.label} className="bg-clay border-l-4 border-marigold p-4">
                      <div className="flex items-center gap-2 font-semibold text-gray-800 mb-1">
                        <span aria-hidden="true">{item.icon}</span>
                        {item.label}
                      </div>
                      <p className="text-gray-600 text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                {plant.care.bloom && (
                  <p className="text-gray-700">
                    <strong>Bloom / Fruiting:</strong> {plant.care.bloom}
                  </p>
                )}
                {plant.care.tips && (
                  <p className="text-gray-700">
                    <strong>Grower's tip:</strong> {plant.care.tips}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="tel:+919502835577"
                  className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
                >
                  Call: 95028 35577
                </a>
                <a
                  href="https://wa.me/919502835577?text=Hi%2C%20I%27m%20interested%20in%20buying%20a%20plant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-leaf hover:bg-leaf-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related plants */}
      {relatedPlants.length > 0 && (
        <section className="section-padding bg-clay">
          <div className="container-custom">
            <h2 className="font-display font-black text-3xl text-leaf text-center mb-10 uppercase">
              Related Plants You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPlants.map((related, index) => (
                <PlantCard key={related.slug} plant={related} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {plantFaqs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <FaqAccordion faqs={plantFaqs} title={`${plant.name} Plant — FAQs`} />
          </div>
        </section>
      )}

      <section className="section-padding bg-clay">
        <div className="container-custom">
          <CtaBanner
            title={`Buy ${plant.name} in Kadiyam`}
            text={`Visit Siva Lalitha Nursery on Veeravaram Road, Kadiyam or call +91 9502835577 to check availability and pricing. Open daily 7 AM – 7 PM.`}
          />
        </div>
      </section>
    </>
  )
}

export default PlantPage
