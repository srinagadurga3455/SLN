import React from 'react'
import { Helmet } from 'react-helmet-async'
import { siteConfig, siteUrl } from './siteConfig'

/**
 * Seo — renders all search-engine meta tags for a given route.
 *
 * Props:
 *  - title        : page <title> (appended with brand if `titleTemplate`)
 *  - description  : meta description
 *  - path         : route path used to build canonical + OG/Twitter URLs
 *  - ogImage      : absolute image URL (defaults to brand logo)
 *  - ogType       : og:type, default 'website', use 'article' for blog posts
 *  - publishedAt  : ISO date for articles (article:published_time)
 *  - updatedAt    : ISO date for articles
 *  - jsonLd       : object or array of JSON-LD schemas injected as <script>
 *  - noindex      : render robots noindex,nofollow (404s, filters)
 *  - keywords     : optional meta keywords string
 */
const Seo = ({
  title,
  description,
  path = '/',
  ogImage,
  ogType = 'website',
  publishedAt,
  updatedAt,
  jsonLd,
  noindex = false,
  keywords,
}) => {
  const canonical = `${siteUrl}${path}`
  const image = ogImage || siteConfig.ogImage
  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow'
  const jsonLdNodes = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_IN" />
      {ogType === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {ogType === 'article' && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD structured data */}
      {jsonLdNodes.map((node, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  )
}

export default Seo
