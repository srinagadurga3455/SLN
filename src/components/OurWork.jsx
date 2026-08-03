import React, { useState } from 'react'

const OurWork = () => {
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 'rajamahendravaram-pushkaralu',
      title: 'Rajamahendravaram Railway Bridge - Pushkaralu 2016',
      subtitle: 'Tree Plantation & Cultural Bridge Beautification',
      description: 'A prestigious project undertaken during the sacred Pushkaralu festival in 2016, where Siva Lalitha Nursery transformed the railway bridge area in Rajamahendravaram into a stunning showcase of greenery and cultural heritage.',
      fullDescription: 'This landmark project was inaugurated by the Chief Minister of Andhra Pradesh, Sri Chandrababu Naidu. Our team planted trees under the railway bridge and decorated the entire structure with beautiful photographs depicting classical Indian dances, creating a unique blend of nature and culture that enhanced the spiritual atmosphere of Pushkaralu.',
      category: 'Government Project',
      stats: [
        { value: '2016', label: 'Pushkaralu Festival', sublabel: 'Inaugurated by CM Chandrababu Naidu' },
        { value: '100+', label: 'Trees Planted', sublabel: 'Under railway bridge area' },
        { value: 'Bridge', label: 'Cultural Decoration', sublabel: 'Classical dance photographs' }
      ],
      mainPhotos: [
        {
          src: '/images/rjy/FB_IMG_1564844670067.webp',
          alt: 'Rajamahendravaram Railway Bridge - Tree plantation and cultural decoration during Pushkaralu 2016',
          caption: 'Bridge Beautification with Classical Dance Art',
          description: 'The railway bridge decorated with vibrant photographs of classical Indian dances, combining cultural heritage with environmental beautification for the sacred Pushkaralu festival.'
        },
        {
          src: '/images/rjy/FB_IMG_1564844676199.webp',
          alt: 'Rajamahendravaram Pushkaralu - Tree plantation under railway bridge',
          caption: 'Tree Plantation Initiative',
          description: 'Extensive tree plantation work under the railway bridge, creating green spaces that would serve pilgrims and residents for years to come.'
        },
        {
          src: '/images/rjy/image.webp',
          alt: 'Rajamahendravaram Railway Bridge Project - Cultural and environmental transformation',
          caption: 'Complete Bridge Transformation',
          description: 'The full scope of the project showcasing the harmonious integration of nature and culture under the railway bridge in Rajamahendravaram.'
        }
      ],
      contributions: [
        'Selected and planted climate-suitable tree species for sustainable urban greening under the railway bridge',
        'Coordinated with government authorities and cultural departments for the bridge decoration project',
        'Completed the entire beautification work before the inauguration by CM Chandrababu Naidu',
        'Created a lasting legacy that blends environmental conservation with cultural celebration during the sacred Pushkaralu festival',
        'Contributed to making Rajamahendravaram more beautiful and welcoming for thousands of pilgrims visiting during Pushkaralu'
      ]
    },
    {
      id: 'araku-utsav',
      title: 'Araku Utsav Festival',
      subtitle: 'Landscaping and Beautification Project',
      description: 'Siva Lalitha Nursery was proud to be part of the Araku Utsav Festival, a major cultural celebration in the Araku Valley region. Our team undertook comprehensive landscaping and tree plantation work to beautify the festival venue and surrounding areas.',
      fullDescription: 'This public works project involved roadside tree plantation, garden setup, and green space development to enhance the natural beauty of the festival grounds and create a welcoming environment for thousands of visitors from across Andhra Pradesh.',
      category: 'Public Works',
      stats: [
        { value: '500+', label: 'Trees Planted', sublabel: 'Native and flowering species' },
        { value: '2 km', label: 'Roadside Coverage', sublabel: 'Along main festival routes' },
        { value: '10+', label: 'Team Members', sublabel: 'Skilled landscaping crew' }
      ],
      mainPhotos: [
        {
          src: '/images/gallery/araku-fest-3.webp',
          alt: 'Araku Festival - Tree plantation ceremony',
          caption: 'Community Tree Plantation',
          description: 'Engaging with the local community to create sustainable green spaces that will benefit the region for generations.'
        },
        {
          src: '/images/gallery/araku-fest-5.webp',
          alt: 'Araku Festival - Team collaboration',
          caption: 'Team Beautification Work',
          description: 'Our team working together to beautify the festival venue and surrounding areas.'
        },
        {
          src: '/images/gallery/araku-fest-6.webp',
          alt: 'Araku Festival - Landscaping project view',
          caption: 'Landscaping Work',
          description: 'Beautiful landscaping and greenery development as part of the Araku Utsav Festival.'
        }
      ],
      additionalPhotos: [
        { src: '/images/gallery/araku-fest-1.webp', alt: 'Araku Festival - Roadside tree plantation work', caption: 'Roadside Plantation' },
        { src: '/images/gallery/araku-fest-2.webp', alt: 'Araku Festival - Team at event venue', caption: 'Festival Grounds' },
        { src: '/images/gallery/araku-fest-4.webp', alt: 'Araku Festival - Green initiative work', caption: 'Green Initiative Work' },
        { src: '/images/gallery/image.webp', alt: 'Araku Festival - Project overview', caption: 'Project Image' }
      ],
      contributions: [
        'Supplied quality saplings and plants suitable for the Araku Valley climate and terrain',
        'Provided expert planting services ensuring high survival rate of saplings',
        'Coordinated with festival organizers for timely completion before event opening',
        'Contributed to environmental beautification and sustainable green development'
      ]
    },
    {
      id: 'hyd-shankarapalli',
      title: 'Hyderabad Shankarapalli FarmHouse',
      subtitle: 'Farm House Landscaping & Greenery Development',
      description: 'Siva Lalitha Nursery undertook comprehensive landscaping and greenery development at a private farm house in Shankarapalli, Hyderabad. The project involved tree plantation, garden setup, and green space development to create a serene and beautiful environment.',
      fullDescription: 'This farm house project in Shankarapalli, Hyderabad, showcased our expertise in residential landscaping. Our team planted a variety of trees, created lush green spaces, and developed the overall landscape to transform the property into a peaceful retreat. The work included strategic plant placement, lawn development, and decorative garden elements.',
      category: 'Private Project',
      stats: [
        { value: '2015', label: 'Year Completed', sublabel: 'Farm House Landscaping Project' },
        { value: '50+', label: 'Trees Planted', sublabel: 'Native and ornamental species' },
        { value: '1 acre', label: 'Landscaped Area', sublabel: 'Farm house premises' }
      ],
      mainPhotos: [
        {
          src: '/images/hyd-shankarapalli/20150220_090414.webp',
          alt: 'Shankarapalli Farm House - Landscaping and garden development',
          caption: 'Garden Area Development',
          description: 'Landscaping work at the Shankarapalli farm house featuring garden development with decorative plants and ornamental trees.'
        },
        {
          src: '/images/hyd-shankarapalli/20150221_120441.webp',
          alt: 'Shankarapalli Farm House - Tree plantation work',
          caption: 'Tree Plantation Drive',
          description: 'Strategic tree plantation work to create natural shade and enhance the beauty of the farm house property.'
        },
        {
          src: '/images/hyd-shankarapalli/20150223_104808.webp',
          alt: 'Shankarapalli Farm House - Green space development',
          caption: 'Green Space Creation',
          description: 'Development of lush green spaces and garden areas to transform the farm house into a serene environment.'
        }
      ],
      additionalPhotos: [
        { src: '/images/hyd-shankarapalli/20150228_082502.webp', alt: 'Shankarapalli Farm House - Landscape view 1', caption: 'Landscape Development Work' },
        { src: '/images/hyd-shankarapalli/20150228_082513.webp', alt: 'Shankarapalli Farm House - Landscape view 2', caption: 'Farm House Greenery' },
        { src: '/images/hyd-shankarapalli/20150228_095908.webp', alt: 'Shankarapalli Farm House - Landscape view 3', caption: 'Garden Setup' },
        { src: '/images/hyd-shankarapalli/20150228_100045.webp', alt: 'Shankarapalli Farm House - Landscape view 4', caption: 'Plantation Work' },
        { src: '/images/hyd-shankarapalli/20150228_100103.webp', alt: 'Shankarapalli Farm House - Landscape view 5', caption: 'Tree Plantation Area' },
        { src: '/images/hyd-shankarapalli/20150228_100109.webp', alt: 'Shankarapalli Farm House - Landscape view 6', caption: 'Ornamental Garden' },
        { src: '/images/hyd-shankarapalli/20150312_144037.webp', alt: 'Shankarapalli Farm House - Landscape view 7', caption: 'Complete Landscape View' },
        { src: '/images/hyd-shankarapalli/20150313_173618.webp', alt: 'Shankarapalli Farm House - Final landscaping', caption: 'Final Landscaping Outcome' }
      ],
      contributions: [
        'Provided complete landscaping solutions for a private farm house property in Shankarapalli, Hyderabad',
        'Planted a variety of native and ornamental tree species suitable for the local climate',
        'Developed garden areas with decorative plants and aesthetic arrangements',
        'Created sustainable green spaces that enhance the natural beauty of the property',
        'Delivered the project on time with high-quality standards in residential landscaping'
      ]
    },
    {
      id: 'araku-farmhouse',
      title: 'Araku Farm House',
      subtitle: 'Farm House Landscaping in Araku Valley',
      description: 'Siva Lalitha Nursery undertook landscaping and greenery development at a farm house in the beautiful Araku Valley region. The project focused on creating a harmonious blend of natural beauty with planned garden spaces and tree plantation.',
      fullDescription: 'This farm house project in Araku Valley showcased our ability to work with the unique terrain and climate of the region. Our team planted native and flowering trees, developed garden areas, and created green spaces that complement the natural landscape. The project enhanced the property\'s aesthetic appeal while maintaining ecological balance.',
      category: 'Private Project',
      stats: [
        { value: '50+', label: 'Trees Planted', sublabel: 'Native Araku Valley species' },
        { value: '2 acre', label: 'Landscaped Area', sublabel: 'Farm house premises' },
        { value: '5+', label: 'Team Members', sublabel: 'Dedicated landscaping crew' }
      ],
      mainPhotos: [
        {
          src: '/images/Araku/20191203_121844.webp',
          alt: 'Araku Farm House - Garden area',
          caption: 'Garden Area Development',
          description: 'Beautiful garden development with well-maintained plants and landscaping at the Araku farm house.'
        },
        {
          src: '/images/Araku/20190101_124850.webp',
          alt: 'Araku Farm House - Landscape view',
          caption: 'Farm House Landscape',
          description: 'Scenic landscape view of the Araku farm house showcasing the complete greenery transformation.'
        },
        {
          src: '/images/Araku/20190101_125024.webp',
          alt: 'Araku Farm House - Ornamental garden',
          caption: 'Ornamental Garden',
          description: 'Ornamental garden area with decorative plants enhancing the beauty of the farm house.'
        }
      ],
      additionalPhotos: [
        { src: '/images/Araku/20190101_124825.webp', alt: 'Araku Farm House - Landscaping and garden development', caption: 'Initial Garden Work' },
        { src: '/images/Araku/20190101_124829.webp', alt: 'Araku Farm House - Tree plantation work', caption: 'Tree Plantation' },
        { src: '/images/Araku/20190101_124848.webp', alt: 'Araku Farm House - Green space development', caption: 'Green Space Creation' },
        { src: '/images/Araku/20190101_125009.webp', alt: 'Araku Farm House - Garden setup', caption: 'Garden Setup' },
        { src: '/images/Araku/20190101_125011.webp', alt: 'Araku Farm House - Plantation area', caption: 'Plantation Work' },
        { src: '/images/Araku/20190101_125019.webp', alt: 'Araku Farm House - Landscape view', caption: 'Complete Landscape View' },
        { src: '/images/Araku/20190101_125021.webp', alt: 'Araku Farm House - Tree plantation', caption: 'Tree Plantation Area' },
        { src: '/images/Araku/20190101_120328.webp', alt: 'Araku Farm House - Scenic view', caption: 'Scenic Landscape' },
        { src: '/images/Araku/20190101_153307.webp', alt: 'Araku Farm House - Final landscaping', caption: 'Final Landscaping Outcome' },
        { src: '/images/Araku/20190101_153421.webp', alt: 'Araku Farm House - Landscape detail', caption: 'Landscape Detail' },
        { src: '/images/Araku/20191203_121848.webp', alt: 'Araku Farm House - Garden detail', caption: 'Garden Detail' },
        { src: '/images/Araku/20201117_094514.webp', alt: 'Araku Farm House - Later view', caption: 'Matured Landscape' },
        { src: '/images/Araku/20201118_081525.webp', alt: 'Araku Farm House - Later garden view', caption: 'Matured Garden Area' },
        { src: '/images/Araku/20201118_081541.webp', alt: 'Araku Farm House - Later landscape', caption: 'Well-Established Landscape' }
      ],
      contributions: [
        'Provided complete landscaping solutions for a farm house in the scenic Araku Valley region',
        'Planted native and flowering tree species well-suited to the Araku climate and terrain',
        'Developed garden areas that harmoniously blend with the natural surroundings',
        'Created sustainable green spaces enhancing both beauty and ecological value',
        'Demonstrated expertise in hillside and valley terrain landscaping'
      ]
    },
    {
      id: 'nirmal-project',
      title: 'Nirmal Project',
      subtitle: 'Landscaping & Greenery Development in Nirmal',
      description: 'Siva Lalitha Nursery undertook landscaping and greenery development work in Nirmal region. The project involved tree plantation, garden development, and creation of green spaces to enhance the local environment.',
      fullDescription: 'This project in Nirmal showcased our commitment to environmental beautification and sustainable green development. Our team worked on tree plantation drives, garden setup, and landscape development to create lasting green spaces for the community.',
      category: 'Regional Project',
      stats: [
        { value: '50+', label: 'Trees Planted', sublabel: 'Various native species' },
        { value: '5+', label: 'Team Members', sublabel: 'Skilled landscaping crew' },
        { value: '2015', label: 'Year Completed', sublabel: 'Project completion' }
      ],
      mainPhotos: [
        {
          src: '/images/nirmal/FB_IMG_1564843990795.webp',
          alt: 'Nirmal Project - Landscaping work',
          caption: 'Landscaping Work',
          description: 'Landscaping and greenery development work undertaken in the Nirmal region.'
        },
        {
          src: '/images/nirmal/FB_IMG_1564844004452.webp',
          alt: 'Nirmal Project - Tree plantation',
          caption: 'Tree Plantation',
          description: 'Tree plantation drive as part of the greenery development initiative in Nirmal.'
        },
        {
          src: '/images/nirmal/FB_IMG_1564844016416.webp',
          alt: 'Nirmal Project - Garden development',
          caption: 'Garden Development',
          description: 'Garden area development creating aesthetic green spaces in the Nirmal project.'
        }
      ],
      additionalPhotos: [
        { src: '/images/nirmal/FB_IMG_1564844023566.webp', alt: 'Nirmal Project - Additional view', caption: 'Additional Landscape View' },
        { src: '/images/nirmal/FB_IMG_1564844055964.webp', alt: 'Nirmal Project - Final view', caption: 'Final Project View' }
      ],
      contributions: [
        'Provided landscaping and greenery development services in the Nirmal region',
        'Planted a variety of native tree species suitable for the local climate',
        'Developed garden areas with aesthetic plant arrangements',
        'Contributed to environmental beautification and green development'
      ]
    }
  ]

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="our-work" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl text-leaf mb-6 uppercase leaf-vein">
            Our Work
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            Completed landscaping projects across Andhra Pradesh & Telangana
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project) => (
            <div key={project.id} className="max-w-6xl mx-auto">
              {/* Project Header */}
              <div className="mb-12">
                <div className="inline-block bg-marigold text-white px-4 py-2 mb-4 font-semibold text-sm uppercase">
                  {project.category}
                </div>
                <h3 className="font-display font-black text-3xl md:text-4xl text-leaf mb-4 uppercase">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {project.subtitle}
                </p>
                <div className="bg-clay border-l-4 border-marigold p-6">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              </div>

              {/* Main 3 Photos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {project.mainPhotos.map((photo, index) => (
                  <div key={index} className="space-y-4">
                    <div className="relative h-80 bg-leaf/10 border-2 border-leaf/20 overflow-hidden group">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-leaf font-semibold text-center p-8">${photo.caption}</div>`
                        }}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-leaf/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white text-sm">{photo.description}</p>
                      </div>
                    </div>
                    <div className="bg-clay p-4">
                      <h4 className="font-bold text-lg text-leaf">{photo.caption}</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* See More About Project Button */}
              <div className="mb-8">
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span>See More About Project</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${expandedProject === project.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Expanded Content */}
              {expandedProject === project.id && (
                <div className="space-y-12 animate-fadeIn">
                  {/* Additional Photos */}
                  {project.additionalPhotos && project.additionalPhotos.length > 0 && (
                    <div>
                      <h4 className="font-display font-bold text-2xl text-leaf mb-6">More Photos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.additionalPhotos.map((photo, index) => (
                          <div key={index} className="relative h-72 bg-leaf/10 border-2 border-leaf/20 overflow-hidden group">
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-leaf/95 to-transparent p-4">
                              <p className="text-white text-sm font-semibold">{photo.caption}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Stats */}
                  {project.stats && (
                    <div className="grid md:grid-cols-3 gap-6">
                      {project.stats.map((stat, index) => (
                        <div key={index} className="text-center p-8 bg-leaf/5 border-2 border-leaf/20">
                          <div className="text-4xl font-bold text-marigold mb-2">{stat.value}</div>
                          <div className="text-gray-700 font-semibold">{stat.label}</div>
                          <div className="text-sm text-gray-600 mt-2">{stat.sublabel}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Our Contribution */}
                  {project.contributions && (
                    <div className="bg-leaf text-white p-12">
                      <h4 className="font-display font-bold text-3xl mb-6 text-center">
                        Our Contribution to Community
                      </h4>
                      <div className="space-y-4 max-w-3xl mx-auto text-lg">
                        {project.contributions.map((contribution, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <svg className="w-6 h-6 text-marigold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-white/90">{contribution}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-clay border-2 border-leaf/20 p-12 max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-3xl text-leaf mb-4">
            Need Large-Scale Landscaping?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            We handle public works, commercial projects, farm developments, and community landscaping 
            initiatives across Andhra Pradesh & Telangana.
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
              href="https://wa.me/919502835577?text=Hi%2C%20I%27m%20interested%20in%20large-scale%20landscaping%20projects"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-leaf hover:bg-leaf-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWork
