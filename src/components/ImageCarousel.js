import React, { useEffect } from 'react'
import styled from 'styled-components'

import Image1 from '../assets/image_carousel_images/christian-buehner-DItYlc26zVI-unsplash.jpg'
import Image2 from '../assets/image_carousel_images/christina-wocintechchat-com-50TkCaP8M3A-unsplash.jpg'
import Image3 from '../assets/image_carousel_images/AdobeStock_534825688.jpeg'
import Image4 from '../assets/image_carousel_images/AdobeStock_86658618.jpeg'

import { Button1 } from '../styledComponents/Button1'
import { Link } from 'react-router-dom'
import { GrPrevious, GrNext } from 'react-icons/gr'


const carouselData = [
    {
        image:Image1,
        topHeading:'New Arrivals',
        mainHeading:'Designer Collection',
        subHeading:'Up to 25% off on all designer glasses',
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
    {
      image:Image4,
      topHeading:`Best Deals`,
      mainHeading:"Women's Collection",
      subHeading:'Up to 75% off on Sunglasses',
    },
]





const ImageCarousel = () => {
  let [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)


  const handleImageSlides = index => {
    setCurrentSlideIndex(index)
  }

  const prevSlide = _ => {
    if(currentSlideIndex === 0) {
      setCurrentSlideIndex(carouselData?.length - 1)
      } else {
        setCurrentSlideIndex(currentSlideIndex - 1)
      }
  }

  const nextSlide = _ => {
    if(currentSlideIndex === carouselData?.length - 1) {
      setCurrentSlideIndex(currentSlideIndex = currentSlideIndex - currentSlideIndex)
      } else {
        setCurrentSlideIndex(currentSlideIndex = currentSlideIndex + 1)
      }
    }

  return (
    <Wrapper>
      <ul className='image-carousel__slides'>
        {carouselData.map((slide, index) => {
          const {image, topHeading, mainHeading, subHeading} = slide
          /* 
          for the last slide --> slide--prev
          for the current slide being shown --> slide--current
          for the next slide that will be shown --> slide--next
          */
          let slidePosition = 'slide--next'


          if (currentSlideIndex === index) {
            slidePosition = 'slide--current';
          }
          if 
            (currentSlideIndex === index - 1 || 
            (index === 0 && currentSlideIndex === carouselData.length - 1)
            ) {
            slidePosition = 'slide--prev';
          }


          return (
            <li className={`image-carousel__slide ${slidePosition}`} key={index}>
              <img className='image-carousel__image' src={image} alt={mainHeading}/>
              <div className='image-carousel__slide__info'>
                <h3 className='image-carousel__slide__top-heading'>{topHeading}</h3>
                <h2 className='image-carousel__slide__main-heading'>{mainHeading}</h2>
                <h3 className='image-carousel__slide__sub-heading'>{subHeading}</h3>
                <Link to='/products' className='test'>
                  <Button1>Shop Now</Button1>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>

      <button className='movement-btn movement-btn-prev' onClick={() => prevSlide()}>
        <GrPrevious className='movement-btn__icon'/>
      </button>
      <button className='movement-btn movement-btn-next' onClick={() => nextSlide()}>
          <GrNext className='movement-btn__icon'/>
      </button>

      <div className='image-carousel__dots-container'>
        <ul className='image-carousel__dots'>
          {carouselData.map((_, index) => {
            return (
              <li 
                className={`image-carousel__dot ${currentSlideIndex === index ? 'dot--current' : ''}`}
                key={index} 
                onClick={() => handleImageSlides(index)}>
              </li>
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
  transform:translate(100%);
  transition:all 0.3s linear;
  opacity:0;
}

.slide--prev {
  transform:translate(-100%);
}

.slide--current {
  transform:translate(0%);
  opacity:1;
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
  z-index:10;
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













// movement buttons / movementBtns

  .movement-btn {
    position:absolute;
    border:none;
    background:rgba(25,25,25,0.25);
    padding:0 1rem;
    opacity:0.8;
    transition: opacity 0.85s ease, background 0.5s ease;
    z-index:1;
    font-size:2.25rem;
    height:100%;
  }

  .movement-btn-prev {
    left:0;
  }

  .movement-btn-next {
    left:100%;
    transform:translateX(-100%);
  }

  .movement-btn:hover {
    cursor:pointer;
    background:rgba(25,25,25,0.35);
  }

  .image-carousel__slide:hover .movement-btn {
    opacity:1;
  }











// dots
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













// mobile versions
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