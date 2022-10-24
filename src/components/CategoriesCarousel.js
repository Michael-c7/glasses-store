import React from 'react'
import styled from 'styled-components'

// images
import mensGlasses from '../assets/categoryCarousel/mens-glasses.jpg'
import mensSunglasses from '../assets/categoryCarousel/mens-sunglasses.jpg'
import womensGlasses from '../assets/categoryCarousel/womens-glasses.jpg'
import womensSunglasses from '../assets/categoryCarousel/womens-sunglasses.jpg'
import kidsGlasses from '../assets/categoryCarousel/kids-glasses.jpg'
import kidsSunglasses from '../assets/categoryCarousel/kids-sunglasses.jpg'
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



  return (
    <Wrapper>
        <div className='categoriesCarousel__carousel-container'>
            <button className='categoriesCarousel__slide-btn'>
                <GrPrevious className='categoriesCarousel__slide-icon'/>
            </button>
            <ul className='categoriesCarousel__slides'>
                {categoriesCarouselData.map((slide, index) => {
                    return (
                        <li key={index} className='categoriesCarousel__slide'>
                            <img src={slide.image} alt={slide.heading}/>
                            <div className='categoriesCarousel__info'>
                                <h2 className='categoriesCarousel__heading'>
                                    {slide.heading}
                                </h2>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button className='categoriesCarousel__slide-btn'>
                <GrNext className='categoriesCarousel__slide-icon'/>
            </button>
        </div>
    </Wrapper>
  )
}

export default CategoriesCarousel

const Wrapper = styled.section`


    img {
        max-width:100px;
    }
`