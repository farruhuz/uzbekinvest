import React, { useState } from "react";
import plus from "../../Images/plus.png";
import minus from "../../Images/minus.png";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="accordion-content_1">{!isActive && title}</div>
          <div>
            <img src={isActive ? minus : plus} alt="plus_minus" />
          </div>
        </div>
        {isActive && (
          <div onClick={() => setIsActive(!isActive)} className="accordion-content">
            <div className="accordion-content_1" >{isActive && title}</div>
            <div >{content}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
