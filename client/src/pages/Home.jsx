import React, { useEffect, lazy, Suspense } from 'react'

// Lazy loading (performance boost 🚀)
const Hero = lazy(() => import('../components/Hero'))
const FeaturedSection = lazy(() => import('../components/FeaturedSection'))
const Banner = lazy(() => import('../components/Banner'))
const Testimonial = lazy(() => import('../components/Testimonial'))
const Newsletter = lazy(() => import('../components/Newsletter'))

import Loader from '../components/Loader'

const Home = () => {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='overflow-x-hidden'>

      <Suspense fallback={<Loader />}>
        <Hero />
        <FeaturedSection />
        <Banner />
        <Testimonial />
        <Newsletter />
      </Suspense>

    </div>
  )
}

export default Home