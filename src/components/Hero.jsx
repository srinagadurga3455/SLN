import React from 'react'
import HeroBackground from './HeroBackground'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Cinematic Background */}
      <HeroBackground
        // videoSrc="/videos/nursery-aerial.mp4" // Uncomment when real drone footage is available
        imageSrc="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2532&auto=format&fit=crop" // Greenhouse with rows of plants
        imageAlt="Aerial view of Kadiyam nursery fields"
      />

      {/* Content Layer */}
      <div className="container-custom px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block bg-marigold text-white px-4 py-2 mb-8 font-semibold text-sm">
            KADIYAM'S TRUSTED PLANT SUPPLIER
          </div>

          {/* Main Heading with Logo */}
          <div className="flex items-center gap-6 mb-6">
            <div className="bg-white rounded-full shadow-2xl overflow-hidden w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
              <img 
                src="/images/gallery/logo.jpeg" 
                alt="Siva Lalitha Nursery Logo" 
                className="w-full h-full object-cover rounded-full scale-[1.3]"
              />
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white leading-tight uppercase">
              Siva Lalitha<br />Nursery
            </h1>
          </div>
          
          <div className="w-20 h-1 bg-marigold mb-8"></div>

          {/* Intro */}
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl leading-relaxed">
            <span className="font-bold">100+ plant varieties</span> — fruit, flowering, avenue, lawn. 
            Landscaping services across East Godavari. <span className="font-bold">500+ happy customers served.</span>
          </p>

          {/* Contact Actions - Primary Focus */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="tel:+919502835577"
              className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold text-lg transition-colors inline-flex items-center justify-center gap-3 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 95028 35577
            </a>
            
            <a
              href="https://wa.me/919502835577?text=Hi%2C%20I%27m%20interested%20in%20plants"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-leaf px-8 py-4 font-bold text-lg transition-colors inline-flex items-center justify-center gap-3 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Additional Contact Info */}
          <div className="flex flex-wrap gap-6 text-white/90 text-sm">
            <div>
              <div className="font-semibold text-white mb-1">More Numbers:</div>
              <a href="tel:+919705368999" className="hover:text-marigold transition-colors">97053 68999</a>
              {' • '}
              <a href="tel:+919493341557" className="hover:text-marigold transition-colors">94933 41557</a>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">Location:</div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Veeravaram+Road+Kadiyam+East+Godavari+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-marigold transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
