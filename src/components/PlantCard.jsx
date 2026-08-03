import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/plantsData'

const PlantCard = ({ plant, index = 0 }) => {
  const category = categories[plant.category]
  return (
    <Link
      to={`/plants/${plant.slug}`}
      className="plant-tag group hover:shadow-lg transition-shadow duration-300 block"
      aria-label={`${plant.name} — ${category ? category.name : 'plant'} from Siva Lalitha Nursery Kadiyam`}
    >
      {/* Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        {plant.image ? (
          <img
            src={plant.image}
            alt={`${plant.name} (${plant.teluguName}) — ${category ? category.name : 'plant'} for sale at Siva Lalitha Nursery Kadiyam`}
            width="400"
            height="300"
            loading={index < 6 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="16" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + encodeURIComponent(plant.name) + '%3C/text%3E%3C/svg%3E'
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-leaf/5 p-4">
            <span className="text-leaf font-semibold text-center">Ask us about {plant.name} — photo available at the nursery</span>
          </div>
        )}
        {category && (
          <span className="absolute top-3 left-3 bg-white/95 text-leaf px-3 py-1 text-xs font-bold uppercase shadow">
            {category.name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 pl-6">
        <h3 className="font-bold text-lg text-leaf mb-1">
          {plant.name}
        </h3>
        <p className="text-soil text-base font-medium mb-3">
          {plant.teluguName}
        </p>
        {plant.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {plant.description}
          </p>
        )}
      </div>
    </Link>
  )
}

export default PlantCard
