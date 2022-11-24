import React from 'react'
import styled from 'styled-components'
// components
import Breadcrumb from '../components/Breadcrumb'
import CategoriesFilter from '../components/productComponents/CategoriesFilter'
import FilterProductsBar from '../components/productComponents/FilterProductsBar'
import Pagination from '../components/productComponents/Pagination'

import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'

import { useProductsContext } from '../contexts/products_context'
import { useFilterContext } from '../contexts/filter_context'


const Products = () => {  
  const { products } = useProductsContext()
  const { isMobileFilterOpen } = useFilterContext()  

  return (
    <Wrapper>
      <Breadcrumb/>
      <div className='products__outer-container'>
        {/*filter stuff */}
        <div className={`products__filter-outer-container ${isMobileFilterOpen ? 'products__filter-outer-container--mobile' : ''}`}>
          <CategoriesFilter/>
        </div>
        {/*products stuff */}
        <div className='products__products-outer-container'>
          <FilterProductsBar/>
          {products ? (
            <ul className='products'>
              {products.map((product, index) => {
                return (
                  <ProductCard product={product} key={index}/>
                )
              })}
            </ul>
          ) : <Loading/>}
          <Pagination/>
        </div>
      </div>
    </Wrapper>
  )
}

export default Products



const Wrapper = styled.section`
  .products__outer-container {
    display:grid;
    grid-template-columns:1fr 2fr;
    margin:2rem var(--site-outer-margin);
    gap:2rem;
  }

  @media (max-width: 768px) {
    .products__filter-outer-container {
      display:none;
    }

    .products__outer-container {
      grid-template-columns:1fr;
    }
  }



  .products__filter-outer-container--mobile {
    position:absolute;
    display:flex;
    background:#fff;
    z-index:10;
    width:calc(100% - 2rem);
    margin:0 auto;
    left:1rem;
    box-shadow:0 0 0.75rem #777;
    padding:2rem 1rem;
  }

  .products__filter-outer-container--mobile > * {
    width:100%;
  }
`