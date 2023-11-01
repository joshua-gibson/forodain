import React from "react";
import { Header, TopButtonArea } from "..";
import "../../assets/fonts/fonts.css";

export const TopShelf: React.FC = () => {
  return (
    <div className="flex flex-col-reverse  flex-1  ">
      <div className="w-screen h-3/4 pb-72 ">
        <Header>
          <h1 className="text-8xl">Chronicles</h1>
          <h3 className="text-5xl pt-4">of the</h3>
          <h1 className="text-8xl">Broken Spear</h1>
        </Header>
        <TopButtonArea />
      </div>
    </div>
  );
};
