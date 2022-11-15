import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaPinterestP,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer__various-links'>

        <address className='footer__items-container footer__contact-container'>
          <h2 className='footer__items-heading'>Contact</h2>
          <ul className='footer__items'>
            <li className='footer__item'>
              <div className='footer__contact-title'>Address: </div>
              <span className='footer__item-details'>123 Glover view Lane, HI 01234</span>
            </li>
            <li className='footer__item'>
              <div className='footer__contact-title'>Phone: </div>
              <span className='footer__item-details'>
              <a className='footer__item-link' href="tel:+11234567890">+1-123-456-7890</a>
              </span>
            </li>
            <li className='footer__item'>
              <div className='footer__contact-title'>Fax: </div>
              <span className='footer__item-details'>0123-456-789</span>
            </li>
            <li className='footer__item'>
              <div className='footer__contact-title'>Email: </div>
              <span className='footer__item-details'>
                <a className='footer__item-link' href='mailto:GlassesStore@aol.com'>GlassesStore@aol.com</a>
              </span>
            </li>
          </ul>
        </address>

        <div className='footer__items-container'>
          <h2 className='footer__items-heading'>Information</h2>
          <ul className='footer__items'>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>About Us</Link>
            </li>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Shipping Info</Link>
            </li>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Privacy Policy</Link>
            </li>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Terms & Conditions</Link>
            </li>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className='footer__items-container'>
          <h2 className='footer__items-heading'>Services</h2>
          <ul className='footer__items'>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Brands</Link>
            </li>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Gift Certificates</Link>
            </li>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Affiliate</Link>
            </li>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Specials</Link>
            </li>
            <li className='footer__item'>
              <Link className='footer__item-details footer__item-link' to='/'>Site Map</Link>
            </li>
          </ul>
        </div>

        <div className='footer__items-container'>
          <h2 className='footer__items-heading'>Find Us On</h2>
          <ul className='footer__items'>
            <li className='footer__item'>
              <div className='footer__social-media-icon footer__facebook-icon'><FaFacebookF/></div>
              <span className='footer__item-details'>
                <Link className='footer__item-link' to='/'>Facebook</Link>
              </span>
            </li>
            <li className='footer__item'>
              <div className='footer__social-media-icon footer__twitter-icon'><FaTwitter/></div>
              <span className='footer__item-details'>
                <Link className='footer__item-link' to='/'>Twitter</Link>
              </span>
            </li>
            <li className='footer__item'>
              <div className='footer__social-media-icon footer__youtube-icon'><FaYoutube/></div>
              <span className='footer__item-details'>
                <Link className='footer__item-link' to='/'>Youtube</Link>
              </span>
            </li>
            <li className='footer__item'>
              <div className='footer__social-media-icon footer__googlePlus-icon'><FaGooglePlusG/></div>
              <span className='footer__item-details'>
                <Link className='footer__item-link' to='/'>Google+</Link>
              </span>
            </li>
            <li className='footer__item'>
              <div className='footer__social-media-icon footer__pinterest-icon'><FaPinterestP/></div>
              <span className='footer__item-details'>
                <Link className='footer__item-link' to='/'>Pinterest</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__copyright-container'>
        <p className='footer__copyright-text'>Glasses Store © {new Date().getFullYear()}</p>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  background:rgb(250,250,250);

  .footer__various-links {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    max-width:var(--card-outer-width);
    margin:0 auto;
    padding:5rem 0;
  }


  .footer__items-container {
    font-style: normal;
  }

  .footer__items-heading {
    font-weight:400;
    margin-bottom:1rem;
  }

  .footer__item {
    margin:0.5rem 0 0.5rem;
    display:flex;
  }


  .footer__contact-title  {
    margin-right:0.25rem;
  }
  
  .footer__social-media-icon  {
    margin-right:0.75rem;
  }

  .footer__item-details {
    color:gray;
    font-weight:300;
    transition:50ms ease;
    margin: 0 0.25rem 0 0;
  }

  .footer__item-link:hover {
    color:#000;
  }

  .footer__facebook-icon {
    margin-top:2px;
  }

  .footer__twitter-icon {
    margin-top:2px;
  }

  .footer__youtube-icon {
    margin-top:2px;
  }

  .footer__googlePlus-icon {
    font-size:1.25rem;
  }

  .footer__pinterest-icon {
    margin-top:2px;
  }

  .footer__copyright-container {
    text-align:center;
    padding:1rem 0;
    font-weight:400;
    color:#444;
    border-top:1px solid #ddd;
  }




  @media (max-width:1260px) {
    .footer__various-links {
      padding:3rem 1rem;
    }
  }

  @media (max-width:768px) {
    .footer__various-links {
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      margin:0 auto;
      padding:3rem 0;
      text-align:center;
    }

    .footer__items-container {
      margin:1rem 0;
    }

    .footer__items-heading {
      margin-bottom:0.25rem;
    }

    .footer__items {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
  }

`