import React from 'react'
import {TiSocialFacebook} from "react-icons/ti"
import {TiSocialInstagram} from "react-icons/ti"
import {TiSocialTwitter} from "react-icons/ti"
import {TiSocialYoutube} from "react-icons/ti"
import "./styles/Header.scss"
import logo from "./img/png.webp"



export default function Header() {
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
      <div className="Header__nav">
        <div className="container">
        <img src={logo} alt="" />
        <div></div>
        </div>
      </div>
      
    </div>
  )
}