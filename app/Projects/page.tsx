import ProjectNavigation from "@/components/ProjectNavigation";
import { getProjects } from "@/utils/db";
import ProjectLink from "@/components/ProjectLink";

const Projects = async () => {
  const projects = await getProjects();
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
