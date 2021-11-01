import {Link} from 'react-router-dom'
import Project from '../shared/Project'
import { useSelector } from 'react-redux'
import { shortenedArray } from '../../helpers'

function ProjectPreview(props) {
  const { projects } = useSelector((state) => state.projectsReducer)

  return (
    <main className="relative project-preview">
      <h2 className="text-2xl 2xs:text-3xl xs:text-4xl">Some of my projects</h2>
      <section className="flex flex-wrap h-4/6 items-center justify-center">
        {
          projects.length !== 0 && shortenedArray(projects, 4).map(project => {
            return (
              <Project key={project.title.toString()} project={project}></Project>
            )
          })
        }
      </section>
      <Link className="neon-button my-4" onClick={() => props.handlePageLoad()} to="/projects">All projects</Link>
    </main>
  );
}

export default ProjectPreview;