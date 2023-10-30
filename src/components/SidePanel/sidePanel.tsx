import React from "react";
import "../../assets/fonts/fonts.css";

export const SidePanel: React.FC = () => {
  return (
    <>
      <div className="text-center rounded-e-lg bg-neutral-800 border-neutral-600 border-y-2 border-r-2 w-10 h-[43vh] absolute left-0 mt-5">
        <img
          className="object-scale-down h-16 fixed left-2 mt-10 rotate-90"
          src="./src/assets/img/arrow-icon.png"
          alt="Broken Spear"
        />
      </div>
    </>
  );
};
