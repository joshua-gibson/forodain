import React from "react";
import "../../assets/fonts/fonts.css"
import strings from "../../assets/strings.json"

interface Story {
    title: string;
    paragraphs: string[];
  }
  
  interface Stories {
    [key: string]: Story;
  }
  
  interface Strings {
    story: Stories;
  }
  
interface Props {
    stringSelector: string;
  }

const typedStrings: Strings = strings;

export const StoryWrapper: React.FC<Props> = ({stringSelector}) => {
  return (
    <div className="text-center  pt-12 pb-12">
{typedStrings?.story?.[stringSelector]?.title}
    </div>
  );
};
