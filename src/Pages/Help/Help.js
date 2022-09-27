import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "../../components/Home/Contact";
import Slider from "../../components/Home/Slider";
import "./Help.css";
import document1 from "../../Images/file/doc1.doc";
import document2 from "../../Images/file/doc2.doc";
import document3 from "../../Images/file/habarnoma.pdf";
import document4 from "../../Images/file/guvohnoma.pdf";
import document5 from "../../Images/file/OZBEKINVEST.pdf";
import document6 from "../../Images/file/fuqarolik__kodeksi.pdf";

const Help = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="help">
        <div className="container">
          <h2>{t('help')}</h2>
          <ul className="documentlar">
            <li>
              <a href={document1}>O‘RQ-684 22.04.2021 </a>
              <p>{t('help__1')}</p>
            </li>
            <li>
              <a href={document2}>O‘RQ-730 23.11.2021 </a> 
              <p>{t('help__2')}</p>
            </li>
            <li>
              <a href={document3}>YTH xabarnoma blankasi </a> 
              <p>{t('help__3')}</p> 
            </li>
            <li>
              <a href={document4}>Guvohnoma Assistans</a> 
              <p>{t('help__4')}</p> 
            </li>
            <li>
              <a href={document5}>OZBEKINVEST ASS ISTANS Аудит.отчет </a> 
              <p>{t('help__5')}</p> 
            </li>
            <li>
              <a href={document6}>Fuqarolik kodeksi </a> 
              <p>{t('help__6')}</p> 
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="flip-down">
        <Slider />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Help;
