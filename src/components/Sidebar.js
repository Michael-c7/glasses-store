import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { navItems } from '../utility/reusable'
import { RiCloseLine } from 'react-icons/ri'
import { useProductsContext } from '../contexts/products_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()

  return (
    <SidebarContainer>
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar--open' : 'sidebar--close'}`}>
        <header className='sidebar__header'>
            <h2 className='sidebar__heading'>Menu</h2>
            <button className='sidebar__close-btn' onClick={closeSidebar}>
              <RiCloseLine/>
            </button>
          </header>
          <ul className='sidebar__items'>
            {navItems.map((item, index) => {
              return (
                <li key={index} className='sidebar__item'>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
      </aside>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.nav`
  .sidebar {
    --sidebar-width:300px;
    position:absolute;
    background:#fff;
    height:100%;
    width:300px;
    top:0;
    transition:transform 0.4s ease, z-index 0s;
  }

  
  .sidebar__header {
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:var(--red);
    color:#fff;
    padding:0.25rem 1rem;
  }

  .sidebar__close-btn {
    border:none;
    background:none;
    color:#fff;
    font-size:1.5rem;
    cursor:pointer;
  }

  .sidebar__items {
    padding:0 1rem;
  }

  .sidebar__item {
    margin:1rem 0;
    color:#000;
  }


  .sidebar--open {
    z-index:999;
    transform:translateX(-0px);
  }

  .sidebar--close {
    z-index:-999;
    transform:translateX(-300px);
    transition:transform 0.4s ease, z-index 2s;
  }


`