import React, { useState, useEffect, useRef } from "react";
import "../../assets/fonts/fonts.css";
import { strings } from "../../assets/strings/strings.ts";

interface Chapter {
  chapter: string;
  title: string;
}

interface chapterMenuProps {
  setChapter: React.Dispatch<React.SetStateAction<string>>;
}

const getChapterTitles = (): Chapter[] => {
  return Object.keys(strings.story).map((chapter) => ({
    chapter,
    title: strings.story[chapter].title,
  }));
};

export const ChapterMenu: React.FC<chapterMenuProps> = ({ setChapter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chapterTitles, setChapterTitles] = useState<Chapter[]>([]);
  const chapterButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChapterTitles(getChapterTitles());
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    if (chapterButtonRef.current) {
      chapterButtonRef.current.scrollTop = 0;
    }
  };

  const handleLinkClick = (chapter: string) => {
    setChapter(chapter);
    handleButtonClick();
  };

  return (
    <div className="relative">
      <button
        onClick={handleButtonClick}
        className="absolute left-64 top-16 z-20 h-10 bg-neutral-200 text-black text-3xl font-nightmarePills  px-24 rounded-full"
      >
        Chapters
      </button>
      <div
        className={`absolute left-80 top-16 z-10 bg-neutral-200 rounded-full h-10 transition-all duration-500 ${
          isOpen ? "w-[700px]" : "w-0"
        }`}
      />

      <div
        ref={chapterButtonRef}
        style={{ direction: "rtl" }}
        className={`absolute overflow-auto rounded-3xl left-1/2 -translate-x-1/2 top-16 w-1/4 z-30  bg-neutral-200 text-black  transition-all origin-top duration-500   ${
          isOpen ? " scale-y-100" : " scale-y-0  "
        }`}
      >
        {chapterTitles.map((x) => (
          <p
            key={`key-${x}`}
            className={`pb-2 cursor-pointer font-nightmarePills text-2xl text-justify pl-10 transition-transform duration-500 ${
              isOpen ? " scale-100" : " scale-0 "
            }`}
            onClick={() => handleLinkClick(x.chapter)}
            style={{ direction: "ltr" }}
          >
            {x.title}
          </p>
        ))}
      </div>
    </div>
  );
};
