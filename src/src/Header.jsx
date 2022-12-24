import React from 'react'
import {TiSocialFacebook} from "react-icons/ti"
import {TiSocialInstagram} from "react-icons/ti"
import {TiSocialTwitter} from "react-icons/ti"
import {TiSocialYoutube} from "react-icons/ti"
import "./styles/Header.scss"
import logo from "./img/png.webp"



export default function Header({scroll}) {
  

  return (
    <div className='Header'>
        
      <div className="Header__top">
        <div className="container">
        <p>🧭 Mon - Fri: 9:00 - 19:00/ Closed on Weekends</p>
        <div className="social">
            <TiSocialFacebook/>
            <TiSocialInstagram/>
            <TiSocialTwitter/>
            <TiSocialYoutube id='demo'/>
        </div>
        </div>
      </div>
      <div className={`Header__nav${scroll > 200 ? "-fixed":""}` }>
        <div className="container">
        <img src={logo} alt="" />
        <div className='nav'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <button>Book a table</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}
