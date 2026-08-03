import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../Seo'
import PageHeader from '../components/PageHeader'
import { blogPosts } from '../data/blogData'
import { websiteJsonLd, breadcrumbSchema } from '../structuredData'

const BlogIndex = () => {
  return (
    <>
      <Seo
        title="Gardening & Nursery Blog | Tips by Siva Lalitha Nursery Kadiyam"
        description="Gardening tips, best plants for home gardens, flowering plants, fruit plants and landscaping ideas from Siva Lalitha Nursery, Kadiyam. Read our latest articles."
        path="/blog"
        keywords="gardening blog, plant care tips, best plants for home garden, landscaping ideas"
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: 'https://sivalalithanursery.in/' },
            { name: 'Blog', item: 'https://sivalalithanursery.in/blog' },
          ]),
        ]}
      />

      <PageHeader
        title="Gardening & Plant Care Blog"
        intro="Practical advice on plants, gardening and landscaping from the team at Siva Lalitha Nursery, Kadiyam — written for gardeners in Andhra Pradesh."
        breadcrumb={[{ name: 'Home', to: '/' }, { name: 'Blog' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-clay border-2 border-leaf/20 hover:border-leaf/50 hover:shadow-lg transition-all group overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    width="800"
                    height="450"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="bg-marigold text-white px-3 py-1 font-bold uppercase">{post.category}</span>
                    <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                  </div>
                  <h2 className="font-display font-bold text-xl text-leaf mb-2 group-hover:text-marigold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogIndex
