import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>O Que Eu Ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">

      <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Mobile</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desenvolvimento utilizando React Native</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Execução para plataformas iOS e Android</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manutenção do aplicativo</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desenvolvimento da estrutura digital</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Execução com as tecnologias mais recentes do mercado</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manutenção das páginas web</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Back End</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integração das páginas web/mobile com banco de dados Mongo DB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Utilização de estruturas de dados para projetos mais complexos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Uso de APIs conforme a necessidade do cliente</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services