"use client";
import React from "react";

const BoardViewDropdown = ({
  tag,
  options,
}: {
  tag: String;
  options: [String];
}) => {
  return (
    <div className="flex flex-row">
      <button className="  px-4 py-2 rounded-md">{tag}</button>
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
        <BoardViewDropdown tag="Board" options={["1"]} />
        <BoardViewDropdown tag="Team" options={["1"]} />
        <BoardViewDropdown tag="Tag" options={["1"]} />
        <BoardViewDropdown tag="Sort by" options={["1"]} />
      </div>
    </div>
  );
};

export default ProjectNavigation;
