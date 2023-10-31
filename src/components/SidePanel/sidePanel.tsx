import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setChapterTitles(getChapterTitles());
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (chapter: string) => {
    setChapter(chapter);
    handleButtonClick();
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
          {chapterTitles.map((x) => (
            <p
              key={`key-${x}`}
              className="pb-2 cursor-pointer"
              onClick={() => handleLinkClick(x.chapter)}
            >
              {x.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
