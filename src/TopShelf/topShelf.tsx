import React from "react";
import { Header } from "../Header/header";
import "../fonts/fonts.css";

export const TopShelf: React.FC = () => {
  return (
    <div className="bg-forest bg-no-repeat bg-cover flex-1 justify-center align-middle">
        <div className="pt-6 w-screen ">
      <Header>
        <p>Chronicles</p>
        <p>of the</p>
        <p>Broken Spear</p>
      </Header>
      </div>
    </div>
  );
};
