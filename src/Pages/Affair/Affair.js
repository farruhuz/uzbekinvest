import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "../../components/Home/Slider";
import "./Affair.css";
import arrowRed from "../../Images/link_red_arrow.png";
import { Link } from "react-router-dom";
import uslug from "../../Images/uslug/uslug.png";
import { useTranslation } from "react-i18next";

const Affair = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="affair__hero">
        <div className="container">
          <div className="affair__hero__box2">
            <img src={uslug} alt="" />
          </div>
        </div>
      </div>
      <div className="affair__slider">
        <Slider />
      </div>
    </>
  );
};

export default Affair;
