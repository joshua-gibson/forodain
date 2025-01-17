import React from "react";
import "../../assets/fonts/fonts.css";
import { ChapterMenu } from "..";

interface Chapter {
  _id: string;
  title: string;
}

interface Props {
  setChapterId: React.Dispatch<React.SetStateAction<string>>;
  chapterTitles: Chapter[];
  children?: React.ReactNode;
}

export const BottomShelf: React.FC<Props> = ({ setChapterId, chapterTitles, children }) => {
  return (
    <div className="text-white bg-neutral-900 border-t-yellow-900 border-t w-full align-middle flex-1">
      <ChapterMenu setChapterId={setChapterId} chapterTitles={chapterTitles} />
      <div className="h-[5.5rem] w-2/3 border-b-yellow-900 border-b relative mb-5 left-1/2 -translate-x-1/2">
        <img
          className="object-scale-down h-72 mt-[-130px] fixed left-1/2 -translate-x-1/2 z-0"
          src="./img/spear.webp"
          alt="Broken Spear"
        />
      </div>

      <div className="flex justify-center">{children}</div>
    </div>
  );
};
