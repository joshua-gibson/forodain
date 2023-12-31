import React from "react";
import { Header, TopButtonArea } from "..";
import "../../assets/fonts/fonts.css";

export const TopShelf: React.FC = () => {
  return (
    <div className="flex flex-col-reverse  flex-1  ">
      <div className="w-full h-4/5 pb-56 md:pb-96 transition-all">
        <Header>
          <h1 className="text-5xl md:text-8xl">Chronicles</h1>
          <h3 className="text-3xl md:text-5xl pt-4">of the</h3>
          <h1 className="text-5xl md:text-8xl">Broken Spear</h1>
        </Header>
        <TopButtonArea />
      </div>
    </div>
  );
};
