import React from 'react'

const ServicesSection = () => {
  const services = [
    'Landscaping design and installation',
    'Garden setup for homes and farms',
    'Bulk plant supply for resorts and commercial projects',
    'Lawn grass (Mexican, Pearl varieties)',
    'Seasonal flowering plants',
    'Fruit tree saplings and grafted varieties',
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl md:text-5xl text-leaf mb-6 uppercase leaf-vein">
              What We Do
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-clay hover:bg-leaf/5 transition-colors border-l-4 border-marigold"
              >
                <svg className="w-6 h-6 text-marigold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">{service}</span>
              </div>
            ))}
          </div>

          <div className="bg-leaf text-white p-12 text-center">
            <p className="text-xl mb-8 text-white/90">
              <span className="font-bold">Owned by Kamireddy Nagu.</span> Serving customers across East Godavari for over a decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919502835577"
                className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors"
              >
                Call: 95028 35577
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Veeravaram+Road+Kadiyam+East+Godavari+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-leaf px-8 py-4 font-bold transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
