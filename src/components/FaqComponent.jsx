import { useState } from "react";
import faqArray from "../data/faqArray.json";

export default function FaqComponent() {
  const [isOpen, setIsOpen] = useState(-1);

  return (
    <>
      {faqArray.map((faq, index) => (
        <div key={`faq-${index+1}`} className="w-full border-b border-sky-400 my-2c">
          <div
          onClick={() =>
            index === isOpen ? setIsOpen(-1) : setIsOpen(index)
          } className="flex items-center text-base justify-between">
            <p id="question">{faq.question}</p>
            <button aria-haspopup="menu" aria-expanded={isOpen}
              onClick={() =>
                index === isOpen ? setIsOpen(-1) : setIsOpen(index)
              }
              className="flex items-center text-lg p-1 text-sky-400 font-bold"
            >
              {isOpen === index ? "-" : "+"}
            </button>
          </div>
          <div
          aria-describedby="question"
            className={`${
              isOpen === index ? "block text-gray-600 text-base py-2 mb-2" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </>
  );
}
