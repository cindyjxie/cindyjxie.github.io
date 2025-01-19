import { reportingData } from 'constants.js'

import 'pages/Reporting.css'

function ReportingItem({ item }) {
    return (
      <a className='reporting-item' href={item.link} target='_blank' rel='noreferrer'>
        <img src={item.image} alt='' />
        <p className='reporting-item-date'>{item.date}</p>
        <h4>{item.title}</h4>
      </a>
    )
  }

function ReportingSection({ type }) {
  return ( 
    <div className='reporting-section black-border-top'>
      <h3>{reportingData[type].title}</h3>
      <div className='reporting-row'>
        {reportingData[type].content.map((k) => <ReportingItem item={k} />)}
      </div>
    </div>
  )
}

function Reporting() {
  return (
    <div className='page-container'>
      <h1 className='page-header'>Reporting</h1>
      {Object.keys(reportingData).map((k) => <ReportingSection type={k} />)}
    </div>
  )
}

export default Reporting
