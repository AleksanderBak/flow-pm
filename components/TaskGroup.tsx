import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";

const TaskGroup = ({ title, tasks }: { title: String; tasks: any[] }) => {
  const numberOfTasks = tasks.length;
  return (
    <div className="bg-white min-w-72 rounded-[8px] mr-6 mt-4 shadow-md inline-block">
      <div className="p-4">
        <h1 className="text-2xl font-bold flex items-center mb-4">
          {title} <GoDotFill className="inline mx-1" /> {numberOfTasks}
        </h1>
        <div>
          {tasks.map((task: any) => {
            return (
              <div
                key={task.id}
                className="my-2 p-4 border border-primary-900 rounded-[8px]"
              >
                <h1 className="text-lg font-bold text-primary-600">
                  {task.title}
                </h1>
                <p className="text-gray-500">{task.description}</p>
              </div>
            );
          })}
        </div>
        <button className="p-4 border border-dotted border-neutral-200 w-full rounded-[8px] flex justify-center hover:bg-primary-50">
          <FaPlus size={24} className="text-neutral-200" />
        </button>
      </div>
    </div>
  );
};

export default TaskGroup;
