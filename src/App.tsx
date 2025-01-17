import { useState, useEffect } from "react";
import api from "./api";
import { TopShelf, BottomShelf, StoryPanel } from "./components";
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
import "tailwindcss/tailwind.css";
import "./main.css";

interface Sections {
  heading?: string;
  image?: string;
  paragraphs: string[];
}


interface Chapter {
  _id: string;
  title: string;
  sections?: Sections[];
}
function App() {

  const getChapterTitles = async (): Promise<Chapter[]> => {
    const response = await api.get(`${import.meta.env.VITE_API_BASE_URL}/stories`);
    return response.data.stories;
  };
  
  const getChapter = async (chapterId: string): Promise<Chapter> => {
    const response = await api.get(`${import.meta.env.VITE_API_BASE_URL}/stories/${chapterId}`);
    return response.data.story;
  };

  const [chapterId, setChapterId] = useState<string | null>(null);
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [chapterTitles, setChapterTitles] = useState<Chapter[] | null>(null);

  useEffect(() => {
    const fetchChapterTitles = async () => {
      const titleList = await getChapterTitles();
      setChapterTitles(titleList);
      if (titleList.length > 0) {
        setChapterId(titleList[0]._id);
      }
    };
    fetchChapterTitles();
  }, []);

  useEffect(() => {
    if (chapterId) {
      const fetchChapter = async () => {
        const chapter = await getChapter(chapterId);
        setChapter(chapter);
      };
      fetchChapter();
    }
  }, [chapterId]);

  return (
    <div className="parallax">
      <img className="parallax__bg" src="./img/forest.jpg" alt="" />
      <img className="parallax__dust" src="./img/dust3.webp" alt="" />
      <div className="flex flex-col h-screen z-30">
      <TopShelf />
      {chapterTitles === null || chapter === null ? (
        <div>Loading...</div>
      ) : (
        <BottomShelf chapterTitles={chapterTitles} setChapterId={setChapterId as React.Dispatch<React.SetStateAction<string>>}>
          <StoryPanel chapter={chapter} />
        </BottomShelf>
      )}
      </div>
    </div>
  );
}

export default App;
