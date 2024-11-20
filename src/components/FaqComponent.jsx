import { useState } from "react";
import faqArray from "./faqArray.json";

export default function FaqComponent() {
  const [isOpen, setIsOpen] = useState(-1);

  return (
    <>
      {faqArray.map((faq, index) => (
        <div key={`faq-${index+1}`} className="w-full border-b border-sky-400 text-sm my-2c">
          <div
          onClick={() =>
            index === isOpen ? setIsOpen(-1) : setIsOpen(index)
          } className="flex items-center justify-between">
            <p>{faq.question}</p>
            <button
              onClick={() =>
                index === isOpen ? setIsOpen(-1) : setIsOpen(index)
              }
              className="flex items-center text-lg p-1 text-sky-400 font-bold"
            >
              {isOpen === index ? "-" : "+"}
            </button>
          </div>
          <div
            className={`${
              isOpen === index ? "block bg-sky-50 py-2 mb-2" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </>
  );
}
