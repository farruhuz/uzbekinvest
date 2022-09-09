import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import ixtiyoriy from "../../Images/otdel/ixtiyoriy.jpg";
import ixtiyoriy2 from "../../Images/otdel/ixtiyoriy2.jpg";
import Swipers from "../Swiper/Swipers";

const Otdel3 = ({otdelInfo}) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  const {t} = useTranslation()
  return (
    <div className="depart">
      <div className="affair__hero__depart">
        <div className="affair__hero__box2__depart">
          <Swipers xalqaro={ixtiyoriy} xalqaro2={ixtiyoriy2}/>
        </div>
      </div>
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t('depart__may')}</h3>
            <p>
              {t('depart__may__1')}
              <br />
              <br />
              {t('depart__may__2')}
              <br />
              <br />
              {t('depart__may__3')}
              <br />
              <br />
              {t('depart__may__4')}
              <br />
              <br />
              {t('depart__may__5')}
              <br />
              <br />
              {t('depart__may__6')}
              <br />
              <br />
              {t('depart__may__7')}
            </p>
          </div>
          <div className="med__affiar__cards__depart">
            <div className="departments__box2__child__depart">
              <h4>Diam hac nulla vulputate vivamus</h4>
              <p className="departments__box2__child__depart__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper senectus gravida amet.
              </p>
              <div>
                <Link to="/servic" className="link">
                  Lorem Ipsum <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child__depart">
              <h4>Diam hac nulla vulputate vivamus</h4>
              <p className="departments__box2__child__depart__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper senectus gravida amet.
              </p>
              <div>
                <Link to="/servic" className="link">
                  Lorem Ipsum <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child__depart">
              <h4>Diam hac nulla vulputate vivamus</h4>
              <p className="departments__box2__child__depart__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper senectus gravida amet.
              </p>
              <div>
                <Link to="/servic" className="link">
                  Lorem Ipsum <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
            <div className="departments__box2__child__depart">
              <h4>Diam hac nulla vulputate vivamus</h4>
              <p className="departments__box2__child__depart__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ullamcorper senectus gravida amet.
              </p>
              <div>
                <Link to="/servic" className="link">
                  Lorem Ipsum <img src={arrowRed} alt="red arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otdel3;
