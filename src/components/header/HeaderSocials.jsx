import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pedro-melo-8841731b1/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/pedrohmelo" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/opedromel" target="_blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials