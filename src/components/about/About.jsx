import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

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
              <h5>Experience</h5>
              <small>4+ Years Studying Computer Science</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>Hi! I'm Pedro, a forth year Computer Science student at State University of Maringá.</p>
          <p>Currently i've been focusing my studies at JavaScript/React Native, aiming to be a web/mobile developer. I enjoy helping others in their studies/tasks 
            as it is also an opportunity to test my knowledge and learn more (kinda applying the pair programming concept in a personal way).</p>
          <p>In my free time i enjoy playing games, reading (like any other geek out there) and playing with my dogs (look how cute they are!).</p>
          <p> Oh, and last but not least, I'm also looking for opportunities to work abroad! </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About