import {Link} from 'react-router-dom'
import db from '../../firebase.config'
import React, { useState, useEffect } from 'react'
import Project from '../shared/Project'

function ProjectPreview() {
  let [retrieved, setRetrieved] = useState(false)
  const [projects, setProjects] = useState([])
  
  
  useEffect(() => {
    const fetchProjects = async() => {
      const response = db.collection('projects')
      const data = await response.get();
      for (let i = 0; i < 3; i++) {
        setProjects(projects => [...projects, data.docs[i].data()])        
      }
      // data.docs.forEach(item => {
      //   // projects.push(item.data())
      //   setProjects(projects => [...projects, item.data()])
      // })
      setRetrieved(true)
    }
    fetchProjects();
  }, [])
  
  return (
    <main className="relative">
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
      <Link className="text-black bg-white px-2 py-1 my-8" to="/projects">View all projects</Link>
    </main>
  );
}

export default ProjectPreview;
