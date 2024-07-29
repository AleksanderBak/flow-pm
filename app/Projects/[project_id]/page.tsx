import ProjectNavigation from "@/components/ProjectNavigation";
import TaskGroup from "@/components/TaskGroup";
import { FaPlus } from "react-icons/fa";
import PocketBase from "pocketbase";

const NewGroupButton = () => {
  return (
    <div className="flex border-4 border-dotted border-primary-50 rounded-[8px] mr-6 mt-4 w-16 items-center justify-center h-96">
      <FaPlus size={38} className="text-primary-200" />
    </div>
  );
};

const pb = new PocketBase("http://127.0.0.1:8090");

const authData = await pb.admins.authWithPassword(
  "aleksanderbak9@gmail.com",
  "qwertyuiop123"
);

const tasks = await pb.collection("tasks").getFullList({
  sort: "-created",
});

console.log(tasks);

const dummy_tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
  },
];

const ProjectDetails = () => {
  return (
    <div className="m-8">
      <h1 className="text-4xl font-bold mb-8">Project Name -</h1>
      <ProjectNavigation />
      <div className="flex flex-row items-start">
        <TaskGroup title={"ToDo"} tasks={tasks} />
        <TaskGroup title={"In progress"} tasks={[]} />
        <TaskGroup title={"With Problems"} tasks={dummy_tasks} />
        <TaskGroup title={"Additional"} tasks={[]} />
        <NewGroupButton />
      </div>
    </div>
  );
};

export default ProjectDetails;
