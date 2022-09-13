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
            <li><a href={document1}>O‘RQ-684 22.04.2021</a></li>
            <li><a href={document2}>O‘RQ-730 23.11.2021</a></li>
            <li><a href={document3}>YTH xabarnoma blankasi</a></li>
            <li><a href={document4}>Guvohnoma Assistans</a></li>
            <li><a href={document5}>OZBEKINVEST ASS ISTANS Аудит.отчет</a></li>
            <li><a href={document6}>Fuqarolik kodeksi</a></li>
          </ul>
        </div>
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Help;
