import React from 'react'
import '../../Styles/Luctus.css'
import galavni__1 from "../../Images/lectus/02.jpg";
import galavni__2 from "../../Images/lectus/03.jpg";
import galavni__3 from "../../Images/lectus/01.jpg";
import Swiper2 from '../../Pages/Swiper/Swiper2';
export default function Lectus() {
  return (
    <section className='Lectus'>
      <Swiper2 xalqaro={galavni__1} xalqaro2={galavni__2} xalqaro3={galavni__3}/>
    </section>
  )
}
