import React from 'react'

const ArakuProject = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom" id="araku-project">
        {/* Project Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-marigold text-white px-4 py-2 mb-6 font-semibold text-sm uppercase">
            Featured Project
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-leaf mb-6 uppercase leaf-vein">
            Araku Utsav Festival
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            Landscaping and Beautification Project
          </p>
        </div>

        {/* Project Details */}
        <div className="max-w-5xl mx-auto">
          {/* Main Description */}
          <div className="bg-clay border-l-4 border-marigold p-8 mb-12">
            <h3 className="font-display font-bold text-2xl text-leaf mb-4">
              Project Overview
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Siva Lalitha Nursery was proud to be part of the <span className="font-semibold text-leaf">Araku Utsav Festival</span>, 
              a major cultural celebration in the Araku Valley region. Our team undertook comprehensive landscaping and 
              tree plantation work to beautify the festival venue and surrounding areas.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This public works project involved roadside tree plantation, garden setup, and green space development 
              to enhance the natural beauty of the festival grounds and create a welcoming environment for thousands 
              of visitors from across Andhra Pradesh.
            </p>
          </div>

          {/* Project Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="space-y-4">
              <div className="relative h-96 bg-leaf/10 border-2 border-leaf/20 overflow-hidden">
                <img
                  src="/images/gallery/araku-fest-1.jpg"
                  alt="Araku Festival - Roadside tree plantation work"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-leaf font-semibold text-center p-8">Roadside Tree Plantation Work<br/><span class="text-sm text-gray-600 mt-2 block">Image: Team planting saplings along festival route</span></div>`
                  }}
                />
              </div>
              <div className="bg-clay p-6">
                <h4 className="font-bold text-lg text-leaf mb-2">Roadside Plantation</h4>
                <p className="text-gray-700">
                  Our team planted native tree saplings along the main approach roads to the festival venue, 
                  creating green corridors that will provide shade and beauty for years to come.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-96 bg-leaf/10 border-2 border-leaf/20 overflow-hidden">
                <img
                  src="/images/gallery/araku-fest-2.jpg"
                  alt="Araku Festival - Team at event venue"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-leaf font-semibold text-center p-8">Festival Venue Landscaping<br/><span class="text-sm text-gray-600 mt-2 block">Image: Team with traditional performers at Araku Utsav</span></div>`
                  }}
                />
              </div>
              <div className="bg-clay p-6">
                <h4 className="font-bold text-lg text-leaf mb-2">Festival Grounds</h4>
                <p className="text-gray-700">
                  Landscaping work at the main festival venue included planting arrangements, 
                  decorative plants, and green space setup to enhance the cultural ambiance.
                </p>
              </div>
            </div>
          </div>

          {/* See More Photos Section */}
          <details className="mb-12 group">
            <summary className="cursor-pointer list-none">
              <div className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2 w-full text-center">
                <span>See More Photos</span>
                <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-72 bg-leaf/10 border-2 border-leaf/20 overflow-hidden group/img">
                <img
                  src="/images/gallery/araku-fest-3.jpg"
                  alt="Araku Festival - Tree plantation ceremony"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-leaf/95 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">Community Tree Plantation</p>
                </div>
              </div>

              <div className="relative h-72 bg-leaf/10 border-2 border-leaf/20 overflow-hidden group/img">
                <img
                  src="/images/gallery/araku-fest-4.jpg"
                  alt="Araku Festival - Landscaping project"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-leaf/95 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">Green Initiative Work</p>
                </div>
              </div>

              <div className="relative h-72 bg-leaf/10 border-2 border-leaf/20 overflow-hidden group/img">
                <img
                  src="/images/gallery/araku-fest-5.jpg"
                  alt="Araku Festival - Team collaboration"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-leaf/95 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">Team Beautification Work</p>
                </div>
              </div>

              <div className="relative h-72 bg-leaf/10 border-2 border-leaf/20 overflow-hidden group/img">
                <img
                  src="/images/gallery/araku-fest-6.jpg"
                  alt="Araku Festival - Green initiative"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-leaf/95 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">Environmental Beautification</p>
                </div>
              </div>

              <div className="relative h-72 bg-leaf/10 border-2 border-leaf/20 overflow-hidden group/img">
                <img
                  src="/images/gallery/araku-fest-7.jpg"
                  alt="Araku Festival - Plantation drive"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-leaf/95 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">Mass Plantation Drive</p>
                </div>
              </div>

              <div className="relative h-72 bg-leaf/10 border-2 border-leaf/20 overflow-hidden group/img">
                <img
                  src="/images/gallery/araku-fest-8.jpg"
                  alt="Araku Festival - Community engagement"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-leaf/95 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">Community Engagement</p>
                </div>
              </div>
            </div>
          </details>

          {/* Project Scope */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-8 bg-leaf/5 border-2 border-leaf/20">
              <div className="text-4xl font-bold text-marigold mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Trees Planted</div>
              <div className="text-sm text-gray-600 mt-2">Native and flowering species</div>
            </div>
            <div className="text-center p-8 bg-leaf/5 border-2 border-leaf/20">
              <div className="text-4xl font-bold text-marigold mb-2">2 km</div>
              <div className="text-gray-700 font-semibold">Roadside Coverage</div>
              <div className="text-sm text-gray-600 mt-2">Along main festival routes</div>
            </div>
            <div className="text-center p-8 bg-leaf/5 border-2 border-leaf/20">
              <div className="text-4xl font-bold text-marigold mb-2">10+</div>
              <div className="text-gray-700 font-semibold">Team Members</div>
              <div className="text-sm text-gray-600 mt-2">Skilled landscaping crew</div>
            </div>
          </div>

          {/* Our Contribution */}
          <div className="bg-leaf text-white p-12">
            <h3 className="font-display font-bold text-3xl mb-6 text-center">
              Our Contribution to Community
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto text-lg">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-marigold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white/90">
                  Supplied quality saplings and plants suitable for the Araku Valley climate and terrain
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-marigold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white/90">
                  Provided expert planting services ensuring high survival rate of saplings
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-marigold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white/90">
                  Coordinated with festival organizers for timely completion before event opening
                </p>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-marigold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white/90">
                  Contributed to environmental beautification and sustainable green development
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="font-display font-bold text-3xl text-leaf mb-4">
              Need Large-Scale Landscaping?
            </h3>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              We handle public works, commercial projects, farm developments, and community landscaping 
              initiatives across East Godavari district.
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
      </div>
    </section>
  )
}

export default ArakuProject
