import React from 'react'
import '../../Styles/Tempus.css'
import InfoImg from '../../Images/tempus-info.png'

export default function Tempus() {
  return (
    <section className='Tempus'>
      <div className="container">
        <div className='tempus'>
          <h2 className='tempus-title'>Tempus morbi posuere egestas.</h2>

          <div className='tempus-info'>
            <img className='tempus-info__img' src={InfoImg} alt="" />

            <div className="tempus-info__card">
              <div>
                <h3 className='tempus-info__card-title'>Eget risus ullamcorper risus erat.</h3>
                <p className='tempus-info__card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum quam turpis justo, morbi ut id enim. Maecenas facilisis ultrices commodo, sociis. Rhoncus, viverra pharetra urna in malesuada nulla. </p>
              </div>
              <button className='tempus-info__card-btn'>Lorem ipsum</button>
            </div>
          </div>

          <div className='tempus-info'>
            <img className='tempus-info__img' src={InfoImg} alt="" />

            <div className="tempus-info__card">
              <div>
                <h3 className='tempus-info__card-title'>Eget risus ullamcorper risus erat.</h3>
                <p className='tempus-info__card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum quam turpis justo, morbi ut id enim. Maecenas facilisis ultrices commodo, sociis. Rhoncus, viverra pharetra urna in malesuada nulla. </p>
              </div>
              <button className='tempus-info__card-btn'>Lorem ipsum</button>
            </div>
          </div>

          <div className='tempus-info'>
            <img className='tempus-info__img' src={InfoImg} alt="" />

            <div className="tempus-info__card">
              <div>
                <h3 className='tempus-info__card-title'>Eget risus ullamcorper risus erat.</h3>
                <p className='tempus-info__card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum quam turpis justo, morbi ut id enim. Maecenas facilisis ultrices commodo, sociis. Rhoncus, viverra pharetra urna in malesuada nulla. </p>
              </div>
              <button className='tempus-info__card-btn'>Lorem ipsum</button>
            </div>
          </div>

          <div className='tempus-info'>
            <img className='tempus-info__img' src={InfoImg} alt="" />

            <div className="tempus-info__card">
              <div>
                <h3 className='tempus-info__card-title'>Eget risus ullamcorper risus erat.</h3>
                <p className='tempus-info__card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum quam turpis justo, morbi ut id enim. Maecenas facilisis ultrices commodo, sociis. Rhoncus, viverra pharetra urna in malesuada nulla. </p>
              </div>
              <button className='tempus-info__card-btn'>Lorem ipsum</button>
            </div>
          </div>
        </div>
        
        <button className='view-more-btn'>View more</button>

      </div>
    </section>
  )
}
