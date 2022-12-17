import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

import Breadcrumb from '../components/Breadcrumb'
// import Button1 from '../styledComponents/Button1'


// placeholder images
import placeholder1 from '../assets/singleProductImagePlaceholders/chuttersnap-G8ioIHUDfNc-unsplash.jpg'
import placeholder2 from '../assets/singleProductImagePlaceholders/oli-woodman-s7gRHGEmX78-unsplash.jpg'
import placeholder3 from '../assets/singleProductImagePlaceholders/scott-van-daalen-UsALNdok2m4-unsplash.jpg'
import placeholder4 from '../assets/singleProductImagePlaceholders/sincerely-media-d05w6_7FaPM-unsplash.jpg'




const SingleProduct = () => {
  const sampleLocation = useLocation();
  let currentProductId = sampleLocation.pathname.slice(15)

  console.log(currentProductId)

  let testDesc = 'Imagine the advantages of going big without slowing down. The big 19" 941BW monitor combines wide aspect ratio with fast pixel response time, for bigger images, more room to work and crisp motion. In addition, the exclusive MagicBright 2, MagicColor and MagicTune technologies help deliver the ideal image in every situation, while sleek, narrow bezels and adjustable stands deliver style just the way you want it. With the Samsung 941BW widescreen analog/digital LCD monitor, its not hard to imagine.'

  // customPath
  return (
    <Wrapper>
      <Breadcrumb currentLocation={'item name here'} customPath={['Home', 'Products']}/>
      <div className='singleProduct__container'>
        {/*image*/}
        <div className='singleProduct__image-container'>
          <div className='singleProduct__main-image-container'>
            <img className='singleProduct__main-image' src={placeholder1} alt=''/>
          </div>
          <div className='singleProduct__alt-image-container'>
            <img className='singleProduct__alt-image' src={placeholder1} alt=''/>
            <img className='singleProduct__alt-image' src={placeholder2} alt=''/>
            <img className='singleProduct__alt-image' src= {placeholder3} alt=''/>
            <img className='singleProduct__alt-image' src={placeholder4} alt=''/>
          </div>
        </div>
        {/*info*/}
        <div className='singleProduct__info-container'>
          <div className='info-section'>
            <h2>product title here</h2>
            <div className='info-review-part'>
              <div>star amt in stars here</div>
              <div>22 reviews</div>
            </div>
          </div>

          <div className='info-section'>
            <p>Product Code: Product 633-434-3224</p>
            <p>Availability: In Stock</p>
          </div>

          <div className='info-section'>
            <p>$200.00</p>
            <p>Ex Tax: $200.00</p>
          </div>

          <div className='info-section'>
            <p>Qty</p>
            <div>
              <div className='amt'>
                <button>prev</button>
                <input type='text'/>
                <button>next</button>
              </div>
              {/*use button1 */}
              <button>Add to Cart</button>
            </div>
          </div>
        </div>


        {/*description*/}
        <div className='singleProduct__description-container'>
          <ul className='nav-tabs'>
            <li className='nav-tab'>Description</li>
          </ul>
          <p>{testDesc}</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleProduct


const Wrapper = styled.section`

img {
  width:200px;
}

`