import { creativeWorkData } from 'constants.js'

import 'pages/CreativeWork.css'

function CreativeWorkItem({ item }) {
    return (
      <p className='creative-work-item'>
        “
        <a href={item.link} target='_blank' rel='noreferrer'>{item.title}</a>
        ”
        &nbsp;in&nbsp;
        {item.publication}
      </p>
    )
  }

function CreativeWorkSection({ type }) {
  return (
    <div className='creative-work-section'>
      <h3>{creativeWorkData[type].title}</h3>
      {creativeWorkData[type].content.map((k) => <CreativeWorkItem item={k} />)}
    </div>
  )
}

function CreativeWork() {
  return (
    <div className='main-page'>
      <div className='page-container'>
        <h1 className='page-header black-border-bottom'>Creative Work</h1>
        {Object.keys(creativeWorkData).map((k) => <CreativeWorkSection type={k} />)}
      </div>
    </div>
  )
}

export default CreativeWork
