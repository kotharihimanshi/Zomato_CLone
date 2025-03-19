import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [Menu, setMenu] = useState("home");
  const {getTotalAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
    <Link to='/'><img src={assets.logo} alt="" className='logo' /> </Link> 
    <ul className="navbar-menu">
      <Link to='/' onClick={()=> setMenu("home")} className={Menu === "home" ? "active":""}>Home </Link>
      <a href='#exploremenu' onClick={()=> setMenu("Menu")} className={Menu === "Menu" ? "active":""}>Menu </a>
      <a href='#AppDownload' onClick={()=> setMenu("Mobile App")} className={Menu === "Mobile App" ? "active":""}>Mobile App </a>
      <a href='#footer'  onClick={()=> setMenu("Contact Us")} className={Menu === "Contact Us" ? "active":""}>Contact Us </a>
    </ul>
    <div className="navbar-right">
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search">
        <Link to='./cart'> <img src={assets.basket_icon} alt="" /> </Link>
        <div className={getTotalAmount()===0 ? "":"dot"}>

        </div>
      </div>
      <button onClick={() => setShowLogin(true)}>Sign-in</button>
    </div>
      
    </div>
  )
}

export default Navbar
