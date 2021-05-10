import {Link} from 'react-router-dom'
import db from '../../firebase.config'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import Project from '../shared/Project'

function ProjectPreview() {
  const [projects, setProjects] = useState([])
  let [retrieved, setRetrieved] = useState(false)
  const p = []
  const fetchProjects = async() => {
    const response = db.collection('projects')
    const data = await response.get();
    data.docs.forEach(item => {
      projects.push(item.data())
      // p.push(item.data())
      // setProjects([...projects, item.data()])
    })
    setRetrieved(true)
    setProjects(projects)
    // db.collection('projects')
    // .get()
    // .then(snapshot => {
    //   const data = snapshot.docs.map(doc => setProjects(projects => [...projects, doc.data()]))
      
    //   console.log(projects);
    // })
  }
  
  useEffect(() => {
    fetchProjects();
  }, [])
  
  return (
    <main className="relative">
      <h2>Some of my projects</h2>
      <section className="flex h-4/6 items-center">
        {
          retrieved && projects.map(project => {
            return (
              <Project project={project}></Project>
            )
          })
        }
      </section>
      <Link className="text-black bg-white px-2 py-1" to="/projects">View all projects</Link>
    </main>
  );
}

export default ProjectPreview;
