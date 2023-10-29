import { TopShelf, BottomShelf, StoryPanel } from "./components";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <TopShelf />
      <BottomShelf>
        <StoryPanel stringSelector="ch3" />
      </BottomShelf>
    </div>
  );
}

export default App;
