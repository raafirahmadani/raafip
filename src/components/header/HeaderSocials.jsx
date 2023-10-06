import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/raafirahmadani" target="_blank"><BsLinkedin /></a>
        <a href="https://instagram.com/raafirahmadani" target="_blank"><BsInstagram /></a>
        <a href="https://facebook.com/rafiyosak" target="_blank"><BsFacebook /></a>
    
    </div>
  )
}

export default HeaderSocials