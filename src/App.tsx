import React, { useState } from "react";
import { TopShelf, BottomShelf, StoryPanel } from "./components";
import "tailwindcss/tailwind.css";
import "./main.css";

function App() {
  const [chapter, setChapter] = useState("ch01");
  return (
    <div className="parallax">
      <img className="parallax__bg" src="./src/assets/img/forest.jpg" alt="" />
      <img
        className="parallax__dust"
        src="./src/assets/img/dust2.webp"
        alt=""
      />
      <div className="flex flex-col h-screen z-30">
        <TopShelf />
        <BottomShelf setChapter={setChapter}>
          <StoryPanel stringSelector={chapter} />
        </BottomShelf>
      </div>
    </div>
  );
}

export default App;
