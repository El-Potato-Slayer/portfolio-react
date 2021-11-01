import { useSelector } from "react-redux";
import Project from "../shared/Project"

function Projects() {
  const { projects } = useSelector((state) => state.projectsReducer)
  
  return (
    <main className="projects">
      <h2 className="text-3xl xs:text-4xl">All Projects</h2>
      <div className="projects-wrapper">
        {
          projects && projects.map(project => {
            return (
              <Project key={project.title.toString()} project={project}></Project>
            )
          })
        }
      </div>
    </main>
  );
}

export default Projects;
