class Task {
  id: number;
  title: string;
  description: string;

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

const TaskGroup = ({ title, tasks }: { title: String; tasks: [Task] | [] }) => {
  return (
    <div className="bg-white min-w-48 min-h-32 rounded-[8px] mr-6 mt-4 shadow-md">
      <div className="p-4">
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default TaskGroup;
