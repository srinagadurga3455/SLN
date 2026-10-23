import React from 'react'

/**
 * CtaBanner — reusable call-to-action block shown at the bottom of interior pages.
 */
const CtaBanner = ({
  title = 'Ready to start your garden?',
  text = 'Visit Siva Lalitha Nursery on Veeravaram Road, Kadiyam or call us for availability and bulk orders. Open daily 7 AM – 7 PM.',
}) => {
  return (
    <section className="bg-leaf text-white p-12 text-center max-w-4xl mx-auto">
      <h2 className="font-display font-bold text-3xl mb-4">{title}</h2>
      <p className="text-white/90 text-lg mb-8">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+919502835577"
          className="bg-marigold hover:bg-marigold-dark text-white px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
        >
          Call: 95028 35577
        </a>
        <a
          href="https://wa.me/917330873455?text=Hi%2C%20I%27m%20interested%20in%20plants"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-100 text-leaf px-8 py-4 font-bold transition-colors inline-flex items-center justify-center gap-2"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  )
}

export default CtaBanner
