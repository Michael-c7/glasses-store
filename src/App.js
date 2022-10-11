import React from 'react';

// pages
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Error from './pages/Error';
// components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


function App() {
  const [data, setData] = React.useState(null)

  const fetchData = _ => {

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => setData(data)); 
  }

  React.useEffect(() => {
    // fetchData()
  }, [])


  React.useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <h2>no routes</h2>
  );
}

export default App;
