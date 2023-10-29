import React from "react";
import "../../assets/fonts/fonts.css";

interface Props {
  children?: React.ReactNode;
}

export const BottomShelf: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-white bg-neutral-900  border-t-yellow-900 border-t w-full align-middle flex-1">
      <img
        className="object-scale-down h-60 ml-auto mr-auto mt-[-130px] "
        src="./src/assets/img/spear.png"
        alt="Broken Spear"
      />
      <div className="flex justify-center"> {children}</div>
    </div>
  );
};
