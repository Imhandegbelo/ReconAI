import React, { useState } from "react";
import PropTypes from "prop-types";
import { faqArray } from "./faqArray";

// { question, answer, id }
export default function Faqs() {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("max-h-0 overflow-hidden");
  const [rotate, setRotate] = useState("fa-chevron-down");

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "text-[#1570EF] underline" : "");
    setHeightState(
      setActive === ""
        ? "max-h-96 transition-all overflow-visible"
        : "max-h-0 overflow-hidden transition-all"
    );
    setRotate(
      setActive === ""
        ? "rotate-180 transition-all text-blue"
        : "transition-all"
    );
  };

  const handleKeyDown = (e) => {
    // check keys if you want
    if (e.keyCode === 13) {
      toggleAccordion();
    }
  };

  return (
    <div className="px-[1em] w-full ">
      {faqArray.map((faq) => (
        <div key={faq.id}>
          <div className="flex items-center relative">
            <h3
              className={`sm:text-lg text-xs  ${setActive} sm:leading-9 leading-[25px] font-normal w-[247px] sm:w-[1141px]`}
            >
              {faq.question}
            </h3>

            <i
              onClick={toggleAccordion}
              onKeyDown={handleKeyDown}
              role="presentation"
              className={`${rotate} text-[#1570EF] absolute right-0 fa-solid fa-chevron-down cursor-pointer `}
            />
          </div>
          <p
            className={`overflow-hidden sm:text-lg text-[12px] text-gray 
           break-normal ${setHeight}`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

Faqs.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
