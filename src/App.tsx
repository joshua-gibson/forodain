import { useState } from "react";
import { TopShelf, BottomShelf, StoryPanel } from "./components";
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
import "tailwindcss/tailwind.css";
import "./main.css";
import forestImg from "../src/assets/img/forest.jpg";
import dustImg from "../src/assets/img/dust3.webp";

function App() {
  const [chapter, setChapter] = useState("ch01");
  return (
    <div className="parallax">
      <img className="parallax__bg" src={forestImg} alt="" />
      <img className="parallax__dust" src={dustImg} alt="" />
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
