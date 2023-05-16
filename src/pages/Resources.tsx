import { useState } from "react";
import ContentBox from "../Components/ContentBox";
import ostrichImg from "/src/assets/img/ostrich.png";
import ResourcesList, {
  category,
  allCategories,
} from "../Components/ResourcesList";

export default function Resources() {
  let [sectionIndex, setSectionIndex] = useState(0);

  const moveRight = () => {
    sectionIndex >= allCategories.length - 1
      ? setSectionIndex(0)
      : setSectionIndex(sectionIndex + 1);
  };

  const moveLeft = () => {
    sectionIndex <= 0
      ? setSectionIndex(allCategories.length - 1)
      : setSectionIndex(sectionIndex - 1);
  };

  const keyDownEv = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "ArrowRight") {
      moveRight();
    } else if (event.code === "ArrowLeft") {
      moveLeft();
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center text-emerald-700 pt-2 font-bold underline p-5 mb-6">
        NOSTR - Resources
      </h1>
      <div
        className="flex justify-center min-h-[18rem] w-36rem max-w-[36rem] focus:outline-none"
        onKeyDown={keyDownEv}
        tabIndex={0}
      >
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-8 h-8 fill-white hover:fill-orange-400 cursor-pointer"
            onClick={moveLeft}
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>

        <ContentBox>
          <ul className="max-w-[75vw] min-w-[31rem] min-h-[18rem] list-disc pl-1">
            <img
              src={ostrichImg}
              alt="Ostrich"
              className="absolute h-36 opacity-40 right-5 bottom-0"
            />
            <div className="text-center text-2xl underline text-emerald-300 font-bold mb-6">
              {allCategories[sectionIndex]}
            </div>
            <ResourcesList
              selectedCategory={allCategories[sectionIndex] as category}
            />
          </ul>
        </ContentBox>

        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-8 h-8 fill-white hover:fill-orange-400 cursor-pointer"
            onClick={moveRight}
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
