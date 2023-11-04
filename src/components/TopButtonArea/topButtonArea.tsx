import React, { useState, useEffect } from "react";
import "../../assets/fonts/fonts.css";

export const TopButtonArea: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMsgOpen, setIsMsgOpen] = useState(false);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    setIsMsgOpen(!isMsgOpen);
  };

  useEffect(() => {
    const handleClickAnywhere = () => {
      setIsOpen(false);
      setIsMsgOpen(false);
    };

    document.addEventListener("click", handleClickAnywhere);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleClickAnywhere);
    };
  }, []);

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
            ? "max-md:scale-y-100 md:scale-x-100"
            : "max-md:scale-y-0 md:scale-x-0"
        }`}
      >
        <div
          onClick={handleOptionClick}
          className="pt-8 md:pt-0 cursor-pointer"
        >
          Characters
        </div>
        <div
          onClick={handleOptionClick}
          className="pr-0 md:pr-36 cursor-pointer"
        >
          World
        </div>
        <div
          onClick={handleOptionClick}
          className="pl-0 md:pl-36 cursor-pointer"
        >
          Denizens
        </div>
        <div
          onClick={handleOptionClick}
          className="pb-8 md:pb-0 cursor-pointer"
        >
          Deities
        </div>
      </div>
      <div
        className={`absolute flex items-center flex-col md:flex-row justify-between n z-30 h-60 w-40 md:h-12 md:w-2/3 left-1/2 -translate-x-1/2 py-2 px-8 top-28 max-md:top-20  max-md:h-40 right-[54rem] bg-neutral-400 text-neutral-800 font-nightmarePills  text-lg md:text-2xl  rounded-b-xl md:rounded-full max-sm:translate-y-2  transition-all origin-top md:origin-center duration-[500ms] ${
          isMsgOpen
            ? "max-md:scale-y-100 md:scale-x-100"
            : "max-md:scale-y-0 md:scale-x-0"
        }`}
      >
        <p>These options are not yet available.</p>
        <div
          className={`flex items-center justify-center text-neutral-400 bg-neutral-800 rounded-full w-12 h-8 cursor-pointer text-xl`}
        >
          <span>OK</span>
        </div>
      </div>
    </div>
  );
};
