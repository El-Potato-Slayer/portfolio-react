function Project(prop) {
  const project = prop.project
  return (
    <div className="card mx-4 my-4" style={{ 
      backgroundImage: `url("${project.image}")` 
    }}>
      <div className="card-content" >
        <h3 className="card-title">{project.title}</h3>
        <p className="card-body">{project.description}</p>
        <div className="flex justify-between my-4">
          <a className="button" href={project.link} target="_blank" rel="noreferrer">Live link</a>
          <a className="button" href={project.repo} target="_blank" rel="noreferrer">Repo</a>
        </div>
      </div>
    </div>
  )
}

export default Project;
