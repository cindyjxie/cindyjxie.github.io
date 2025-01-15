import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareBehance, faSquareDribbble } from '@fortawesome/free-brands-svg-icons'

import ProjectCard from 'components/ProjectCard.js'

import headerIllustration from 'assets/home/header_illustration.png'
import footerIllustration from 'assets/home/footer_illustration.png'
import resumeButton from 'assets/home/resume_button.png'
import resumeHoverButton from 'assets/home/resume_button_hover.png'
import resume from 'assets/home/Jennifer_Xie_Resume_2022.pdf'

import 'pages/Home.css'

const skillDetails = {
  'art': {
    title: 'Art',
    color: 'purple',
    skills: ['Photoshop', 'Illustrator']
  },
  'ui': {
    title: 'UI/UX',
    color: 'pink',
    skills: ['Figma', 'Sketch']
  },
  'gamedev': {
    title: 'Game Dev',
    color: 'red',
    skills: ['Unity', 'C#', 'C++', 'Lua']
  },
  'frontend': {
    title: 'Front-end',
    color: 'orange',
    skills: ['HTML', 'CSS', 'Javascript', 'React']
  },
  'backend': {
    title: 'Back-end',
    color: 'yellow',
    skills: ['Python', 'Java', 'Go', 'SQL']
  },
}

const contactDetails = {
  'email': {
    icon: faSquareEnvelope,
    text: 'xjenniferxie@gmail.com',
    link: 'mailto:xjenniferxie@gmail.com'
  },
  'linkedin': {
    icon: faLinkedin,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jennifer-xie'
  },
  'behance': {
    icon: faSquareBehance,
    text: 'Behance',
    link: 'https://www.behance.net/xjenniferx150a'
  },
  'dribbble': {
    icon: faSquareDribbble,
    text: 'Dribbble',
    link: 'https://dribbble.com/xjenniferxie'
  }
}

function SkillItem({ skill }) {
  return (
    <div className='skills-item'>
      <h5 className={skillDetails[skill].color}>{skillDetails[skill].title}</h5>
      <ul>
        {skillDetails[skill].skills.map((s) => <li key={skill}>{s}</li>)}
      </ul>
    </div>
  )
}

function ContactItem({ type }) {
  return (
    <div className='contact-item'>
      <FontAwesomeIcon icon={contactDetails[type].icon} className='fa-lg' />
      <a href={contactDetails[type].link} target='_blank' rel='noreferrer'>{contactDetails[type].text}</a>
    </div>
  )
}

function Home() {
  const [rButton, setRButton] = useState(resumeButton)

  return (
    <div className='home-page'>
      <div className='home-section gold-border-bottom'>
        <div className='page-container'>
          <div className='home-header'>
            <img src={headerIllustration} alt='' />
            <div className='home-header-text'>
              <h1>Cindy J. Xie</h1>
              <p>
                Hey there! I'm a Game UI/UX Artist with previous experience as a 
                UI/UX designer and software engineer at Twitter.
              </p>
            </div>
          </div>

          <div className='projects-grid' id='projects'>
            <div className='projects-grid-row'>
              <ProjectCard project='genshin' />
              <ProjectCard project='mario' />
            </div>
            <div className='projects-grid-row'>
              <ProjectCard project='kubernetes' />
              <ProjectCard project='opensource' />
            </div>
            <div className='projects-grid-row'>
              <ProjectCard project='capacity' />
              <ProjectCard project='placeholder' />
            </div>
          </div>
        </div>
      </div>

      <div className='about-section gold-border-bottom' id='about'>
        <div className='page-container'>
          <div className='about-header'>
            <h3>About</h3>
            <a href={resume} target='_blank' rel='noreferrer'>
              <img 
                src={rButton} 
                alt='Resume button' 
                onMouseEnter={() => setRButton(resumeHoverButton)}
                onMouseOut={() => setRButton(resumeButton)}
              />
            </a>
          </div>
          <p>
            I specialize in UI/UX design, but my skills span a broad spectrum—
            I have experience in everything from graphic design to 
            programming React Apps and APIs. Here's an overview of my skillset:
          </p>
          <div className='skills-row'>
            {Object.keys(skillDetails).map((k) => <SkillItem skill={k} />)}
          </div>
        </div>
      </div>

      <div className='contact-section' id='contact'>
        <div className='page-container'>
          <div className='contact-content'>
            <div>
              <h3>Contact</h3>
              <div className='contact-column'>
                {Object.keys(contactDetails).map((k) => <ContactItem type={k} />)}
              </div>
            </div>
            <img src={footerIllustration} alt='' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
