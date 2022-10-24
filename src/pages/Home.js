import React from 'react'

import ImageCarousel from '../components/ImageCarousel'
import Banner1 from '../components/Banner1'
import ServiceBanner from '../components/ServiceBanner'
import CategoriesCarousel from '../components/CategoriesCarousel'

const Home = () => {

  return (
    <>
      <ImageCarousel/>
      <Banner1/>
      <ServiceBanner/>
      <CategoriesCarousel/>
    </>
  )
}

export default Home