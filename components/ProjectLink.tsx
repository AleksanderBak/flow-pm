"use client";
import { useRouter } from "next/navigation";
import { SlOptions } from "react-icons/sl";

const ProjectLink = ({ project }: { project: any }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/Projects/${project.name}`)}
      className="hover:bg-neutral-50 hover:cursor-pointer  hover:shadow-xl transition-all rounded-[8px] flex flex-row px-3 py-6 my-2 items-center justify-between"
    >
      <h2 className="text-neutral-900 font-bold text-base">{project.name}</h2>
      <p className="text-neutral-600 text-sm">{project.updated}</p>
      <div className="p-2 rounded-full hover:bg-neutral-200 transition-all">
        <SlOptions size={24} />
      </div>
    </div>
  );
};

export default ProjectLink;
