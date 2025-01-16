import mitRegressionsImg from 'assets/reporting/mit_regressions.png'

import 'layouts/ProjectLayout.css'

const reportingData = [
  {
    title: 'Politics',
    content: [
      {
        title: 'Return of Native Hawaiian ancestral lands still blocked by military failures, regulatory disputes',
        date: 'December 6, 2022',
        link: 'https://theyappie.com/native-hawaiian-housing/',
        image: 'https://theyappie.com/wp-content/uploads/2022/12/marine-corps-base-hawaii-an-explosive-ordnance-disposal-a9f639-1024-800x500.jpg'
      },
      {
        title: 'Republican Michelle Steel re-elected in redrawn California district after controversial campaign',
        date: 'November 14, 2022',
        link: 'https://theyappie.com/midterm-california-michelle-steel-jay-chen/',
        image: 'https://theyappie.com/wp-content/uploads/2022/11/49352840458_3617928b76_k-800x500.jpg'
      },
      {
        title: 'A decade after Oak Creek massacre, grief remains fresh for many Sikh Americans',
        date: 'August 8, 2022',
        link: 'https://theyappie.com/oak-creek-shooting-sikh-americans/',
        image: 'https://theyappie.com/wp-content/uploads/2022/08/FZg1jG6X0AI-l6X-1800x1024.jpg'
      }
    ]   
  },
  {
    title: 'Newsletter Writing',
    content: [
      {
        title: 'Election briefing: Incumbents dominate as GOP’s Asian American hopefuls are shut out',
        date: 'November 14, 2022',
        link: 'https://theyappie.com/midterms-incumbents-dominate-republican-democrat-asian-americans/',
        image: 'https://theyappie.com/wp-content/uploads/2022/11/joshua-sukoff-SYHi8oX0JC8-unsplash-800x500.jpg'
      },
      {
        title: 'Politics briefing: Unpacking the White House’s Pacific Island partnership strategy',
        date: 'October 18, 2022',
        link: 'https://theyappie.com/white-houses-pacific-island-partnership-strategy/',
        image: 'https://theyappie.com/wp-content/uploads/2022/10/WH-Photo-800x500.jpg'
      },
      {
        title: 'Interior Department to begin formally consulting Native Hawaiians',
        date: 'October 31, 2022',
        link: 'https://theyappie.com/interior-department-to-begin-formally-consulting-native-hawaiians/',
        image: 'https://theyappie.com/wp-content/uploads/2022/10/51685172469_fc74c75d4c_k-800x500.jpg'
      }
    ]   
  },
  {
    title: 'Science and Technology',
    content: [
      {
        title: 'Digital Health Equity: ‘The Center Cannot Hold’',
        date: 'October 21, 2022',
        link: 'https://medium.com/@cindyjxie/digital-health-equity-the-center-cannot-hold-bd95efa08292',
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*yYNx4xosBVlPHBE2_J6qAA.png'
      },
      {
        title: 'An interview with Professor Florence Bourgeois: On policy and regulation of clinical trials',
        date: 'August 30, 2021',
        link: 'https://sciencepolicyreview.org/2021/08/florence-bourgeois-policy-regulation-clinical-trials/',
        image: 'https://sciencepolicyreview.org/wp-content/uploads/2021/08/IMG_1441-1024x565.jpeg'
      },
      {
        title: 'Delivering customer service to water service users: The role of third parties',
        date: 'March 23, 2021',
        link: 'https://americanwatershutoffs.mit.edu/blog/delivering-customer-assistance-water-service-users-role-third-parties',
        image: 'https://americanwatershutoffs.mit.edu/sites/default/files/images/Water%20Faucet%20Image.jpg'
      }
    ]   
  },
  {
    title: 'Arts and Culture',
    content: [
      {
        title: '‘MIT: REGRESSIONS’ sparks debate over the Institute’s past and future',
        date: 'October 12, 2022',
        link: 'https://thetech.com/2022/10/12/mit-regressions-second-screening',
        image: mitRegressionsImg
      },
      {
        title: '‘All In’ is an appeal to fundamental American rights',
        date: 'October 15, 2020',
        link: 'https://thetech.com/2020/10/15/all-in-review',
        image: 'https://s3.amazonaws.com/thetech-production/images/web_photos/web/9492_all-in-the-fight-for-democracy-UVSD_SG_00239_rgb_-_Liane_Xu.jpg?1602637583'
      }
    ]   
  }
]

function ReportingItem({ item }) {
    return (
      <a href={item.link} target='_blank' rel='noreferrer'>
        <img src={item.image} alt='' />
        <p>{item.date}</p>
        <h4>{item.title}</h4>
      </a>
    )
  }

function ReportingSection({ type }) {
  return (
    <div className='reporting-section'>
      <h3>{reportingData[type].title}</h3>
      {reportingData[type].content.map((k) => <ReportingItem item={k} />)}
    </div>
  )
}

function Reporting() {
  return (
    <div className='project-page'>
      <div className='page-container'>
        <h1>Reporting</h1>
        {Object.keys(reportingData).map((k) => <ReportingSection type={k} />)}
      </div>
    </div>
  )
}

export default Reporting
