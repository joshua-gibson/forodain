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
    setTimeout(() => setChapter(chapter), 500);
    handleButtonClick();
  };

  return (
    <div className="relative">
      {/* button */}
      <button
        onClick={handleButtonClick}
        className="absolute left-1/2 -translate-x-1/2  md:left-[15vw] md:-translate-x-0  top-16 z-20 h-10 bg-neutral-200 text-black text-3xl font-nightmarePills  px-24 rounded-full"
      >
        Chapters
      </button>
      {/* extender */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 md:left-[20vw] md:-translate-x-0 top-16 right-[54rem] z-10 bg-neutral-200 rounded-full h-10 transition-all w-72 md:min-w-[360px] md:max-w-[950px]  origin-left duration-[500ms] ${
          isOpen
            ? "md:scale-x-100 rounded-b-none"
            : "md:scale-x-0 delay-[300ms]"
        }`}
      >
        {/* menu card */}
        <div
          ref={chapterButtonRef}
          style={{ direction: "rtl" }}
          className={`absolute overflow-auto rounded-b-2xl  right-0 border-r-2 top-10 w-72 md:w-[400px] z-30  bg-neutral-200 text-black  transition-all  origin-top duration-[500ms]   ${
            isOpen ? "h-96 delay-[300ms]" : " h-0 -translate-y-1 "
          }`}
        >
          {/* menu text */}
          {chapterTitles.map((x) => (
            <p
              key={`key-${x}`}
              className={`pb-2 cursor-pointer font-nightmarePills text-md md:text-2xl text-justify pl-10  transition-all  origin-top duration-[500ms]  ${
                isOpen ? " scale-y-100" : " scale-y-0 delay-[300ms]  "
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
