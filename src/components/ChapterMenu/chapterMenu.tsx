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
        className={`absolute left-80  top-16 right-[54rem] z-10 bg-neutral-200 rounded-t-full h-10 transition-all  origin-left duration-500 ${
          isOpen ? "scale-x-100" : "scale-x-0 delay-300"
        }`}
      >
        <div
          ref={chapterButtonRef}
          style={{ direction: "rtl" }}
          className={`absolute overflow-auto rounded-b-2xl  right-0 border-r-2 top-10 w-3/4 z-30  bg-neutral-200 text-black  transition-all  origin-top duration-500   ${
            isOpen ? "h-96 delay-300" : " h-0  "
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
    </div>
  );
};
