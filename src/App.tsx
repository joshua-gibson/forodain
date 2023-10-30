import React, { useState } from "react";
import { TopShelf, BottomShelf, StoryPanel } from "./components";
import "tailwindcss/tailwind.css";

function App() {
  const [chapter, setChapter] = useState("ch1");
  return (
    <div className="flex flex-col h-screen">
      <TopShelf />
      <BottomShelf setChapter={setChapter}>
        <StoryPanel stringSelector={chapter} />
      </BottomShelf>
    </div>
  );
}

export default App;
