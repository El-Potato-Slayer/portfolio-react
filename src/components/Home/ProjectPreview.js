import {Link} from 'react-router-dom'
import db from '../../firebase.config'
import React, { useState, useEffect } from 'react'
import Project from '../shared/Project'

function ProjectPreview(props) {
  let [retrieved, setRetrieved] = useState(false)
  const [projects, setProjects] = useState([])
  
  
  useEffect(() => {
    const fetchProjects = async() => {
      const response = db.collection('projects')
      const data = await response.get();
      for (let i = 0; i < 3; i++) {
        setProjects(projects => [...projects, data.docs[i].data()])        
      }
      setRetrieved(true)
    }
    fetchProjects();
  }, [])
  
  return (
    <main className="relative project-preview">
      <h2 className="text-2xl 2xs:text-3xl xs:text-4xl">Some of my projects</h2>
      <section className="flex flex-wrap h-4/6 items-center justify-center">
        {
          retrieved && projects.map(project => {
            return (
              <Project key={project.title.toString()} project={project}></Project>
            )
          })
        }
      </section>
      <Link className="neon-button my-4" onClick={props.handlePageLoad} to="/projects">All projects</Link>
    </main>
  );
}

export default ProjectPreview;