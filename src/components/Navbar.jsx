import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { categories } from '../data/plantsData'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPlantsOpen, setIsPlantsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsPlantsOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Plants', href: '/plants', dropdown: true },
    { name: 'Services', href: '/services' },
    { name: 'Landscaping', href: '/services/landscaping' },
    { name: 'Wholesale', href: '/wholesale-plants' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const categoryLinks = Object.values(categories)
    .filter((cat) => cat.slug)
    .slice(0, 8)

  const isActive = (href) => location.pathname === href

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-leaf/95'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Siva Lalitha Nursery — Home">
            <div className="bg-white rounded-full shadow-md overflow-hidden w-14 h-14 flex items-center justify-center">
              <img
                src="/images/gallery/logo.jpeg"
                alt="Siva Lalitha Nursery Logo"
                width="56"
                height="56"
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setIsPlantsOpen(!isPlantsOpen)}
                    aria-expanded={isPlantsOpen}
                    aria-haspopup="true"
                    className={`font-medium transition-colors inline-flex items-center gap-1 ${
                      isActive(link.href) || location.pathname.startsWith('/plants/')
                        ? isScrolled ? 'text-leaf font-semibold' : 'text-marigold'
                        : isScrolled ? 'text-gray-700 hover:text-leaf' : 'text-white hover:text-marigold'
                    }`}
                  >
                    Plants
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isPlantsOpen && (
                    <div className="absolute left-0 mt-3 w-64 bg-white shadow-xl border-t-4 border-marigold z-50">
                      <Link
                        to="/plants"
                        className="block px-5 py-3 text-gray-800 hover:bg-leaf hover:text-white font-semibold border-b border-gray-100"
                      >
                        View All Plants
                      </Link>
                      {categoryLinks.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/plants/${cat.slug}`}
                          className="block px-5 py-2.5 text-gray-700 hover:bg-leaf hover:text-white text-sm border-b border-gray-50"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors ${
                    isActive(link.href)
                      ? isScrolled ? 'text-leaf font-semibold' : 'text-marigold'
                      : isScrolled ? 'text-gray-700 hover:text-leaf' : 'text-white hover:text-marigold'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
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
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className={`lg:hidden ${isScrolled ? 'text-leaf' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <Link
                      to="/plants"
                      className="text-gray-700 hover:text-leaf font-medium py-3 border-b border-gray-100 block"
                    >
                      Plants (All)
                    </Link>
                    <div className="pl-4 pb-2">
                      {categoryLinks.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/plants/${cat.slug}`}
                          className="block text-gray-600 hover:text-leaf py-2 text-sm border-b border-gray-50"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-leaf font-medium py-3 border-b border-gray-100"
                  >
                    {link.name}
                  </Link>
                )
              )}
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
