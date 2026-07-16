import React, { useState } from 'react'

const Gallery = () => {
  const [showAll, setShowAll] = useState(false)

  // Only real Araku Festival work - remove all fake/stock images
  const projects = [
    {
      src: '/images/gallery/araku-fest-1.jpg',
      alt: 'Araku Festival landscaping work - Tree plantation on roadside',
      category: 'Public Work',
      description: 'Tree plantation and landscaping work for Araku Utsav Festival - roadside beautification'
    },
    {
      src: '/images/gallery/araku-fest-2.jpg',
      alt: 'Araku Festival event - Team at festival venue',
      category: 'Public Work',
      description: 'Our team participating in Araku Festival landscaping initiative'
    },
    {
      src: '/images/gallery/araku-fest-3.jpg',
      alt: 'Araku Festival - Tree plantation ceremony',
      category: 'Public Work',
      description: 'Community tree plantation ceremony at Araku Utsav'
    },
    {
      src: '/images/gallery/araku-fest-4.jpg',
      alt: 'Araku Festival - Landscaping project',
      category: 'Public Work',
      description: 'Landscaping and green initiative work at Araku Festival'
    },
    {
      src: '/images/gallery/araku-fest-5.jpg',
      alt: 'Araku Festival - Team collaboration',
      category: 'Public Work',
      description: 'Our team working on beautification projects during Araku Utsav'
    },
    {
      src: '/images/gallery/araku-fest-6.jpg',
      alt: 'Araku Festival - Green initiative',
      category: 'Public Work',
      description: 'Environmental beautification work at Araku Valley'
    },
    {
      src: '/images/gallery/araku-fest-7.jpg',
      alt: 'Araku Festival - Plantation drive',
      category: 'Public Work',
      description: 'Mass tree plantation drive during Araku Utsav celebrations'
    },
    {
      src: '/images/gallery/araku-fest-8.jpg',
      alt: 'Araku Festival - Community engagement',
      category: 'Public Work',
      description: 'Engaging with local community for sustainable landscaping'
    },
    // Add more real project photos here as you get them
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="gallery" className="section-padding bg-clay">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-4xl md:text-5xl text-leaf mb-6 uppercase leaf-vein">
            Our Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-8">
            Completed landscaping projects across East Godavari
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-8">
              Gallery photos will be displayed here. Contact us to see our completed projects.
            </p>
            <a
              href="tel:+919502835577"
              className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 95028 35577
            </a>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative h-80 bg-white overflow-hidden border-2 border-leaf/20 hover:border-leaf/40 transition-all duration-300"
                >
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-leaf/10 text-leaf font-semibold">Image loading...</div>`
                    }}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf/95 via-leaf/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="bg-marigold text-white px-3 py-1 text-xs font-bold uppercase inline-block self-start mb-3">
                      {project.category}
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Category Badge (Always Visible) */}
                  <div className="absolute top-4 left-4 bg-white/95 text-leaf px-3 py-1 text-xs font-bold uppercase">
                    {project.category}
                  </div>
                </div>
              ))}
            </div>

            {/* See More Button */}
            {projects.length > 4 && !showAll && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(true)}
                  className="bg-leaf hover:bg-leaf-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
                >
                  See More Projects
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white border-2 border-leaf/20 p-12 max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-3xl text-leaf mb-4">
            Need Landscaping Services?
          </h3>
          <p className="text-gray-700 text-lg mb-8">
            From home gardens to large public projects, we handle all types of landscaping work across East Godavari.
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
              href="https://wa.me/919502835577?text=Hi%2C%20I%27m%20interested%20in%20landscaping%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-leaf hover:bg-leaf-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
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

export default Gallery
