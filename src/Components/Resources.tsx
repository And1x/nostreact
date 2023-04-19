import { useState } from "react";
import { generateLinkListsJSX } from "../utils/getResources";

export default function Linklist() {
  let listItems = generateLinkListsJSX();
  let [sectionIndex, setSectionIndex] = useState(0);
  let currentSection = Object.keys(listItems)[sectionIndex];

  const moveRight = () => {
    sectionIndex >= Object.keys(listItems).length - 1
      ? setSectionIndex(0)
      : setSectionIndex(sectionIndex + 1);
  };

  const moveLeft = () => {
    sectionIndex <= 0
      ? setSectionIndex(Object.keys(listItems).length - 1)
      : setSectionIndex(sectionIndex - 1);
  };

  const keyDownEv = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.key);
    if (event.code === "ArrowRight") {
      moveRight();
    } else if (event.code === "ArrowLeft") {
      moveLeft();
    }
  };

  return (
    <div
      className="flex justify-center min-h-[256px] focus:outline-none"
      onKeyDown={keyDownEv}
      tabIndex={0}
    >
      <div
        className="flex items-center cursor-pointer p-1 text-emerald-600 font-bold"
        onClick={moveLeft}
      >
        ˂˂
      </div>
      <ul className="relative box-border h-auto w-96 p-7 font-bold list-disc text-slate-200 bg-gray-700 rounded border border-emerald-600 shadow-xl">
        <img
          src="src/assets/img/ostrich.png"
          alt=""
          className="absolute h-36 opacity-40 right-5 bottom-0"
        />
        <div className="text-center text-2xl underline text-emerald-300 font-bold mb-6">
          {currentSection}
        </div>
        {listItems[currentSection]}
      </ul>
      <div
        className="flex items-center cursor-pointer p-1  text-emerald-600 font-bold"
        onClick={moveRight}
      >
        ˃˃
      </div>
    </div>
  );
}
