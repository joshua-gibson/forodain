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
        className="absolute z-30 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-3xl drop-shadow-lg font-nightmarePills pt-1 pb-2 px-24 rounded-full"
      >
        The Story
      </button>
      {/* extender */}
      <div
        className={`absolute z-20 left-1/2 -translate-x-1/2 top-12 right-[54rem] bg-neutral-900 rounded-full h-12 transition-all w-2/3 duration-[500ms] ${
          isOpen ? "md:scale-x-100" : "md:scale-x-0 delay-[300ms]"
        }`}
      />
    </div>
  );
};
