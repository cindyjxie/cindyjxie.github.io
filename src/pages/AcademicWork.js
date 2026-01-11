import { academicWorkData } from 'constants.js'

import 'pages/AcademicWork.css'

function AcademicWorkPublicationItem({ item }) {
  return (
    <div className='academic-work-item'>
      <p className='academic-work-item-year'>{item.year}</p>
      <p>
        {item.name}
        &nbsp;“
        <a className='work-item-link' href={item.titleLink} target='_blank' rel='noreferrer'>{item.title}</a>
        ”&nbsp;
        {item.useItalicsOnPublication ? <i>{item.publication}</i> : item.publication}
        {item.publicationPostText ? ` ${item.publicationPostText}` : null}
      </p>
    </div>
  )
}

function AcademicWorkItem({ item }) {
  return (
    <div className='academic-work-item'>
      <p className='academic-work-item-year'>{item.year}</p>
      <p>{item.text}</p>
    </div>
  )
}

function AcademicWorkSection({ type }) {
  return (
    <div className='academic-work-section'>
      <h3>{academicWorkData[type].title}</h3>
      {academicWorkData[type].content.map((k) => 
        k.usePublicationFormat ? <AcademicWorkPublicationItem item={k} /> : <AcademicWorkItem item={k} />)}
    </div>
  )
}

function AcademicWork() {
  return (
    <div className='page-container'>
      <h1 className='page-header black-border-bottom'>Academic Work</h1>
      {Object.keys(academicWorkData).map((k) => <AcademicWorkSection type={k} />)}
    </div>
  )
}

export default AcademicWork
