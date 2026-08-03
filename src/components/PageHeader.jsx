import React from 'react'
import { Link } from 'react-router-dom'

/**
 * PageHeader — consistent SEO-friendly hero for interior pages
 * with breadcrumb trail, H1 and intro paragraph.
 */
const PageHeader = ({ breadcrumb, title, intro }) => {
  return (
    <section className="bg-leaf text-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container-custom px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumb.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-marigold transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white/90" aria-current="page">
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="font-display font-black text-4xl md:text-5xl uppercase max-w-4xl leading-tight">
          {title}
        </h1>
        {intro && <p className="text-white/90 text-lg mt-6 max-w-3xl leading-relaxed">{intro}</p>}
      </div>
    </section>
  )
}

export default PageHeader
