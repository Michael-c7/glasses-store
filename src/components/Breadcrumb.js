import React from 'react'
import styled from 'styled-components'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'


const Breadcrumb = (props) => {
  const sampleLocation = useLocation();
  let currentLocation = sampleLocation.pathname.slice(1)
  const { containerWidth } = props

  return (
    <Wrapper>
      <div className='breadcrumbs__inner-container' style={{width:`${containerWidth || '100%'}`}}>
        <h2 className='breadcrumb__heading'>{currentLocation}</h2>
        <div className='breadcrumb__links'>
          <Link className='breadcrumb__link' to='/'>Home</Link>
          <div className='breadcrumb__icon'>
            <AiOutlineDoubleRight/>
          </div>
          <Link className='breadcrumb__link breadcrumb__link--current' to='/'>{currentLocation}</Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Breadcrumb

const Wrapper = styled.section`
  background:#f7f7f7;
  padding:2rem 0rem;

  .breadcrumbs__inner-container {
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:auto;
    margin:0 auto;
  }

  .breadcrumb__heading {
    font-weight:400;
    margin-top:-3px;
  }

  .breadcrumb__heading:first-letter {
    text-transform:uppercase;
  }

  .breadcrumb__links {
    display:flex;
    justify-content:center;
    align-items:center;  
  }

  .breadcrumb__link {
    margin:0 0.5rem;
    transition:50ms ease;
  }

  .breadcrumb__link:hover {
    color:var(--red);
  }

  .breadcrumb__link:first-letter {
    text-transform:uppercase;
  }

  .breadcrumb__icon {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.8rem;
  }

  .breadcrumb__link--current {
    color:var(--red);
    margin-top:2px;
  }


  @media (max-width: 425px) {
    .breadcrumbs__inner-container  {
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }

    .breadcrumb__heading {
      margin-top:0px;
      margin-bottom:0.5rem;
    }
  }

`