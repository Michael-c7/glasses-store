import React from 'react'
import { useProductsContext } from '../contexts/products_context'


const Home = () => {
  const { 
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  } = useProductsContext()

  React.useEffect(() => {
    openSidebar()
  }, [])

  React.useEffect(() => {
    console.log(isSidebarOpen)
  }, [isSidebarOpen])


  return (
    <div>Home</div>
  )
}

export default Home