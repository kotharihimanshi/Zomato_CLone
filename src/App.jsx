import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './pages/place-order/Placeorder'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import Login from './components/Login/Login'
import OrderConfirmation from './pages/OrderConfirmation'
import Chatbot from './components/ChatBot/ChatBot'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false) 

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}

      <div className='app'>
        <Navbar
          setShowLogin={setShowLogin}
          toggleChatbot={() => setShowChatbot(prev => !prev)} 
          showChatbot={showChatbot} 
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>

      <Footer />

      {/* ✅ Conditionally render the chatbot */}
      {showChatbot && <Chatbot />}
    </>
  )
}

export default App
