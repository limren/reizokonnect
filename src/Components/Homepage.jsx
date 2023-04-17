import React, { useRef } from "react";
import { Presentation } from "./Subcomponents/Presentation";
import { Idea } from "./Subcomponents/Idea";

export const Homepage = () => {
  const goNext = useRef(null);
  const scrollToBottom = (ref) => {
    if (!ref.current) {
      return;
    }
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className='homepage'>
      <Presentation />
      <div className='next-comp entrance-2'>
        <h2>En savoir plus !</h2>
        <img
          src='/assets/arrow.svg'
          className='arrow'
          onClick={() => scrollToBottom(goNext)}
        />
      </div>
      <Idea innerRef={goNext} />
    </div>
  );
};
