import React from 'react'
import styled from 'styled-components'

// images
import mensGlasses from '../assets/categoryCarousel/mens-glasses.jpg'
import mensSunglasses from '../assets/categoryCarousel/mens-sunglasses.jpg'
import womensGlasses from '../assets/categoryCarousel/womens-glasses.jpg'
import womensSunglasses from '../assets/categoryCarousel/womens-sunglasses.jpg'
import kidsGlasses from '../assets/categoryCarousel/kids-glasses.jpg'
import kidsSunglasses from '../assets/categoryCarousel/kids-sunglasses.jpg'
import parallaxImage from '../assets/categoryCarousel/parallax-img.jpg'
// icons
import { GrPrevious, GrNext } from 'react-icons/gr'


const CategoriesCarousel = () => {
     const categoriesCarouselData = [
        {
            image:mensGlasses,
            heading:'Mens Glasses'
        },
        {
            image:mensSunglasses,
            heading:'Mens Sunglasses'
        },
        {
            image:womensGlasses,
            heading:'Womens Glasses'
        },
        {
            image:womensSunglasses,
            heading:'Womens Sunglasses'
        },
        {
            image:kidsGlasses,
            heading:'Kids Glasses'
        },
        {
            image:kidsSunglasses,
            heading:'Kids Sunglasses'
        },
    ]


    let cardsInSingleSlideAmt = 2;
    let totalSlideAmt = Math.round(cardsInSingleSlideAmt / categoriesCarouselData.length)

    console.log(totalSlideAmt)

    let slides = Array.from(({length:2}))






  return (
    <Wrapper>
        <div className='parallax'></div>
        
        <div className='categoriesCarousel-container'>
            <h2 className='categoriesCarousel__heading'>Categories</h2>
            <div className='categoriesCarousel__slides-outer-container'>
                <div className='categoriesCarousel__slides-container'>
                    <ul className='categoriesCarousel__slides'>
                        {categoriesCarouselData.map((item, index) => {
                            const { image, heading } = item
                            return (
                                <li className='categoriesCarousel__slide' key={index}>
                                    <img className='categoriesCarousel__image' src={image} alt={heading}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default CategoriesCarousel

const Wrapper = styled.section`
    position:relative;
    height:600px;

    .parallax {
        height:100%;
        background-image: url(${parallaxImage});
    /* creates the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    // to make image less noticeable
        filter: brightness(0.5) grayscale(50%);
        box-shadow: inset 0 0 100px #111;   
    }

    // removes the parallax effect for mobile
    @media only screen and (max-device-width: 1024px) {
        .parallax {
          background-attachment: scroll;
        }
      }


    .categoriesCarousel-container {
        position:absolute;
        top:0;
        z-index:1;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);
    }

    .categoriesCarousel__heading {
        text-align:center;
        font-size:2rem;
        font-weight:500;
        color:#fff;
    }



    img {
        width:200px;
    }




`