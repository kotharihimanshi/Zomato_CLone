import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footercontent">
            
            <div className="content-l">
                <img src={assets.logo} alt="" />
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, ex eget mattis gravida, urna tellus gravida velit velit sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, eligendi.
                </p>
                <div className="social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="content-r">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9034957570</li>
                    <li>contact@zomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 © Zomato.com - All Right Reserved.  </p>      
    </div>
  )
}

export default Footer
