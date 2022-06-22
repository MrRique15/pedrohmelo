import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rz35cur', 'template_mf0ousp', form.current, 'cW3_PMIaBCfXotYLz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      e.target.reset(); /*para resetar a caixa de mensagens*/
  };

  return (
    <section id='contact'>
      <h5>Entre em Contato</h5>
      <h2>Fale Comigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>phmc_1995@hotmail.com</h5>
            <a href="mailto:phmc_1995@hotmail.com" target="_blank">Envie uma mensagem</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(44)98802-6367</h5>
            <a href="https://api.whatsapp.com/send?phone=+5544988026367" target="_blank">Envie uma mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu Nome Completo' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Envie uma Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact