import React from "react";
import { Header } from "../Header/header";
import "../fonts/fonts.css";

export const TopShelf: React.FC = () => {
  return (
    <div className="flex flex-col-reverse bg-forest bg-no-repeat bg-cover flex-1  ">
        <div className="pb-32 w-screen ">
      <Header>
        <h1 className="text-6xl">Chronicles</h1>
        <h3 className="text-3xl">of the</h3>
        <h1 className="text-6xl">Broken Spear</h1>
      </Header>
      </div>
    </div>
  );
};
