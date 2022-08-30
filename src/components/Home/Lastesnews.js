import React from 'react'
import '../../Styles/Lastesnews.css'
import Card1 from '../../Images/img/123.png'
import Card2 from '../../Images/img/146.jpg'
import Card3 from '../../Images/news/invest.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Lastesnews() {
  const {t} = useTranslation()
  return (
    <section className='Lastesnews'>
      <div className="container">
        <h2 className='lastes-title'>{t('last__news')}</h2>
        <div className="lastes-news">
          <div className='lastes-info'>
            <img className='lastes-news-img1 lastes-news-img' src={Card1} alt="" />
            <div className='lastes-info__texts'>
              <p className='lastes-info__data'>August 9,2022 </p>
              <h3 className='lastes-info__title'>Dolor sit amet, consectetur adipiscing elit. </h3>
              <p className='lastes-info__info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada proin vitae, sit vel sit ac quam. Imperdiet ut imperdiet cursus in donec. Odio dictum.</p>
            </div>
          </div>

          <div className='lastes-info'>
            <img className='lastes-news-img2 lastes-news-img' src={Card2} alt="" />

            <div className='lastes-info__texts mb-106'>
              <p className='lastes-info__data'>August 9,2022  </p>
              <h3 className='lastes-info__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui. </h3>
              <p className='lastes-info__info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum dui pellentesque gravida lacus, ultrices at elementum. Pellentesque dictum risus ultrices tortor. Sapien morbi sagittis quis cursus. Sit tellus neque ornare mauris. Ut cras at tempus metus. </p>
            </div>

            <div className='lastes-info__texts'>
              <p className='lastes-info__data'>August 9,2022  </p>
              <h3 className='lastes-info__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui. </h3>
              <p className='lastes-info__info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet viverra tincidunt luctus morbi dui. Volutpat sollicitudin adipiscing quam egestas tempus ut. Sollicitudin sem facilisis vel urna amet dui nibh ipsum. </p>
            </div>
          </div>

          <div className='lastes-info'>
            <div className='lastes-info__texts mb-81'>
              <p className='lastes-info__data'>August 9,2022  </p>
              <h3 className='lastes-info__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui. </h3>
              <p className='lastes-info__info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis bibendum non eget fermentum purus tristique arcu enim enim. Volutpat a neque, ornare nisl tincidunt enim facilisis eros. Natoque nulla vel faucibus sed. </p>
            </div>

            <img className='lastes-news-img3 lastes-news-img' src={Card3} alt="" />

            <div className='lastes-info__texts'>
              <p className='lastes-info__data'>August 9,2022  </p>
              <h3 className='lastes-info__title'>Posuere ac at at mi sed. </h3>
              <p className='lastes-info__info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet viverra tincidunt luctus morbi dui. Volutpat sollicitudin adipiscing quam egestas tempus ut. Sollicitudin sem facilisis vel urna amet dui nibh ipsum.</p>
            </div>
          </div>
        </div>
        <Link to='/news'>
          <button className='view-more-btn'>{t('view__more__btn')}</button>
        </Link>
      </div>
    </section>
  )
}
