import React from "react";
import "../../assets/fonts/fonts.css";
import strings from "../../assets/strings/strings.json";

interface Sections {
  heading?: string;
  image?: string;
  paragraphs: string[];
}

interface Story {
  title: string;
  sections: Sections[];
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

export const StoryPanel: React.FC<Props> = ({ stringSelector }) => {
  return (
    <div className="  rounded-lg mb-20 border-2 border-yellow-900 bg-neutral-800 p-5 w-9/12">
      <h1 className="  pb-6">{typedStrings?.story?.[stringSelector]?.title}</h1>

      <div className="">
        {typedStrings?.story?.[stringSelector]?.sections?.map((y) => {
          return (
            <div key={`key-${y}`}>
              {y.heading ? (
                <h2 className="text-3xl pb-2">{y.heading}</h2>
              ) : null}
              {y.image ? (
                <img src={y.image} alt={y.heading} className="pb-2" />
              ) : null}
              {y.paragraphs.map((x) => (
                <p key={`key-${x}`} className="pb-2">
                  {x}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
