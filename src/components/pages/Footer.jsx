import React from 'react'
import { FaFacebookSquare, FaGithub ,FaTwitter  } from 'react-icons/fa';
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <footer>
        <div className='footer_wrapper'> <h2> Follow me on social media</h2>
        <div className='social_media'>
           
       
        <a href='#'> <FaGithub  /></a>
        <a href='#'> <FaFacebookSquare  /></a>
        <a href='#'> <FaTwitter  /></a>
        <a href='#'> <TiSocialLinkedin  /></a>
        </div>
        </div>
    </footer>
  )
}

export default Footer