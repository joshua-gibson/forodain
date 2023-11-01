import React, { useState } from "react";
import { TopShelf, BottomShelf, StoryPanel } from "./components";
import "tailwindcss/tailwind.css";

function App() {
  const [chapter, setChapter] = useState("ch01");
  return (
    <>
      <div className="fixed left-0 top-0 bg-forest bg-no-repeat bg-cover w-full h-2/3 -z-10" />
      <div className="flex flex-col h-screen">
        <TopShelf />
        <BottomShelf setChapter={setChapter}>
          <StoryPanel stringSelector={chapter} />
        </BottomShelf>
      </div>
    </>
  );
}

export default App;
