"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const BoardViewDropdown = ({
  tag,
  options,
}: {
  tag: String;
  options?: [String];
}) => {
  return (
    <div className="flex flex-row border-neutral-200 border rounded-[8px] ml-4">
      <button className="flex items-center px-2 py-1 rounded-md text-sm">
        <p className=" text-neutral-400">
          {tag}
          {options ? ":" : ""}{" "}
        </p>
        {options ? (
          <p className="text-primary-950 font-bold ml-1">{options[0]}</p>
        ) : (
          ""
        )}
        <IoIosArrowDown className="ml-2" />
      </button>
    </div>
  );
};

const BoardViewButton = ({ text }: { text: String }) => {
  return (
    <div className="flex flex-row mr-4">
      <button className="text-primary-500">{text}</button>
    </div>
  );
};

const ProjectNavigation = () => {
  return (
    <div className="flex flex-row justify-between bg-white shadow-md rounded-[8px] px-4 h-[48px]">
      <div className="flex flex-row items-center">
        <BoardViewButton text="Board" />
        <BoardViewButton text="List" />
      </div>
      <div className="flex flex-row items-center">
        <BoardViewDropdown tag="Board" options={["Projects"]} />
        <BoardViewDropdown tag="Team" options={["UITeam"]} />
        <BoardViewDropdown tag="Tag" options={["Any"]} />
        <BoardViewDropdown tag="Sort by" options={["Date"]} />
      </div>
    </div>
  );
};

export default ProjectNavigation;
