import React from "react";
import "../../assets/fonts/fonts.css";
import { SidePanel } from "..";

interface Props {
  setChapter: React.Dispatch<React.SetStateAction<string>>;
  children?: React.ReactNode;
}

export const BottomShelf: React.FC<Props> = ({ setChapter, children }) => {
  return (
    <div className="text-white bg-neutral-900  border-t-yellow-900 border-t w-full align-middle flex-1">
      <SidePanel setChapter={setChapter} />
      <div className="h-24 w-2/3 border-b-yellow-900 border-b relative mb-20 left-1/2 -translate-x-1/2">
        <img
          className="object-scale-down h-72 mt-[-130px] fixed left-1/2 -translate-x-1/2"
          src="./src/assets/img/spear.png"
          alt="Broken Spear"
        />
      </div>

      <div className="flex justify-center"> {children}</div>
    </div>
  );
};
