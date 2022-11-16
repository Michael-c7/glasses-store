import React from 'react'
import styled from 'styled-components'
// components
import Breadcrumb from '../components/Breadcrumb'
import CategoriesFilter from '../components/productComponents.js/CategoriesFilter'
import BestSellersShowcase from '../components/productComponents.js/BestSellersShowcase'
import BrandedCollectionBanner from '../components/productComponents.js/BrandedCollectionBanner'
import DiscountBanner from '../components/productComponents.js/DiscountBanner'


const Products = () => {
  const currentWidth = '80%'

  return (
    <Wrapper>
      <Breadcrumb containerWidth={currentWidth}/>
      <div className='products-outer-container'>
        {/*filter stuff */}
        <div className=''>
          <CategoriesFilter/>
          <BestSellersShowcase/>
          <BrandedCollectionBanner/>
        </div>
        <div className=''>
          <DiscountBanner/>
          <div className='filter-bar'>filter bar</div>
          <div className='products'>products here</div>
        </div>
      </div>

    </Wrapper>
  )
}

export default Products



const Wrapper = styled.section`

`