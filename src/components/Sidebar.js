import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { navItems } from '../utility/reusable'
import { RiCloseLine } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <nav className='sidebar'>
        <header className='sidebar__header'>
          <h2 className='sidebar__heading'>Menu</h2>
          <button className='sidebar__close-btn'>
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
      </nav>
      
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.section`
// the sidebar container
  position:absolute;
  width:100%;
  height:100%;
  background:rgba(50,50,50,0.5);
  top:0;

// the actual sidebar
  .sidebar {
    position:absolute;
    background:#fff;
    height:100%;
    width:350px;
    top:0;
    
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

`