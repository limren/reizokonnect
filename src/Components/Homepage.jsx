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
      <Presentation goNext={goNext} scrollToBottom={scrollToBottom} />
      <Idea innerRef={goNext} />
    </div>
  );
};
