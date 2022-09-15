import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Card.css";

const Card = ({ cardInfo }) => {
  console.log(cardInfo);
  const { t } = useTranslation();
  const internatinalInfo = [
    {
      title: t("friend__1__1__title"),
      subtitle: t("friend__1__1__subtitle"),
      subtitle__2: t("friend__1__1__subtitle__2") || " ",
    },
    {
      title: t("friend__1__2__title"),
      subtitle: t("friend__1__2__subtitle"),
    },
    {
      title: t("friend__1__3__title"),
      subtitle: t("friend__1__3__subtitle"),
    },
  ];
  const internatinalInfo2 = [
    {
      title: t("friends__1__1__title"),
      subtitle: t("friends__1__1__subtitle"),
      subtitle__2: t("friends__1__1__subtitle__2") || " ",
      subtitle__3: t("friends__1__1__subtitle__3") || " ",
      subtitle__4: t("friends__1__1__subtitle__4") || " ",
      subtitle__5: t("friends__1__1__subtitle__5") || " ",
      subtitle__6: t("friends__1__1__subtitle__6") || " ",
    },
    {
      title: t("friends__2__1__title"),
      subtitle: t("friends__2__1__subtitle"),
      subtitle__2: t("friends__2__1__subtitle__2") || " ",
      subtitle__3: t("friends__2__1__subtitle__3") || " ",
      subtitle__4: t("friends__2__1__subtitle__4") || " ",
      subtitle__5: t("friends__2__1__subtitle__5") || " ",
      subtitle__6: t("friends__2__1__subtitle__6") || " ",
      subtitle__7: t("friends__2__1__subtitle__7") || " ",
    },
  ];
  const internatinalInfo3 = [
    {
      title: t("friendss__1__1__title"),
      subtitle: t("friendss__1__1__subtitle"),
      subtitle__2: t("friendss__1__1__subtitle__2") || " ",
      subtitle__3: t("friendss__1__1__subtitle__3") || " ",
      subtitle__4: t("friendss__1__1__subtitle__4") || " ",
      subtitle__5: t("friendss__1__1__subtitle__5") || " ",
      subtitle__6: t("friendss__1__1__subtitle__6") || " ",
      subtitle__7: t("friendss__1__1__subtitle__7") || " ",
      subtitle__8: t("friendss__1__1__subtitle__8") || " ",
      subtitle__9: t("friendss__1__1__subtitle__9") || " ",
    },
  ];
  const internatinalInfo4 = [
    {
      title: t("avto__s__1__title"),
      subtitle: t("avto__s__1__subtitle"),
      subtitle__2: t("avto__s__1__subtitle__2") || " ",
      subtitle__3: t("avto__s__1__subtitle__3") || " ",
      subtitle__4: t("avto__s__1__subtitle__4") || " ",
      subtitle__5: t("avto__s__1__subtitle__5") || " ",
      subtitle__6: t("avto__s__1__subtitle__6") || " ",
    },
  ];
  const internatinalInfo5 = [
    {
      title: t("avto__s__2__title"),
      subtitle: t("avto__s__2__subtitle"),
      subtitle__2: t("avto__s__2__subtitle__2") || " ",
      subtitle__3: t("avto__s__2__subtitle__3") || " ",
      subtitle__4: t("avto__s__2__subtitle__4") || " ",
      subtitle__5: t("avto__s__2__subtitle__5") || " ",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (cardInfo.title === "Yo’l  transport hodisasi tog’risidagi xabarnoma" || cardInfo.title === "ЕВРО ПРОТОКОЛ") {
    return (
      <div className="cards__Net">
        <div className="container">
          <div className="card__Net__box">
            <h2>{t("")}</h2>
            {internatinalInfo5.map((el) => {
              return (
                <div className="card__info">
                  <h2>{el.title}</h2>
                  <p>{el.subtitle}</p>
                  <p>{el.subtitle__2 || " "}</p>
                  <p>{el.subtitle__3 || " "}</p>
                  <p>{el?.subtitle__4 || " "}</p>
                  <p>{el?.subtitle__5 || " "}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } 
  else if (cardInfo.title === "TVEFJMS" || cardInfo.title === "ОСГОВТС") {
    return (
      <div className="cards__Net">
        <div className="container">
          <div className="card__Net__box">
            <h2>{cardInfo.title === "OSGOVTS"}</h2>
            {internatinalInfo4.map((el) => {
              return (
                <div className="card__info">
                  <h2>{el.title}</h2>
                  <p>{el.subtitle}</p>
                  <p>{el.subtitle__2 || " "}</p>
                  <p>{el.subtitle__3 || " "}</p>
                  <p>{el.subtitle__4 || " "}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="cards__Net">
      <div className="container">
        <div className="card__Net__box">
          <h2>
            {(cardInfo.id === 1 && t("otdel__1__title__2")) ||
              (cardInfo.id === 2 && t("otdel__1__title__2")) ||
              (cardInfo.id === 3 && t("otdel__1__title__3"))}
          </h2>
          {cardInfo.id === 1 &&
            internatinalInfo.map((el) => {
              return (
                <div className="card__info">
                  <h2>{el.title}</h2>
                  <p>{el.subtitle}</p>
                  <p>{el.subtitle__2 || " "}</p>
                </div>
              );
            })}
          {cardInfo.id === 2 &&
            internatinalInfo2.map((el) => {
              return (
                <div className="card__info">
                  <h2>{el.title}</h2>
                  <p>{el.subtitle}</p>
                  <p>{el.subtitle__2}</p>
                  <p>{el.subtitle__3}</p>
                  <p>{el.subtitle__4}</p>
                  <p>{el.subtitle__5}</p>
                  <p>{el.subtitle__6}</p>
                  <p>{el.subtitle__7}</p>
                </div>
              );
            })}
          {cardInfo.id === 3 &&
            internatinalInfo3.map((el) => {
              return (
                <div className="card__info">
                  <h2>{el.title}</h2>
                  <p>{el.subtitle}</p>
                  <p>{el.subtitle__2}</p>
                  <p>{el.subtitle__3}</p>
                  <p>{el.subtitle__4}</p>
                  <p>{el.subtitle__5}</p>
                  <p>{el.subtitle__6}</p>
                  <p>{el.subtitle__7}</p>
                  <p>{el.subtitle__8}</p>
                  <p>{el.subtitle__9}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
