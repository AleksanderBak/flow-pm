import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjects } from "@/utils/db";

const ProjectLink = ({ project }: { project: any }) => {
  return (
    <div className="flex flex-row px-3 py-6 my-2">
      <h2 className="text-neutral-900 font-bold mr-36">{project.name}</h2>
      <p>{project.updated}</p>
    </div>
  );
};

const Projects = async () => {
  const projects = await getProjects();
  console.log(projects);
  return (
    <div className="m-8">
      <ProjectNavigation />
      <div className="flex flex-col bg-white mt-4 rounded-[8px] shadow-md p-4">
        {projects.map((project: any, index: number) => {
          return (
            <>
              <ProjectLink key={project.id} project={project} />
              {index < projects.length - 1 && (
                <hr className="border-neutral-200" />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
