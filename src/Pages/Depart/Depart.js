import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "../../components/Home/Slider";
import { Link } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import "./Depart.css";
import { useTranslation } from "react-i18next";

const Depart = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="depart">
      <div className="affair__hero__depart">
        <div className="affair__hero__box1__depart">
          <h2 className="affair__lectus-title__depart">
            Lectus elit odio <br/> nisl nec sit proin.
          </h2>
          <div>
            <p className="affair__lectus-info__depart">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ultrices ante imperdiet a in amet, et nibh. Rutrum
              dictumst ultricies consectetur dictumst quisque.
            </p>
            <button className="affair__lectus-btn__depart">{t('view__more__btn')}</button>
          </div>
        </div>
        <div className="affair__hero__box2__depart"></div>
      </div>
      {/*  */}
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t('depart__international')}</h3>
            <p>
              {t('depart__international__1')}<br/><br/> 
              {t('depart__international__2')}<br/><br/> 
              {t('depart__international__3')}<br/><br/>
              {t('depart__international__4')}
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
      {/*  */}
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t('depart__car')}</h3>
            <p>{t('depart__car__1')}<br/><br/>{t('depart__car__2')}</p>
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
      {/*  */}
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>{t('depart__may')}</h3>
            <p>
              {t('depart__may__1')}<br/><br/> 
              {t('depart__may__2')}<br/><br/>
              {t('depart__may__3')}<br/><br/>
              {t('depart__may__4')}<br/><br/> 
              {t('depart__may__5')}<br/><br/>
              {t('depart__may__6')}<br/><br/>
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
      {/*  */}
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>Юридическим лицам</h3>
            <p>
              В соответствии с требованиями законодательства в целях возврата
              государственных средств истребовать и (или) взыскать в судебном
              порядке материальный ущерб, причиненный в порядке регресса, с лиц,
              виновных в страховом случае.
              <br />
              <br /> Представляет в установленном порядке интересы ООО
              “Узбекинвест Ассистанс” и клиентов Ассистанса в хозяйственном,
              гражданском, уголовном судах, а также в других органах при
              осуществлении права регрессного требования к виновным в нанесении
              ущерба лицам и защите интересов ООО “Узбекинвест Ассистанс” и его
              клиентов. <br />
              <br /> Анализирует и обобщает результаты рассмотрения
              претензионных и судебных дел, а также изучает практику заключения
              и исполнения договоров <br />
              <br /> Проводит правовую экспертизу документации, а также
              визирование договоров и других документов заключаемых
              (составляемых) ООО “Узбекинвест Ассистанс” и его клиентами.
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
      {/*  */}
      <div className="affair__slider">
        <Slider />
      </div>
    </div>
  );
};

export default Depart;
