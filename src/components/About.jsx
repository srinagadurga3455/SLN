import React from 'react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl md:text-5xl text-leaf mb-6 uppercase leaf-vein">
              About Us
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              <span className="font-bold text-leaf">Siva Lalitha Nursery</span> is a family-run 
              plant nursery and landscaping service on Veeravaram Road in Kadiyam — widely 
              recognized as Andhra Pradesh's premier nursery hub, supplying plants to buyers 
              across the state.
            </p>
            
            <p>
              "Our passion is helping people grow — whether it's a home garden, a farm orchard, 
              or a large commercial landscape," says <span className="font-semibold">Kamireddy Nagu</span>, 
              founder and owner. "Kadiyam has been a nursery hub for generations, and we take 
              pride in carrying that tradition forward with quality plants and honest service."
            </p>
            
            <p>
              We supply <span className="font-semibold">100+ varieties</span> of fruit plants, 
              flowering plants, avenue trees, lawn grass (Mexican and Pearl varieties), and 
              landscaping materials for homes, farms, resorts, and commercial projects across 
              East Godavari district. Our expertise includes grafted fruit varieties, 
              air-layered ornamentals, and drip-irrigated landscaping solutions.
            </p>

            <p>
              Whether you're planting a small home garden or setting up an orchard, 
              we have the plants and 10+ years of hands-on experience to help you succeed.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-l-4 border-marigold pl-6 text-left">
              <div className="text-4xl font-bold text-leaf mb-1">100+</div>
              <div className="text-gray-600 text-sm">Plant Varieties</div>
            </div>
            <div className="border-l-4 border-marigold pl-6 text-left">
              <div className="text-4xl font-bold text-leaf mb-1">10+</div>
              <div className="text-gray-600 text-sm">Years in Business</div>
            </div>
            <div className="border-l-4 border-marigold pl-6 text-left">
              <div className="text-4xl font-bold text-leaf mb-1">500+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div className="border-l-4 border-marigold pl-6 text-left">
              <div className="text-4xl font-bold text-leaf mb-1">7-7</div>
              <div className="text-gray-600 text-sm">Open Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
