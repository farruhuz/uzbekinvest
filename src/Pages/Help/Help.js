import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "../../components/Home/Contact";
import Slider from "../../components/Home/Slider";
import Accardion from "./Accardion";
import "./Help.css";

const accordionData = [
  {
    title:
      "Fames condimentum at sit tristique. Turpis pharetra, odio lorem aliquet.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Feugiat viverra eu consectetur.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Vulputate tempor nisi, magnis nisi. Non porttitor posuere vestibulum ac ipsum eu adipiscing.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Gravida platea venenatis nisl adipiscing placerat.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Blandit non commodo odio commodo arcu, ultricies et a.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Dolor mattis nec ullamcorper felis. Lacus, leo morbi leo mi non sapien, laoreet tempor sit.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Id at sem at mauris, pretium, morbi sit at.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Tempus convallis amet, arcu amet.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "A dictum elit risus mattis sed tortor, pharetra diam sollicitudin. Ut lectus facilisi donec pellentesque.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Sagittis, a diam semper quis turpis elit amet. Placerat elementum est adipiscing posuere.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  },
  {
    title:
      "Arcu ut mauris neque semper.",
    content: 
      `Ullamcorper suscipit lectus ac, tincidunt. Dui, pretium leo et dolor 
      tempor ultricies diam fermentum. Urna consectetur commodo facilisi ut ridiculus. 
      Turpis hendrerit elementum non dignissim. In tempus dictum magna adipiscing 
      scelerisque bibendum. Cras pharetra faucibus nullam ultrices tristique facilisis 
      velit scelerisque. Nam integer adipiscing maecenas sed sed sit nunc. Fames condimentum 
      at sit tristique. Turpis pharetra, odio lorem aliquet. Turpis ut facilisis nunc lacus, at 
      tellus sapien. Dictum lectus donec egestas turpis duis id sit morbi. Etiam varius mauris 
      sodales tristique sed condimentum pellentesque viverra.`,
  }
];
const Help = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="help">
        <div className="container">
          <h2>{t('help')}</h2>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accardion title={title} content={content} />
            ))}
          </div>
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
