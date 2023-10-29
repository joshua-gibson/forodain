import React from "react";
import "../../assets/fonts/fonts.css";
import strings from "../../assets/strings.json";

interface Sections {
  heading?: string;
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

export const StoryWrapper: React.FC<Props> = ({ stringSelector }) => {
  return (
    <>
      <h1 className="text-center  pb-6">
        {typedStrings?.story?.[stringSelector]?.title}
      </h1>

      <div className="text-center">
        {typedStrings?.story?.[stringSelector]?.sections?.map((y) => {
          return (
            <>
              {y.heading ? (
                <h2 className="text-3xl pb-2">{y.heading}</h2>
              ) : null}
              {y.paragraphs.map((x) => (
                <p className="pb-2">{x}</p>
              ))}
            </>
          );
        })}
      </div>
    </>
  );
};
