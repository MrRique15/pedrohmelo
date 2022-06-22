import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} donwload className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Fale Comigo</a>
    </div>
  )
}

export default CTA