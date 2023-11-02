import React, { useState, useEffect, useRef } from "react";
import "../../assets/fonts/fonts.css";
import { strings } from "../../assets/strings/strings.ts";

interface Chapter {
  chapter: string;
  title: string;
}

interface sidePanelProps {
  setChapter: React.Dispatch<React.SetStateAction<string>>;
}

const getChapterTitles = (): Chapter[] => {
  return Object.keys(strings.story).map((chapter) => ({
    chapter,
    title: strings.story[chapter].title,
  }));
};

export const SidePanel: React.FC<sidePanelProps> = ({ setChapter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chapterTitles, setChapterTitles] = useState<Chapter[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChapterTitles(getChapterTitles());
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;
    }
  };

  const handleLinkClick = (chapter: string) => {
    setChapter(chapter);
    handleButtonClick();
  };

  return (
    <>
      <div
        className={` fixed text-center  rounded-e-lg bg-neutral-800 border-neutral-600 border-y-2 border-r-2 z-10  h-[43vh] left-0 mt-5 transition-all duration-500 ease-in-out ${
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
          className={`absolute -rotate-90 -left-10 top-36 font-nightmarePills text-2xl text-neutral-300 transition-all duration-500 ${
            isOpen ? "opacity-0" : ""
          }`}
        >
          CHAPTERS
        </div>
        <div
          ref={sidebarRef}
          style={{ direction: "rtl" }}
          className={` overflow-auto h-full transition-all duration-500  ${
            isOpen ? "pt-4 opacity-100" : " opacity-0 "
          }`}
        >
          {chapterTitles.map((x) => (
            <p
              key={`key-${x}`}
              className={`pb-2 cursor-pointer font-nightmarePills text-2xl text-justify pl-10 transition-all duration-500 ${
                isOpen ? " opacity-100" : " opacity-0 "
              }`}
              onClick={() => handleLinkClick(x.chapter)}
              style={{ direction: "ltr" }}
            >
              {x.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
