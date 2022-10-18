import React from 'react'
import styled from 'styled-components'
/*the banner of imgs w/ text under the imageCarousel */
import { Button1 } from '../styledComponents/Button1'
import { Button2 } from '../styledComponents/Button2'



import coupleImage from '../assets/banner1_images/banner-1__couple.png'
import manImage from '../assets/banner1_images/banner-1__man.png'
import womanImage from '../assets/banner1_images/banner-1__woman.png'
import kidImage from '../assets/banner1_images/banner-1__kid.png'

const Banner1 = () => {
  return (
    <Wrapper>
      <div className='banner1__container-1'>
        <div className='banner1__box banner1__box-1'>
          <img className='banner1__box__image' src={coupleImage} alt='people'/>
          <div className='banner1__box__info'>
            <h2 className='banner1__box__heading'>Best Collection</h2>
            <h3 className='banner1__box__sub-heading'>Up to 40% off on selected items</h3>
            <Button1>Shop Now</Button1>
          </div>
        </div>
      </div>

      <div className='banner1__container-2'>
        <div className='banner1__container-2-1'>
          <div className='banner1__box banner1__box-2'>
              <img className='banner1__box__image' src={manImage} alt='people'/>
              <div className='banner1__box__info'>
                <Button2>Shop Now</Button2>
              </div>
          </div>

          <div className='banner1__box banner1__box-3'>
              <img className='banner1__box__image' src={womanImage} alt='people'/>
              <div className='banner1__box__info'>
                <Button2>Shop Now</Button2>
              </div>
          </div>
        </div>

        <div className='banner1__box banner1__box-4'>
          <img className='banner1__box__image' src={kidImage} alt='people'/>
          <div className='banner1__box__info'>
            <h2 className='banner1__box__heading'>Summer Sale</h2>
            <h3 className='banner1__box__sub-heading'>20% off any designer sunglasses</h3>
            <Button1>Shop Now</Button1>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

export default Banner1

const Wrapper = styled.section`
  --box-1-color:#A6C393;
  --box-2-color:#F5AB30;
  --box-3-color:#16D1E4;
  --box-4-color:#FD548F;

  position:relative;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:1rem;
  margin:1rem;
  height:700px;


  .banner1__container-1 {
    height:100%;
  }

  .banner1__box-1 {
    height:100%;
  }

  .banner1__container-2 {
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-gap:1rem;
  }
 
  .banner1__container-2-1 {
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:1rem;
  }

  


  .banner1__box {
    position:relative;
    background:#efefef;
    overflow:hidden;
  }

  .banner1__box__image {
    transition:all 0.8s ease;
  }

  .banner1__box .banner1__box__image:hover {
    transform:scale(1.1);
  }

  .banner1__box-1 {
    background:var(--box-1-color);
  }

  .banner1__box-1 .banner1__box__image {
    width:65rem;
    bottom:0;
    right:0;
  }

  .banner1__box-2 {
    background:var(--box-2-color);
  }

  .banner1__box-2 .banner1__box__image {
    width:21rem;
    bottom:0;
    right:0;
  }

  .banner1__box-3 {
    background:var(--box-3-color);
  }

  .banner1__box-3 .banner1__box__image {
    width:36rem;
    bottom:0;
    right:-2rem;
  }

  .banner1__box-4 {
    background:var(--box-4-color);
  }

  .banner1__box-4 .banner1__box__image {
    width:35rem;
    bottom:0;
    right:0;
  }


  .banner1__box__image,
  .banner1__box__info {
    position:absolute;
  }
  

  .banner1__box__heading,
  .banner1__box__sub-heading {
    color:#fff;
    font-weight:400;
  }

  .banner1__box__sub-heading {
    margin:1rem 0 1.5rem 0;
  }


  // layout for the stuff in the boxes

  // type 1
  .banner1__box-1 .banner1__box__info,
  .banner1__box-4 .banner1__box__info {
    bottom:0;
    margin-bottom:2rem;
    margin-left:2rem;
  }



  // type 2
  .banner1__box-2 .banner1__box__info,
  .banner1__box-3 .banner1__box__info {
    left:50%;
    top:90%;
    transform:translate(-50%, -90%);
   
  }

 
  @media only screen and (max-width: 1024px) {
    .banner1__box-1 .banner1__box__image {
      width:60rem;
      bottom:0;
      right:0;
      margin-right:-15%;
    }



    // type 1
    .banner1__box-1 .banner1__box__info,
    .banner1__box-4 .banner1__box__info {
      bottom:0;
      margin-bottom:2rem;
      margin-left:0rem;
      left:50%;
      transform:translateX(-50%);
      text-align:center;
    }

  }

`