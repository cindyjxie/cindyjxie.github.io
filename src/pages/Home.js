import { HashLink } from 'react-router-hash-link'

import headerImg from 'assets/home/home_header_img.png'
import creativeWorkImg from 'assets/home/home_categories_creativework.png'

import 'pages/Home.css'

const categoriesData = [
  {
    title: 'Creative Work',
    blurb: 'Poems, personal essays, interview profiles, and coverage of initiatives I have led.',
    image: creativeWorkImg,
    buttonText: 'Read Here',
    buttonPage: 'creativework',
    imgAlign: 'img-right-align'
  },
  {
    title: 'Reporting',
    blurb: 'Clips of my newsletter writing, feature articles, and blog posts on politics, science and technology, and more.',
    image: creativeWorkImg,
    buttonText: 'Read Here',
    buttonPage: 'reporting',
    imgAlign: 'img-left-align'
  }
]

function CategoriesItem({ item }) {
  return (
    <div className='cateogry-item'>
      <div className='cateogry-item-text'>
        <h2>{item.title}</h2>
        <p>{item.blurb}</p>
        <HashLink className='cateogry-item-button' to={`/${item.buttonPage}`}>
          {item.buttonText}
        </HashLink>
      </div>
      <img src={item.image} alt='' />
    </div>
  )
}

function Home() {
  return (
    <div className='home-page'>
      <div className='home-section black-border-bottom'>
        <div className='page-container'>
          <div className='home-header'>
            <img src={headerImg} alt='' />
            <div className='home-header-text'>
                <h1>Cindy J. Xie</h1>
                <p>
                    I’m an interdisciplinary researcher. facilitator, and storyteller 
                    and a current master’s student in the MIT Department of Urban 
                    Studies & Planning. In the past, I’ve done policy and convening work 
                    with organizations like the Planetary Health Alliance, the U.S. 
                    National Institutes of Health, and the World Wildlife Fund Markets 
                    Institute.
                </p>
                <p>
                    I was previously a staff writer at The Yappie, and my poetry 
                    has been included in Sine Theta and MassPoetry’s 2024 Intercollegiate 
                    Anthology.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className='categories-section'>
        <div className='page-container'>
          <div className='categories-column'>
            {categoriesData.map((k) => <CategoriesItem item={k} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

{/* <div className='projects-grid' id='projects'>
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
          </div> */}