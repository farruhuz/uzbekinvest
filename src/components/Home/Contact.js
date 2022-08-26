import React from 'react'
import '../../Styles/Contact.css';

const Contact = ()=> {
  return (
    <section className='Contact'>
      <div className="container">
        <div className='contact-info'>
          <div className='contact-info__info'>
            <div className='contact-texts'>
              <h3 className='contact-info__info-title'>Contact</h3>
              <p className='contact-info__info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget vitae volutpat, ultricies justo cursus. Vel, vitae, commodo bibendum tellus, et laoreet.</p>
            </div>

            <div className='contact-contact'>
              <div className='contact-adddres-info'>
                <p className='contact-addres-title'>Adress</p>
                <p className='contact-addres-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <div className='contact-adddres-info'>
                <p className='contact-addres-title'>Adress</p>
                <p className='contact-addres-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className='contact-contact'>
              <div className='contact-adddres-info'>
                <p className='contact-addres-title'>Adress</p>
                <p className='contact-addres-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>

              <div className='contact-adddres-info'>
                <p className='contact-addres-title'>Adress</p>
                <p className='contact-addres-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              
            </div>
          </div>
          <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5823.4391687421585!2d69.30665471328076!3d41.30800517387095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5c8f1bb33a3%3A0xa193c5c2e7c5a340!2sKoko%20Digital%20Agency!5e0!3m2!1sru!2s!4v1660646813473!5m2!1sru!2s" frameborder="0"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact