import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './pages/place-order/Placeorder'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import Login from './components/Login/Login'

const App = () => {

  const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <Login setShowLogin = {setShowLogin}/>: <></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeorder />} />
        </Routes>
    </div>
    <Footer />

    </>
  )
}

export default App
