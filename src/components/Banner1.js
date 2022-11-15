import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// components
import { Button1 } from '../styledComponents/Button1'
import { Button2 } from '../styledComponents/Button2'

// images
import box1Image from '../assets/banner1_images/banner-1__couple.png'
import box2Image from '../assets/banner1_images/banner-1__man.png'
import box3Image from '../assets/banner1_images/banner-1__woman.png'
import box4Image from '../assets/banner1_images/banner-1__kid.png'


const Banner1 = () => {

  return (
    <Wrapper>
      <div className='banner1-outer-container'>
        <div className='banner1_container banner1_container-1'>
          <div className='banner1__box-1'>
            <div className='box__image-container'>
              <img className='box-1__image' src={box1Image} alt='couple wearing sunglasses'/>
            </div>
            <div className='banner1__info-box'>
              <h2 className='banner1__info-box__heading'>Best Collection</h2>
              <h3 className='banner1__info-box__sub-heading'>Up to 40% off on selected item</h3>
              <Link to='/products'>
                <Button1 className='banner1__info-box__buy-btn'>Shop Now</Button1>
              </Link>
            </div>
          </div>
        </div>
        <div className='banner1_container banner1_container-2'>
          <div className='banner1_container-2-1'>
            <div className='banner1__box-3'>
            <div className='box__image-container'>
              <img className='box-3__image center--transform' src={box3Image} alt='a woman wearing sunglasses'/>
            </div>
            <div className='banner1__info-box banner1__info-box--center'>
              <Link to='/products'>
                <Button2 className='banner1__info-box__buy-btn'>Shop Now</Button2>
              </Link>
            </div>
            </div>
            <div className='banner1__box-4'>
            <div className='box__image-container'>
              <img className='box-4__image' src={box4Image} alt='a kid wearing sunglasses'/>
            </div>
            <div className='banner1__info-box banner1__info-box--center'>
              <Link to='/products'>
                <Button2 className='banner1__info-box__buy-btn'>Shop Now</Button2>
              </Link>
            </div>
            </div>
          </div>

          <div className='banner1__box-2'>
            <div className='box__image-container'>
              <img className='box-2__image' src={box2Image} alt='a man wearing glasses'/>
            </div>
            <div className='banner1__info-box'>
              <h2 className='banner1__info-box__heading'>Summer Sale</h2>
              <h3 className='banner1__info-box__sub-heading'>Get 20% off on Designer glasses</h3>
              <Link to='/products'>
                <Button1 className='banner1__info-box__buy-btn'>Shop Now</Button1>
              </Link>
            </div>
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
    --box-4-color:#FE6E9C;

    width:100%;

    .banner1-outer-container {
      position:relative;
      margin:1rem;
      height:700px;
      display:flex;
      flex-direction:row;
      color:#fff;
    }

    .banner1_container {
      position:relative;
      flex:1;
    }

    .banner1_container-2 {
      height:100%;
      background:rgba(0,0,0,0.25);
      display:flex;
      flex-direction:column;
    }





    .banner1__box-1 {
      position:relative;
      background:var(--box-1-color);
      height:100%;
    }

    .box__image-container {
      position:absolute;
      width:100%;
      height:100%;
      display:flex;
      align-items:center;
      overflow:hidden;
    }


    .box-1__image {
      position:absolute;
      max-width:425px;
      right:0;
      bottom:0;
      margin-right:5rem;
    }


    .banner1__info-box {
      position:absolute;
      bottom:0;
      margin-left:2rem;
      margin-bottom:2rem;
    }

    .banner1__info-box--center {
      position:absolute;
      bottom:0;
      margin:0 0 2rem 0;
      left:50%;
      transform:translateX(-50%);
    }

    .banner1__info-box__heading {
      font-weight:500;
      font-size:1.75rem;
    }

    .banner1__info-box__sub-heading {
      margin:1rem 0 1.25rem 0;
      font-weight:500;
      font-size:1.25rem;
    }



    .banner1__box-2 {
      position:relative;
      background:var(--box-2-color);
      flex:1;
    }


    .box-2__image {
      position:absolute;
      max-width:500px;
      right:0;
      bottom:0;
      margin-right:5rem;
    }



    .banner1_container-2-1 {
      flex:1;
      display:flex;
    }

    .banner1__box-3 {
      position:relative;
      background:var(--box-3-color);
      flex:1;
    }

    .box-3__image {
      position:absolute;
      max-width:280px;
      bottom:0;
      margin-top:0.5rem;
    }

    .banner1__box-4 {
      position:relative;
      background:var(--box-4-color);
      flex:1;
    }

    .box-4__image {
      position:absolute;
      max-width:525px;
      right:0;
      bottom:0;
    }












    // 4k view
    @media only screen and (min-width: 2000px) {
      .banner1__info-box--center {
        position:absolute;
        bottom:0;
        margin:0 0 2rem 0;
        left:50%;
        transform:translateX(-50%);
      }
  
      .banner1__info-box__heading {
        font-weight:500;
        font-size:3rem;
      }
  
      .banner1__info-box__sub-heading {
        margin:1rem 0 1.25rem 0;
        font-weight:500;
        font-size:2.25rem;
      }

      .banner1__info-box__buy-btn {
        font-size:1.75rem;
      }
    }

    // mobile view
    @media only screen and (max-width: 1440px) {
      .box-2__image {
        max-width:500px;
        margin-right:-2.5rem;
      }

      .box-4__image {
        position:absolute;
        max-width:400px;
        right:0;
        bottom:0;
      }

      
      @media only screen and (max-width: 1024px) {
        .box-1__image {
          margin-right:3rem;
        }

        .box-2__image {
          max-width:500px;
          margin-right:0rem;
          left:50%;
          transform:translateX(-50%);
        }

        .box-3__image {
          position:absolute;
          max-width:250px;
          bottom:0;
          margin-top:1.5rem;
        }
  
        .box-4__image {
          position:absolute;
          max-width:450px;
          right:0;
          bottom:0;
          margin-right:-4rem;
        }

        .banner1__info-box {
          margin-left:0;
          left:50%;
          transform:translate(-50%);
          text-align:center;
        }

        .banner1__info-box__buy-btn  {
          font-size:0.75rem;
        }
    }


    @media only screen and (max-width: 768px) {
      .banner1-outer-container {
        flex-direction:column;
      }

      .box-1__image {
        max-width:215px;
        margin-right:2rem;
      }

      .box-2__image {
        max-width:250px;
        margin-right:0rem;
        left:initial;
        transform:initial;
      }

      .box-3__image {
        position:absolute;
        max-width:150px;
        bottom:0;
        margin-top:-5rem;
        left:50%;
        transform:translateX(-50%);
      }

      .box-4__image {
        position:absolute;
        max-width:275px;
        right:0;
        bottom:0;
        margin-right:0rem;
      }

      .banner1__info-box {
        margin-bottom:0.75rem;
        left:initial;
        transform:initial;
        text-align:left;
        margin-left:2rem;
      }

      .banner1__info-box--center {
        position:absolute;
        bottom:0;
        margin:0 0 0.75rem 0;
        left:50%;
        transform:translateX(-50%);
      }

      .banner1__info-box__heading {
        font-weight:500;
        font-size:1.5rem;
      }
  
      .banner1__info-box__sub-heading {
        margin:0.25rem 0 0.75rem 0;
        font-weight:500;
        font-size:1rem;
      }

      .banner1__info-box__buy-btn  {
        font-size:0.65rem;
      }



      @media only screen and (max-width: 425px) {
        .box-1__image {
          max-width:215px;
          margin-right:0rem;
          left:50%;
          transform:translateX(-50%);
        }

        .box-2__image {
          max-width:250px;
          margin-right:0rem;
          left:50%;
          transform:translateX(-50%);
        }

        .banner1__info-box {
          margin-bottom:0.75rem;
          left:50%;
          transform:translateX(-50%);
          text-align:left;
          margin-left:0rem;
          text-align:center;
        }
      }


      @media only screen and (max-width: 375px) {

        .box-4__image {
          position:absolute;
          max-width:275px;
          right:0;
          bottom:0;
          margin-right:-2rem;
        }
      }
    }
  }

`