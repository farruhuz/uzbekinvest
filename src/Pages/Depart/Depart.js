import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "../../components/Home/Slider";
import { Link } from "react-router-dom";
import arrowRed from "../../Images/link_red_arrow.png";
import "./Depart.css";

const Depart = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="depart">
      <div className="affair__hero">
        <div className="affair__hero__box1">
          <h2 className="affair__lectus-title">
            Lectus elit odio nisl nec sit proin.
          </h2>
          <p className="affair__lectus-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ullamcorper ultrices ante imperdiet a in amet, et nibh. Rutrum
            dictumst ultricies consectetur dictumst quisque.
          </p>
          <button className="affair__lectus-btn">Adipiscing elit</button>
        </div>
        <div className="affair__hero__box2"></div>
      </div>
      {/*  */}
      <div className="med__affiar__depart">
        <div className="container">
          <div className="med__affiar__name__depart">
            <h3>Отдел международного сотрудничества</h3>
            <p>
              Отдел международного сотрудничества ООО «Узбекинвест Ассистанс»
              отвечает за организацию международных связей общества и
              обеспечение преемственности отношений.<br/><br/> Помимо налаживания
              сотрудничества с новыми партнерами, в обязанности отдела также
              входит организация оказания необходимой помощи туристам,
              прибывающим на территорию Республики Узбекистан с туристическим
              полисом.<br/><br/> Сотрудничаем со 127 медицинскими учреждениями во всех
              областных центрах и отдаленных районах Республики Узбекистан.
              Среди них самые крупные больницы: «“SHOX MED CENTRE”, “EMU
              Clinic”, “MDS Servis”, “Doktor-D”, “Azimed Hospital” “Star med”.<br/><br/>    
              Нашими зарубежными партнерами являются Euroasia Assistance, Inter
              Assist, Missadena, Jiang Tai Global Assistance, VMA LLC, AP
              Companies Ltd, Global Voyager Assistance, Remed Assistance и Balt
              Assistance.
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
            <h3>
              Отдел рассмотрения претензий по видам обязательного
              автострахования
            </h3>
            <p>
              По информации Колл-центра компании, необходимо выехать
              непосредственно на место дорожно-транспортного происшествия,
              изучить обстоятельства, повлекшие за собой наступление страхового
              случая, добровольно оформить Извещение (Европротокол в на родном
              языке) вместе с водителями проверить состояние транспортных
              средств, поврежденных в результате дорожно-транспортного
              происшествия, или сделать фото (видео), прием заявлений
              страхователей (водителей) о наступлении страхового случая,
              расследование страхового случая, в том числе проверка
              обоснованности представленного акта оценки, получение заключения
              комиссии о признании или непризнании страхового случая, сбор
              необходимых документов для получения полное страховое возмещение
              виновным и потерпевшим оказать помощь. <br />
              <br /> Составление ежедневных, еженедельных и ежемесячных отчетов
              о выполненных работах и ​​предоставление их директору общества.
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
            <h3>
              Отдел рассмотрения претензий по видам обязательного
              автострахования
            </h3>
            <p>
              На основании заявки, поступивший с Колл-центра Компании, Отдел по
              рассмотрению претензионных дел обеспечивает немедленный выезд на
              место ДТП, осуществляет видео-фотофиксацию поврежденных
              автомобилей и документов, организацию услуг эвакуатора при
              необходимости, техпомощь автомобилям, осуществляет услуги «трезвый
              водитель» и другие необходимые услуги. <br /> <br /> Организация
              первичной оценки поврежденных транспортных средств на месте ДТП.{" "}
              <br /> <br />
              Осуществление и организация технической поддержки автомобилей по
              заявкам местных и иностранных страховых и ассистанс компаний.
              <br /> <br />
              Рассмотрение поступивших обращений и выдача заключения по
              добровольным видам страхования транспортных средств.
              <br /> <br /> Осуществляет контроль за процессом ремонта
              поврежденных автомобилей путем выезда непосредственно в
              автомастерские, обеспечивает оформление 3-х стороннего акта
              приема-передачи в присутствии автовладельца и представителя
              автомастерской. <br /> <br />
              Готовить ежедневные, еженедельные и ежемесячные отчеты о
              выполненных работах и ​​представлять их директору общества.
              <br /> <br /> На сегодняшний день мы сотрудничаем с качественными
              техническими мастерскими в центре всех областей Республики
              Узбекистан и в городе Ташкенте. Это такие автомастерские, как ООО
              “JM-AVTO”, ООО “FORSAJ LYUKS AVTO”, YATT SHAYUNUSOV B.R, ООО “PIT
              STOP MOTORS” (Avtoritet), ООО MAJOR BUSINESS GROUP (CARBOX) и ООО
              « AVTOTEXXIZMAT»
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
