import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import yrudik from "../../Images/otdel/yurudik.jpg";
import yrudik2 from "../../Images/otdel/yurudik2.jpg";
import Swipers from "../Swiper/Swipers";
import "./Otdel4.css";

const Otdel4 = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  const {t} = useTranslation()
  return (
    <div className="depart">
      <div className="affair__hero__depart">
        <div className="affair__hero__box2__depart"><Swipers xalqaro={yrudik} xalqaro2={yrudik2}/></div>
      </div>
      <div className="med__affiar__depart ">
        <div className="container">
          <div className="med__affiar__name__depart yurdik__otdel">
            <h3>{t('depart__legal')}</h3>
            <p>
              {t('depart__legal__1')}
              <br />
              <br />
              {t('depart__legal__2')}
              <br />
              <br />
              {t('depart__legal__3')}
              <br />
              <br />
              {t('depart__legal__4')}
            </p>
          </div>
          {/* <div className="med__affiar__cards__depart">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Otdel4;
