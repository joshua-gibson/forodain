import React, { useState } from "react";
import "../../assets/fonts/fonts.css";

interface Props {
  setChapter: React.Dispatch<React.SetStateAction<string>>;
}

export const SidePanel: React.FC<Props> = ({ setChapter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setChapter("ch2");
  };

  return (
    <>
      <div
        className={`text-center rounded-e-lg bg-neutral-800 border-neutral-600 border-y-2 border-r-2 z-10 absolute h-[43vh] left-0 mt-5 transition-all duration-500 ease-in-out ${
          isOpen ? "w-[500px]" : "w-10"
        } `}
      >
        <img
          onClick={handleButtonClick}
          className={`object-scale-down h-16 absolute mt-10  transition-all duration-500 ease-in-out z-20 ${
            isOpen
              ? "left-[500px] -translate-x-1/2 -rotate-90"
              : "left-4 rotate-90"
          }`}
          src="./src/assets/img/arrow-icon.png"
          alt="Broken Spear"
        />

        <div
          className={`${isOpen ? "" : "hidden transition-all duration-500"}`}
        >
          <p onClick={handleLinkClick}>The Shipwreck</p>
          <p>The Men of Carrick</p>
        </div>
      </div>
    </>
  );
};
