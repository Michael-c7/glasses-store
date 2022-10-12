import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../contexts/products_context'

/*this is for when the sidebar gets opened */
const Overlay = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()

  return (
    <Wrapper>
      <div onClick={closeSidebar} className={`overlay ${isSidebarOpen ? ' overlay--on ' : 'overlay--off'}`}></div>
    </Wrapper>
  )
}

export default Overlay

const Wrapper = styled.section`
    .overlay {
      position:absolute;
      width:100%;
      height:100%;
      background:rgba(50,50,50,0.5);
      top:0;
      transition:all 0.1s ease;
    }




    .overlay--on {
      // only thing above this will be the sidebar
      z-index:998;
      opacity:1;

    }

    .overlay--off {
      // only thing above this will be the sidebar
      z-index:-998;
      opacity:0;

    }
`