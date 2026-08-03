import { siteConfig, siteUrl } from './siteConfig'

const businessId = `${siteUrl}/#business`

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GardenCenter', 'HomeAndConstructionBusiness'],
    '@id': businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    url: siteUrl,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    founder: { '@type': 'Person', name: siteConfig.owner },
    address: { '@type': 'PostalAddress', ...siteConfig.address },
    geo: { '@type': 'GeoCoordinates', ...siteConfig.geo },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: siteConfig.openingHours.days,
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    areaServed: [
      { '@type': 'City', name: 'Kadiyam' },
      { '@type': 'City', name: 'Rajamahendravaram' },
      { '@type': 'State', name: 'Andhra Pradesh' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plants & Landscaping Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscaping design and installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garden setup for homes and farms' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wholesale plant supply for resorts and commercial projects' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lawn grass supply (Mexican, Pearl varieties)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seasonal flowering plants' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fruit tree saplings and grafted varieties' } },
      ],
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteUrl,
    logo: siteConfig.ogImage,
    image: siteConfig.ogImage,
    founder: { '@type': 'Person', name: siteConfig.owner },
    email: siteConfig.email,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.telephone,
      contactType: 'customer service',
      availableLanguage: ['English', 'Telugu'],
    },
    sameAs: [siteConfig.whatsapp],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/plants?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

export function productSchema({ name, image, description, category, slug, sku }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image,
    description,
    sku: sku || `SLN-${category}-${slug}`,
    brand: { '@type': 'Brand', name: siteConfig.name },
    category,
    url: `${siteUrl}/plants/${slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      url: `${siteUrl}/plants/${slug}`,
      seller: { '@type': 'Organization', name: siteConfig.name },
      areaServed: { '@type': 'City', name: 'Kadiyam' },
    },
  }
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function serviceSchema({ name, description, slug, provider }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteUrl}${slug}`,
    serviceType: name,
    provider: { '@type': 'LocalBusiness', '@id': businessId, name: siteConfig.name },
    areaServed: { '@type': 'City', name: 'Kadiyam' },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: siteConfig.telephone },
    },
  }
}

export function articleSchema({ title, description, publishedAt, updatedAt, image, url, author }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: author || siteConfig.owner },
    publisher: { '@type': 'Organization', name: siteConfig.name, logo: { '@type': 'ImageObject', url: siteConfig.ogImage } },
    inLanguage: 'en',
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusinessSchema(),
      organizationSchema(),
      websiteSchema(),
    ],
  }
}
