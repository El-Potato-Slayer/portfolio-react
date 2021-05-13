import { useEffect, useState } from "react"
import db from "../../firebase.config"
import Project from "../shared/Project"

function Projects() {
  let [retrieved, setRetrieved] = useState(false)
  const [projects, setProjects] = useState([])

  
  useEffect(() => {
    const fetchProjects = async() => {
      const response = db.collection('projects')
      const data = await response.get();
      data.docs.forEach(item => {
        setProjects(projects => [...projects, item.data()])
      })
      setRetrieved(true)
    }
    fetchProjects();
  }, [])
  
  return (
    <main className="projects">
      <h2 className="text-3xl xs:text-4xl">All Projects</h2>
      <div className="projects-wrapper">
        {
          retrieved && projects.map(project => {
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
