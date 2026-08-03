import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../Seo'
import { siteConfig } from '../siteConfig'

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="Page Not Found | Siva Lalitha Nursery, Kadiyam"
        description="The page you are looking for was not found. Visit Siva Lalitha Nursery, Kadiyam for plants and landscaping services. Call +91 9502835577."
        path="/404"
        noindex
      />
      <section className="min-h-screen bg-leaf text-white flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-xl">
          <p className="text-marigold font-black text-8xl mb-4">404</p>
          <h1 className="font-display font-black text-3xl md:text-4xl mb-4">Page Not Found</h1>
          <p className="text-white/80 text-lg mb-8">
            The page you are looking for does not exist or may have moved. Browse our plants or
            contact {siteConfig.name} in Kadiyam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/plants"
              className="bg-white hover:bg-gray-100 text-leaf px-8 py-4 font-bold transition-colors"
            >
              Browse Plants
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
