import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça um Pouco</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>4+ anos estudando Ciência da Computação</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>3+</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>5+ Projetos Completos</small>
            </article>
          </div>
          <p>Olá! Me chamo Pedro, sou um estudante do quarto ano de Ciência da Computação na Universidade Estadual de Maringá (UEM).</p>
          <p>Atualmente, além de estudar ciência da computação, eu também foco em melhorar minhas habilidades como programador web/mobile.</p>
          <p>No meu tempo livre eu costumo ler, jogar (como qualquer outro nerd por aí) e brincar com meus cachorros, como pode ver na foto rs.</p>
          <p>Ah, e não menos importante, venho procurando oportunidades para trabalhar no exterior como desenvolvedor!</p>

          <a href="#contact" className='btn btn-primary'>Fale Comigo</a>
        </div>
      </div>
    </section>
  )
}

export default About