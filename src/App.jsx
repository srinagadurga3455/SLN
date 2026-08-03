import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'

// Code-split interior pages so the home bundle stays small (faster LCP/INP)
const PlantNurseryKadiyam = lazy(() => import('./pages/PlantNurseryKadiyam'))
const PlantsHub = lazy(() => import('./pages/PlantsHub'))
const PlantsRouter = lazy(() => import('./pages/PlantsRouter'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const LandscapingPage = lazy(() => import('./pages/LandscapingPage'))
const WholesalePage = lazy(() => import('./pages/WholesalePage'))
const BlogIndex = lazy(() => import('./pages/BlogIndex'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-clay" role="status" aria-label="Loading page">
      <div className="text-leaf font-semibold">Loading…</div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-leaf focus:text-white focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/plant-nursery-in-kadiyam" element={<PlantNurseryKadiyam />} />
              <Route path="/plants" element={<PlantsHub />} />
              <Route path="/plants/:slug" element={<PlantsRouter />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/landscaping" element={<LandscapingPage />} />
              <Route path="/wholesale-plants" element={<WholesalePage />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App
