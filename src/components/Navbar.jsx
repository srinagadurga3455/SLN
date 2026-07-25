import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Plants', href: '#plants' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-leaf/95'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3">
            <div className="bg-white rounded-full shadow-md overflow-hidden w-14 h-14 flex items-center justify-center">
              <img 
                src="/images/gallery/logo.jpeg" 
                alt="Siva Lalitha Nursery Logo" 
                className="w-full h-full object-cover rounded-full scale-110"
              />
            </div>
            <div className={`text-left ${isScrolled ? 'text-leaf' : 'text-white'}`}>
              <div className="font-display font-bold text-xl leading-tight uppercase tracking-wide">
                Siva Lalitha Nursery
              </div>
              <div className={`text-xs font-medium ${isScrolled ? 'text-soil' : 'text-white/80'}`}>
                Veeravaram Road, Kadiyam
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-leaf' 
                    : 'text-white hover:text-marigold'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919502835577"
              className="bg-marigold hover:bg-marigold-dark text-white px-6 py-2.5 font-semibold transition-colors"
            >
              95028 35577
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ${isScrolled ? 'text-leaf' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 hover:text-leaf font-medium py-3 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+919502835577"
                className="bg-marigold text-white px-6 py-3 font-semibold text-center mt-4"
              >
                Call: 95028 35577
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
