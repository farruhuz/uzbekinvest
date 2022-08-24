import React from 'react'
import "../../Styles/Est.css"
import Arrow from '../../Images/link_white_arrow.png'
import Img1 from '../../Images/est-img1.png'
import Red from '../../Images/link_red_arrow.png'
import Img2 from '../../Images/est-img2.png'

export default function Est() {
  return (
    <section className='Est'>
      <div className="container">
        <div className='est-info'>
          <div className='est-info__blog top_esst-info__blog'>
            <div className='est-info__blogs'>
              <h3 className='est-info__blog-title'>Est dictum tincidunt </h3>

              <div className='est-info__blogs-info'>
                <p className='est-info__blogs-info__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem egestas luctus nec curabitur. Bibendum iaculis mauris augue nam non gravida odio vel habitasse. Euismod massa lorem vitae ut id nunc, ut consequat. Integer mattis sapien euismod mauris eu at tortor sed.</p>
                <div className='est-info__blogs-info__links'>
                  <a className='est-info__blogs-info__link' href="#">Lorem ipsum </a>
                  <img src={Arrow} alt="" />
                </div>
              </div>    
            </div>

            <div className='est-info__blogs2'>
              <p className='est-info__blogs2-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nec malesuada egestas libero volutpat. Sit a sit elit malesuada cras cursus tincidunt massa lectus. Elit.</p>
              <img src={Img1} alt="" />
            </div>
          </div>

          <div className='est-info__blog middle_esst-info__blog'>
            <div className='est-info__blogs3'>
              <p className='est-info__blogs3-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant est aliquam, sit nisi vulputate odio. Justo bibendum mi feugiat eros, ipsum, diam. Id varius odio suspendisse proin pulvinar dignissim sed. Vulputate cursus non id dolor, tortor eleifend congue. </p>
              
              <div className='est-info__blogs-info__links'>
                <a className='est-info__blogs-info__link2' href="#">Lorem ipsum </a>
                <img src={Red} alt="" />
              </div>
            </div>

            <div className='est-info__blogs4'>
              <h3 className='est-info__blogs4-title'>Euismod massa lorem vitae ut id nunc, ut consequat. Integer mattis sapien euismod mauris.</h3>
            </div>
          </div>

          <div className='voluputate-info__blog'>
            <img src={Img2} alt="" />
            
            <div className='voluputate-info__blogs'>
              <div className='voluputate'>
                <h3 className='voluputate-title'>Vulputate cursus non id dolor</h3>
                <p className='voluputate-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant est aliquam, sit nisi vulputate odio. Justo bibendum mi feugiat eros, ipsum, diam. Id varius odio suspendisse proin pulvinar dignissim sed. Vulputate cursus non id dolor, tortor eleifend congue. </p>
                <div className='est-info__blogs-info__links'>
                  <a className='est-info__blogs-info__link2' href="#">Lorem ipsum </a>
                  <img src={Red} alt="" />
                </div>
              </div>
            
              <div className='etiam'>
                <h3 className='etiam-title'>Etiam ultrices blandit ac sit.</h3>
                <p className='etiam-text'>Ultrices arcu nibh consequat vitae facilisis molestie lobortis. Libero nunc nisi, mauris risus. Id in vel nulla praesent enim. Nunc, mattis tristique feugiat viverra id sed sit. Urna aliquet quis sit duis elit et. </p>
                <div className='est-info__blogs-info__links'>
                  <a className='est-info__blogs-info__link' href="#">Lorem ipsum </a>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
