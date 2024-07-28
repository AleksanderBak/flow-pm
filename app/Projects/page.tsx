import ProjectNavigation from "@/components/ProjectNavigation";
import TaskGroup from "@/components/TaskGroup";
import { FaPlus } from "react-icons/fa";

const NewGroupButton = () => {
  return (
    <div className="flex border-4 border-dotted border-primary-50 rounded-[8px] mr-6 mt-4 w-16 h-96 items-center justify-center">
      <FaPlus size={38} className="text-primary-200" />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="m-8">
      <ProjectNavigation />
      <div className="flex flex-row">
        <TaskGroup title={"ToDo"} tasks={[]} />
        <TaskGroup title={"In progress"} tasks={[]} />
        <TaskGroup title={"With Problems"} tasks={[]} />
        <TaskGroup title={"Additional"} tasks={[]} />
        <NewGroupButton />
      </div>
    </div>
  );
};

export default Projects;
