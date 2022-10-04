import { Link } from 'react-router-dom'

import projectDetails from 'constants.js'

import 'components/ProjectCard.css'

function ProjectCard({project, size='large'}) {
  return (
    <Link to={`/${project}`} className='project-card'>
      <img src={projectDetails[project].cardImage} alt='' />
      <div className={`project-card-text ${size} ${projectDetails[project].mode}`}>
        <h4>{projectDetails[project].title}</h4>
        <p>{projectDetails[project].company} &nbsp;•&nbsp; {projectDetails[project].year}</p>
      </div>
      <div className='project-card-selection' />
    </Link>
  )
}

export default ProjectCard
