import React, { useState } from 'react'

/**
 * FaqAccordion — accessible, keyboard-friendly FAQ list.
 * Renders visible questions + answers for SEO and gives each item an id for anchor links.
 */
const FaqAccordion = ({ faqs, title = 'Frequently Asked Questions' }) => {
  const [openIndex, setOpenIndex] = useState(0)

  if (!faqs || faqs.length === 0) return null

  return (
    <section id="faq" className="max-w-3xl mx-auto">
      <h2 className="font-display font-black text-3xl md:text-4xl text-leaf mb-8 text-center uppercase">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="bg-white border-2 border-leaf/20">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-800 hover:text-leaf transition-colors"
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-marigold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </h3>
              {isOpen && (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className="px-6 pb-5 text-gray-700 leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FaqAccordion
