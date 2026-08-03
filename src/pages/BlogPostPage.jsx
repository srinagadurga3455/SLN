import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../Seo'
import CtaBanner from '../components/CtaBanner'
import FaqAccordion from '../components/FaqAccordion'
import { getBlogPostBySlug, blogPosts } from '../data/blogData'
import { websiteJsonLd, breadcrumbSchema, faqSchema, articleSchema } from '../structuredData'
import { siteUrl } from '../siteConfig'

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const path = `/blog/${post.slug}`
  const url = `${siteUrl}${path}`

  return (
    <>
      <Seo
        title={`${post.title} | Siva Lalitha Nursery Blog`}
        description={post.metaDescription}
        path={path}
        ogType="article"
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        keywords={post.keywords}
        jsonLd={[
          websiteJsonLd(),
          breadcrumbSchema([
            { name: 'Home', item: siteUrl },
            { name: 'Blog', item: `${siteUrl}/blog` },
            { name: post.title, item: url },
          ]),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            url,
            image: `https://sivalalithanursery.in${post.image}`,
          }),
          ...(post.faqs?.length ? [faqSchema(post.faqs)] : []),
        ]}
      />

      <article className="bg-white">
        <div className="bg-leaf text-white pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-custom px-6">
            <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-6">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-marigold">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/blog" className="hover:text-marigold">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/90" aria-current="page">Article</li>
              </ol>
            </nav>
            <p className="text-marigold font-bold uppercase text-sm mb-3">{post.category}</p>
            <h1 className="font-display font-black text-3xl md:text-5xl max-w-4xl leading-tight">{post.title}</h1>
            <p className="text-white/70 mt-4">
              Updated <time dateTime={post.updatedAt}>{new Date(post.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time> · Siva Lalitha Nursery, Kadiyam
            </p>
          </div>
        </div>

        <div className="container-custom px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose-none space-y-8">
              {post.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="font-display font-black text-2xl md:text-3xl text-leaf mb-3">{section.heading}</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12">
                <FaqAccordion faqs={post.faqs} />
              </div>
            )}

            <div className="mt-12 bg-clay border-l-4 border-marigold p-6">
              <p className="text-gray-700 text-lg">
                <strong className="text-leaf">Buy healthy plants from Kadiyam's nursery hub.</strong> Visit Siva
                Lalitha Nursery on Veeravaram Road, Kadiyam, East Godavari District, Andhra Pradesh, or call{' '}
                <a href="tel:+919502835577" className="text-marigold font-semibold">+91 9502835577</a> for plants and
                expert gardening advice.
              </p>
            </div>

            {/* More articles */}
            <div className="mt-14">
              <h2 className="font-display font-bold text-2xl text-leaf mb-6">More Articles</h2>
              <div className="space-y-3">
                {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4).map((other) => (
                  <Link
                    key={other.slug}
                    to={`/blog/${other.slug}`}
                    className="block bg-clay hover:bg-leaf hover:text-white p-4 border-l-4 border-marigold transition-colors"
                  >
                    <span className="font-semibold">{other.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="bg-clay">
        <div className="container-custom px-6 py-16">
          <CtaBanner
            title="Ready to plant your garden?"
            text="Visit Siva Lalitha Nursery in Kadiyam for healthy, climate-ready plants and honest advice. Open daily 7 AM – 7 PM."
          />
        </div>
      </div>
    </>
  )
}

export default BlogPostPage
