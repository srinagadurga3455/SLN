import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-leaf text-white">
      <div className="container-custom px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-full shadow-lg overflow-hidden w-16 h-16 flex items-center justify-center">
                <img 
                  src="/images/gallery/logo.jpeg" 
                  alt="Siva Lalitha Nursery Logo" 
                  className="w-full h-full object-cover rounded-full scale-[1.3]"
                />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase">
                Siva Lalitha Nursery
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Supplying quality plants and landscaping services from Kadiyam, Andhra Pradesh since 2010.
            </p>
            <p className="text-white/60 text-sm">
              Owned by Kamireddy Nagu
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Plants', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, `#${link.toLowerCase()}`)}
                    className="text-white/80 hover:text-marigold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-white/80">
              <a href="tel:+919502835577" className="block hover:text-marigold transition-colors">
                95028 35577
              </a>
              <a href="tel:+919705368999" className="block hover:text-marigold transition-colors">
                97053 68999
              </a>
              <a href="tel:+919704769888" className="block hover:text-marigold transition-colors">
                97047 69888
              </a>
              <a
                href="mailto:nagu.kamireddy999@gmail.com"
                className="block hover:text-marigold transition-colors text-sm"
              >
                nagu.kamireddy999@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Siva Lalitha Nursery. Veeravaram Road, Kadiyam, E.G. Dist, Andhra Pradesh.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
