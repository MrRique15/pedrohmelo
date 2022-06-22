import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PM</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/pedro-melo-8841731b1/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/pedrohmelo" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/opedromel" target="_blank"><FaInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Pedro Melo. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer