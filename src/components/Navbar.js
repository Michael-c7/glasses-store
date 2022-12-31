import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import Logo from '../assets/RETNA.svg'
import { navItems } from '../utility/reusable'
import { useProductsContext } from '../contexts/products_context'

// icons
import { BsBag } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

import { useCartContext } from '../contexts/cart_context'

const Navbar = () => {
  const { productsInCart } = useCartContext()

  const [showMobileSearchbar, setShowMobileSearchbar] = React.useState(false)
  const { openSidebar } = useProductsContext()

  const [totalCarItemAmt, setTotalCarItemAmt] = React.useState([])


  React.useEffect(() => {
    setTotalCarItemAmt(productsInCart.reduce((total,curr) => total + curr.amount,0))
  },[productsInCart])

  return (
    <Wrapper className='navbar' id='navbar'>
      <div className='navbar__container-1'>
        <div className={`navbar__searchbar ${showMobileSearchbar && 'navbar__searchbar--mobile'}`}>
          <Searchbar/>
        </div>

        <div className='navbar__mobile__container-1'>
          <FaBars className='navbar__icon bars-icon' onClick={openSidebar}/>
          <div className='navbar__searchbar-icons'>
            {showMobileSearchbar ? (
            // close button
              <button className='navbar__search-btn' onClick={() => setShowMobileSearchbar(false)}>
              <MdClose className='navbar__icon'/>
            </button>
            ) : (
            // search button
              <button className='navbar__search-btn' onClick={() => setShowMobileSearchbar(true)}>
              <BiSearch className='navbar__icon'/>
              </button>
            )}
          </div>
        </div>

        <div className='navbar__logo-container'>
          <Link to='/'>
            <img src={Logo} alt='logo'/>
          </Link>
        </div>
        <div className='navbar__icon-container'>
          <div className='navbar__cart-container'>
            <Link to='/cart'>
              <BsBag className='navbar__icon'/>
            </Link>
            <div className='navbar__cart-item-amt'>
              <span>{totalCarItemAmt}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='navbar__container-2'>
        <ul className='navbar__items'>
          {navItems.map((item, index) => {
            return (
              <li className='navbar__item' key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  position:relative;
  text-align:center;
  padding:1.75rem 0;
  


  .navbar__container-1 {
    position;relative;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    margin: 0 var(--site-outer-margin);
  }
  

  .navbar__mobile__container-1 {
    display:none;
  }

  .navbar__container-2 {
    margin-top:1.25rem;
  }

  .navbar__items {
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .navbar__item {
    position:relative;
    margin:0 0.5rem;
    font-size:1rem;
    text-transform:uppercase;
    font-weight:500;
    transition:color 0.1s ease;
  }


  .navbar__item:hover {
    color:var(--red);
    cursor:pointer;
  }

  .navbar__item:after {
    content:'';
    position:absolute;
    width:0%;
    height:2px;
    background:var(--red);
    left:50%;
    bottom:0;
    transition:all 0.4s ease;
  }

  .navbar__item:hover:after {
    left:0;
    width:100%;
  }


  .navbar__icon {
    font-size:1.15rem;
  }

  .navbar__icon:hover {
    transition:0.1s ease;
    color:var(--red);
  }

  .navbar__icon-container {
    justify-self:end;
  }


  .navbar__cart-container {
    position:relative;
  }
  .navbar__cart-item-amt {
    position:absolute;
    top:0;
    left:50%;
    transform:translateY(-50%);
    min-width:20px;
    height:20px;
    padding:4px;
    font-size:0.85rem;
    color:#fff;
    background:var(--red);
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
  }



// mobile views
    @media only screen and (max-width: 768px) {
        .navbar__mobile__container-1 {
          display:flex;
          align-items:center;
        }

        .navbar__searchbar--mobile {
          position:absolute;
          display:flex;
          z-index:10;
          margin-bottom:-1rem;
        }

        .navbar__searchbar-icons {
          margin-left:1rem;
        }

        .navbar__search-btn {
          border:none;
          background:none;
        }

        .navbar__search-btn .navbar__icon {
          position:relative;
          font-size:1.5rem;
          top:3px;
        }

        .navbar__searchbar {
          display:none;
        }

        .navbar__searchbar--mobile {
          position:absolute;
          display:block;
          bottom:-1rem;
          margin-left:2rem;
          padding:0.5rem 1rem;
          background:#fff;
          filter: drop-shadow(0px 5px 5px rgba(100, 100, 100, 0.35));
        }
      
    }



    @media only screen and (max-width: 320px) {
      .navbar__container-1,
      .navbar__items {
        display:flex;
        flex-direction:column;
        margin:0;
      }

      .navbar__item {
        margin:0.25rem 0;
      }

      .navbar__logo-container {
        margin:1rem 0;
      }
    }
    
  }
`