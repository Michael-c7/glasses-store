import React from 'react'
import styled from 'styled-components'
import Image1 from '../assets/image_carousel_images/christian-buehner-DItYlc26zVI-unsplash.jpg'
import Image2 from '../assets/image_carousel_images/christina-wocintechchat-com-50TkCaP8M3A-unsplash.jpg'
import Image3 from '../assets/image_carousel_images/AdobeStock_534825688.jpeg'

import { Button1 } from '../styledComponents/Button1'
import { Link } from 'react-router-dom'

const carouselData = [
    {
        image:Image1,
        topHeading:'New Arrivals',
        mainHeading:'Designer Collection',
        subHeading:'Up to 50% off on Sunglasses',
    },
    {
        image:Image2,
        topHeading:`Spring ${new Date().getFullYear()}`,
        mainHeading:'New Collection',
        subHeading:'Up to 50% off on Eyeglasses',
    },
    {
      image:Image3,
      topHeading:`Great Deals`,
      mainHeading:"Men's Collection",
      subHeading:'Affordable glasses for everybody',
  },
]





const ImageCarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  return (
    <Wrapper>
      <ul className='image-carousel__slides'>
        {carouselData.map((slide, index) => {
          const {image, topHeading, mainHeading, subHeading} = slide
          /* 
          for the last slide --> slide--prev
          for the slide being shown --> slide--current
          for the next slide that will be shown --> slide--next
          */
          let slidePosition = 'slide--next'
          if(currentSlideIndex === index) {
            // slide--current
            slidePosition = 'slide--current'
          } else if(currentSlideIndex + 1 === index) {
            // slide--next
            slidePosition = 'slide--next'
          } else {
            // slide--prev
            slidePosition = 'slide--prev'
          }
          return (
            <li className={`image-carousel__slide ${slidePosition}`} key={index}>
              <img className='image-carousel__image' src={image} alt={mainHeading}/>
              <div className='image-carousel__slide__info'>
                <h3 className='image-carousel__slide__top-heading'>{topHeading}</h3>
                <h2 className='image-carousel__slide__main-heading'>{mainHeading}</h2>
                <h3 className='image-carousel__slide__sub-heading'>{subHeading}</h3>
                <Link to='/products'>
                  <Button1>Show Now</Button1>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>

      <div className='image-carousel__dots-container'>
        <ul className='image-carousel__dots'>
          {carouselData.map((_, index) => {
            return (
              <li className={`image-carousel__dot ${currentSlideIndex === index ? 'dot--current' : ''}`} key={index} onClick={() => setCurrentSlideIndex(index)}></li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

export default ImageCarousel


const Wrapper = styled.div`
  position:relative;
  height:700px;
  overflow:hidden;

.image-carousel__slides {
  position:relative;
}

.image-carousel__slide {
  position:absolute;
  width:100%;
  height:700px;
  transform:translate(0%);
  transition:transform 1.6s ease;
  z-index:-1;
}



.slide--prev {
  // the slide is behind the current slide, transform -100%
  transform:translate(-100%);
}

.slide--current {
  transform:translate(0%);
  z-index:1;
}

.slide--next {
  transform:translate(100%);


}

.image-carousel__image {
  width:100%;
  height:100%;
  object-fit:cover;
  oject-position:bottom bottom;
}


.image-carousel__slide__info {
  position:absolute;
  top:50%;
  left:15%;
  transform:translate(-15%, -50%);
}

.image-carousel__slide__top-heading {
  color:var(--red);
  font-weight:500;
}

.image-carousel__slide__main-heading {
    font-size:2.75rem;
    margin:0.75rem 0;
}

.image-carousel__slide__sub-heading {
  margin-bottom:2rem;
  font-weight:500;
}


.image-carousel__dots-container {
  position:absolute;
  left:50%;
  top:98%;
  transform:translate(-50%, -98%);
  z-index:10;
}

.image-carousel__dots {
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}

.image-carousel__dot {
  position:relative;
  margin:0 0.5rem;
  background:none;
  width:20px;
  height:20px;
  border-radius:100px;
  border:2px solid #fff;
}

.image-carousel__dot:hover,
.dot--current {
  position:relative;
  border:2px solid var(--red);
  cursor:pointer;
}

.image-carousel__dot:hover::before,
.dot--current::before {
  content:'';
  position:absolute;
  top:0;
  background:var(--red);
  width:10px;
  height:10px;
  border-radius:100px;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
}


@media only screen and (max-width: 1024px) {
  .image-carousel__slide__info {
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(-0%, -50%);
    margin-left:1rem;
  }


  @media only screen and (max-width: 425px) {
    .image-carousel__slide__main-heading {
      font-size:2rem;
    }

    .image-carousel__slide__top-heading,
    .image-carousel__slide__sub-heading {
      margin-bottom:1rem;
      font-weight:500;
      font-size:0.95rem;
    }


    .image-carousel__slide__info {
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      margin-left:0rem;
      text-align:center;
      width:100%;
    }












}

`