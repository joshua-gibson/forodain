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
      document.removeEventListener("click", handleClickAnywhere);
    };
  }, []);

  return (
    <div className="relative text-center pt-12 pb-12">
      {/* Button + small-screen extenders anchor */}
      <div className="absolute left-1/2 -translate-x-1/2 top-12 z-40">
        {/* Small screen only: top extender (Characters + World) */}
        <div
          className={`min-[1200px]:hidden absolute bottom-full left-1/2 -translate-x-1/2 w-40 h-20 flex flex-col items-center justify-end z-30 py-2 bg-neutral-800 text-neutral-600 font-nightmarePills text-lg rounded-t-xl overflow-hidden transition-all origin-bottom duration-[500ms] ${
            isOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div onClick={handleOptionClick} className="cursor-pointer py-1 transition-all duration-150 hover:text-neutral-200 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]">
            Characters
          </div>
          <div onClick={handleOptionClick} className="cursor-pointer py-1 transition-all duration-150 hover:text-neutral-200 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]">
            World
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleButtonClick}
          className="group isolate relative z-40 overflow-hidden bg-neutral-900 text-white text-xl min-[1200px]:text-3xl drop-shadow-lg font-nightmarePills pt-1 pb-2 w-48 min-[1200px]:w-80 rounded-full transition-all hover:bg-neutral-800 hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.12)]"
        >
          <span className="pointer-events-none absolute inset-0 will-change-transform translate-x-[-150%] [animation-timeline:auto] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
          The Story
        </button>

        {/* Small screen only: bottom extender (Denizens + Deities) */}
        <div
          className={`min-[1200px]:hidden absolute top-full left-1/2 -translate-x-1/2 w-40 h-20 flex flex-col items-center justify-start z-30 py-2 bg-neutral-800 text-neutral-600 font-nightmarePills text-lg rounded-b-xl overflow-hidden transition-all origin-top duration-[500ms] ${
            isOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <div onClick={handleOptionClick} className="cursor-pointer py-1 transition-all duration-150 hover:text-neutral-200 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]">
            Denizens
          </div>
          <div onClick={handleOptionClick} className="cursor-pointer py-1 transition-all duration-150 hover:text-neutral-200 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]">
            Deities
          </div>
        </div>

        {/* Message overlay — slides down from button bottom, same anchor as bottom extender */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 w-4/5 flex flex-col items-center gap-2 z-30 py-3 px-4 bg-neutral-400 text-neutral-800 font-nightmarePills text-lg rounded-b-xl overflow-hidden transition-all origin-top duration-[500ms] ${
            isMsgOpen ? "scale-y-100 delay-[300ms]" : "scale-y-0"
          }`}
        >
          <p className="text-center">These options are not yet available.</p>
          <div
            className="flex items-center justify-center text-neutral-400 bg-neutral-800 rounded-full w-12 h-8 cursor-pointer text-xl transition-colors duration-150 hover:bg-neutral-700 hover:text-white"
          >
            <span>OK</span>
          </div>
        </div>
      </div>

      {/* Large screen only: horizontal extender */}
      <div
        className={`hidden min-[1200px]:flex flex-row justify-between absolute z-30 h-12 w-2/3 left-1/2 -translate-x-1/2 py-2 px-8 top-12 bg-neutral-800 text-neutral-600 font-nightmarePills text-2xl rounded-full transition-all origin-center duration-[500ms] ${
          isOpen ? "scale-x-100" : "scale-x-0"
        }`}
      >
        <div onClick={handleOptionClick} className="cursor-pointer transition-all duration-150 hover:text-neutral-200 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]">
          Characters
        </div>
        <div onClick={handleOptionClick} className="pr-36 cursor-pointer transition-all duration-150 hover:text-neutral-200 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]">
          World
        </div>
        <div onClick={handleOptionClick} className="pl-36 cursor-pointer transition-all duration-150 hover:text-neutral-200 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]">
          Denizens
        </div>
        <div onClick={handleOptionClick} className="cursor-pointer transition-all duration-150 hover:text-neutral-200 hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]">
          Deities
        </div>
      </div>
    </div>
  );
};
