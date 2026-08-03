import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import FaqAccordion from '../components/FaqAccordion'
import PlantCard from '../components/PlantCard'
import { categories, getPlantsByCategory } from '../data/plantsData'
import { categoryContent } from '../data/seoContent'
import { breadcrumbSchema, faqSchema, websiteJsonLd } from '../structuredData'
import { siteUrl } from '../siteConfig'

const CategoryPage = () => {
  const { slug } = useParams()

  const categoryEntry = Object.entries(categories).find(([, cat]) => cat.slug === slug)

  if (!categoryEntry) return <Navigate to="/plants" replace />

  const [key, category] = categoryEntry
  const content = categoryContent[key] || {
    title: `${category.name} in Kadiyam | Siva Lalitha Nursery`,
    metaDescription: `Buy ${category.name.toLowerCase()} in Kadiyam at Siva Lalitha Nursery. Call +91 9502835577 for availability.`,
    intro: `${category.name} available at Siva Lalitha Nursery, Veeravaram Road, Kadiyam, East Godavari District, Andhra Pradesh.`,
    faqs: [],
  }
  const plants = getPlantsByCategory(key)
  const path = `/plants/${slug}`

  return (
    <>
      <Seo
        title={content.title}
        description={content.metaDescription}
        path={path}
        keywords={content.keywords || `${category.name} in Kadiyam, buy ${category.name.toLowerCase()} Andhra Pradesh`}
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: siteUrl },
            { name: 'Plants', item: `${siteUrl}/plants` },
            { name: category.name, item: `${siteUrl}${path}` },
          ]),
          ...(content.faqs.length ? [faqSchema(content.faqs)] : []),
        ]}
      />

      <PageHeader
        title={`${category.name} in Kadiyam`}
        intro={content.intro}
        breadcrumb={[
          { name: 'Home', to: '/' },
          { name: 'Plants', to: '/plants' },
          { name: category.name },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {content.highlights && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {content.highlights.map((h, i) => (
                <div key={i} className="bg-clay border-l-4 border-marigold p-4 text-gray-700 font-medium">
                  {h}
                </div>
              ))}
            </div>
          )}

          <h2 className="font-display font-black text-3xl text-leaf text-center mb-10 uppercase">
            {category.name} Available in This Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant, index) => (
              <PlantCard key={plant.slug} plant={plant} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't see the exact variety you want? We carry many more {category.name.toLowerCase()} at our
              Kadiyam nursery. <Link to="/contact" className="text-leaf font-semibold underline">Contact us</Link> for availability.
            </p>
          </div>
        </div>
      </section>

      {content.faqs.length > 0 && (
        <section className="section-padding bg-clay">
          <div className="container-custom">
            <FaqAccordion faqs={content.faqs} title={`${category.name} — FAQs`} />
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-custom">
          <CtaBanner
            title={`Buy ${category.name} in Kadiyam`}
            text={`Visit Siva Lalitha Nursery on Veeravaram Road, Kadiyam or call +91 9502835577 for availability, bulk orders and expert advice. Open daily 7 AM – 7 PM.`}
          />
        </div>
      </section>
    </>
  )
}

export default CategoryPage
