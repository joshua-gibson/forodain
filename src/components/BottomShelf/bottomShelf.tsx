import React from "react";
import "../../assets/fonts/fonts.css";

interface Props {
  children?: React.ReactNode;
}

export const BottomShelf: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-white bg-neutral-900  border-t-yellow-900 border-t w-full align-middle flex-1">
      <div className="h-24 w-2/3 border-b-yellow-900 border-b relative mb-20 left-1/2 -translate-x-1/2">
        <img
          className="object-scale-down h-72 mt-[-130px] fixed left-1/2 -translate-x-1/2"
          src="./src/assets/img/spear.png"
          alt="Broken Spear"
        />
        <div className="group w-64">
          <button className="bg-neutral-400 text-black text-2xl drop-shadow-lg font-nightmarePills mt-7 pt-1 pb-2 w-full rounded-full">
            Elsewatch
          </button>
          <div className=" hidden group-hover:block bg-neutral-400 text-black text-2xl rounded-b-2xl rounded-e-2xl mt-[-24px] pt-5 z-10 fixed w-2/3 h-56">
            menu item
          </div>
        </div>
      </div>

      <div className="flex justify-center"> {children}</div>
    </div>
  );
};
