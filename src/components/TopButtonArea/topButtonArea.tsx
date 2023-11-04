import React, { useState } from "react";
import "../../assets/fonts/fonts.css";

export const TopButtonArea: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-center  pt-12 pb-12">
      <button
        onClick={handleButtonClick}
        className="absolute z-40 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xl md:text-3xl drop-shadow-lg font-nightmarePills pt-1 pb-2 w-48 md:w-80 rounded-full transition-all"
      >
        The Story
      </button>
      {/* extender */}
      <div
        className={`absolute flex flex-col md:flex-row justify-between z-30 h-60 w-40 md:h-12 md:w-2/3 left-1/2 -translate-x-1/2 py-2 px-8 top-12 right-[54rem] bg-neutral-800 text-neutral-600 font-nightmarePills  text-lg md:text-2xl  rounded-b-xl md:rounded-full max-sm:translate-y-2  transition-all origin-top md:origin-center duration-[500ms] ${
          isOpen
            ? "max-sm:scale-y-100 md:scale-x-100"
            : "max-sm:scale-y-0 md:scale-x-0 delay-[300ms]"
        }`}
      >
        <p className="pt-8 md:pt-0">Characters</p>
        <p className="pr-0 md:pr-36">World</p>
        <p className="pl-0 md:pl-36">Denizens</p>
        <p>Deities</p>
      </div>
    </div>
  );
};
