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
              <small>3+ Years Studying Computer Science</small>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in elit ut odio maximus cursus malesuada vel dolor. Curabitur tincidunt sapien ipsum, quis porttitor est rhoncus non. Pellentesque elementum efficitur ex. Maecenas gravida sit amet nunc ac convallis. Sed suscipit elit ac felis volutpat, sed luctus lectus fringilla. Donec placerat massa sed dignissim vulputate. Morbi condimentum felis eu dignissim consequat. Phasellus euismod placerat lobortis.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About