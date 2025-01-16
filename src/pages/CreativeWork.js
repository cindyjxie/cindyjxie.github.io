import 'layouts/ProjectLayout.css'

// TODO Rearrange so link is second, and add an italics true false field in
const creativeWorkData = [
  {
    title: 'Poetry',
    content: [
      {
        title: 'Praia',
        publication: 'MassPoetry Futures in Verse (2024 Intercollegiate Poetry Showcase Anthology)',
        link: 'https://masspoetry.org/events/intercollegiate-poetry-showcase/'
      },
      {
        title: 'All Nighter to Sit in a Parking Lot at Sunrise',
        publication: 'Sine Theta',
        link: 'https://sinetheta.net/30.html'
      }
    ]   
  },
  {
    title: 'Essays and Interviews',
    content: [
      {
        title: 'Where are you Really From?',
        publication: 'MISTI Blogs',
        link: 'https://mistiblogs.com/2023/08/03/between-race-ethnicity/'
      },
      {
        title: 'Congo Clothing Company: Streetwear for Social Justice',
        publication: 'Infinite Magazine',
        link: 'https://static1.squarespace.com/static/61c2186ddb919d51e7522e72/t/64703a45d830b35a11ebd9c7/1685076566038/CCCLayout1.pdf'
    }
    ] 
  },
  {
    title: 'Profiles and News Coverage',
    content: [
      {
        title: 'MIT Planetary Health Ambassador Brings Students Together to Discuss the Effects of Environmental Change on Health and Well-Being',
        publication: 'MIT Division of Student Life News',
        link: 'https://studentlife.mit.edu/mit-planetary-health-ambassador-brings-students-together-discuss-effects-environmental-change-health'
      },
      {
        title: 'Convening for Cultural Change',
        publication: 'MIT News',
        link: 'https://news.mit.edu/2024/cindy-xie-convening-cultural-change-0528'
      }
    ] 
  }
]

function CreativeWorkItem({ item }) {
    return (
      <p>
        <a href={item.link} target='_blank' rel='noreferrer'>"{item.title}"</a>
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
    <div className='project-page'>
      <div className='page-container'>
        <h1>Creative Work</h1>
        {Object.keys(creativeWorkData).map((k) => <CreativeWorkSection type={k} />)}
      </div>
    </div>
  )
}

export default CreativeWork
