import React from "react";
import "../../assets/fonts/fonts.css";
import { strings } from "../../assets/strings/strings.ts";

interface Props {
  stringSelector: string;
}

export const StoryPanel: React.FC<Props> = ({ stringSelector }) => {
  return (
    <div className="flex flex-col w-9/12">
      <h1 className="  pb-4 text-5xl ml-16 font-nightmarePills">
        {strings?.story?.[stringSelector]?.title}
      </h1>
      <div className="  rounded-lg mb-20 border-2 border-yellow-900 bg-neutral-800 p-5 w-full">
        <div className="">
          {strings?.story?.[stringSelector]?.sections?.map((y) => {
            return (
              <div key={`key-${y}`} className="">
                {y.heading ? (
                  <h2 className="text-4xl py-2 font-nightmarePills">
                    {y.heading}
                  </h2>
                ) : null}
                {y.image ? (
                  <img
                    src={y.image}
                    alt={y.heading}
                    className="px-3 float-right w-1/3"
                  />
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
    </div>
  );
};
