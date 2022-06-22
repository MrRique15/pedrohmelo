import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Gameplay App',
    github: 'https://github.com/pedrohmelo/Gym-App',
  },
  {
    id: 2,
    image: IMG1,
    title: 'OpenScience 2021',
    github: 'https://github.com/opensciense/opensciense2021'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} className='portfolio__item-image'/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
            </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio