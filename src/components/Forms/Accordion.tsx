// src/components/FAQAccordion.tsx
import React, { useState } from 'react';

const FAQAccordion: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-[1px] border-solid border-base-blacks-var-1">
      <div className="flex text-left text-7xl text-base-blacks-var-1 items-center justify-between px-2 cursor-pointer" onClick={toggleAccordion}>
        <h2 className="text-lg font-semibold">{question}</h2>
        <span className="ml-2">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="px-2 text-lg">{answer}</p>}
    </div>
  );
};

export default FAQAccordion;
