import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import CategoryPage from './CategoryPage'
import PlantPage from './PlantPage'
import { categories, getPlantBySlug } from '../data/plantsData'

/**
 * PlantsRouter — dispatches /plants/:slug to the correct page:
 *  - category slug (e.g. flower-plants) → CategoryPage
 *  - plant slug (e.g. rose)             → PlantPage
 *  - unknown                            → redirect to /plants
 */
const PlantsRouter = () => {
  const { slug } = useParams()

  const isCategory = Object.values(categories).some((cat) => cat.slug === slug)
  if (isCategory) return <CategoryPage />

  const isPlant = Boolean(getPlantBySlug(slug))
  if (isPlant) return <PlantPage />

  return <Navigate to="/plants" replace />
}

export default PlantsRouter
