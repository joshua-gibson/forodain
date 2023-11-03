import React from "react";
import "../../assets/fonts/fonts.css";
import { strings } from "../../assets/strings/strings.ts";

interface Props {
  stringSelector: string;
}

export const StoryPanel: React.FC<Props> = ({ stringSelector }) => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-9/12">
      <div className="  rounded-lg my-20 border-2 border-yellow-900 bg-neutral-800 p-5 w-full">
        <h1 className="  pb-4 text-5xl ml-8 font-nightmarePills">
          {strings?.story?.[stringSelector]?.title}
        </h1>
        <hr className="border-yellow-900 border-t-2 pb-6" />
        <div>
          {strings?.story?.[stringSelector]?.sections?.map((y, i) => {
            return (
              <div key={`key-${i}`} className="">
                {y.heading ? (
                  <h2 className="text-4xl py-2 font-nightmarePills">
                    {y.heading}
                  </h2>
                ) : null}
                {y.image ? (
                  <div
                    id="image-frame"
                    className=" relative p-3 m-3 float-right max-w-md border-2 border-solid border-neutral-300"
                  >
                    <div className="absolute top-[-8px] left-[-8px] w-4 h-4 border-2 border-solid border-neutral-300"></div>
                    <div className="absolute top-[-8px] right-[-8px] w-4 h-4 border-2 border-solid border-neutral-300"></div>
                    <div className="absolute bottom-[-8px] left-[-8px] w-4 h-4 border-2 border-solid border-neutral-300"></div>
                    <div className="absolute bottom-[-8px] right-[-8px] w-4 h-4 border-2 border-solid border-neutral-300"></div>
                    <img src={y.image} alt={y.heading} className="" />
                  </div>
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
      <img
        className="object-scale-down h-20 justify-center mb-20"
        src="./src/assets/img/arrow-icon.webp"
        alt="Arrow Icon"
        onClick={handleButtonClick}
      />
    </div>
  );
};
