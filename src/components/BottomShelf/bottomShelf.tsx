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
        <div className=" w-64">
          <div className="transform w-60 hover:w-full font-nightmarePills transition-all origin-left bg-neutral-400 text-black text-2xl rounded-full mt-6 pt-1 pb-2 -z-10 fixed align-text-top">
            <p className="mx-4">menu item</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center"> {children}</div>
    </div>
  );
};
