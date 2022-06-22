import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá! Eu Sou </h5>
        <h1>Pedro Melo</h1>
        <h5 className="text-light">Desenvolvedor Frontend</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Rolagem</a>
      </div>
    </header>
  )
}

export default Header