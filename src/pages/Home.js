import { HashLink } from 'react-router-hash-link'

import headerImg from 'assets/home/home_header_img.png'
import creativeWorkImg from 'assets/home/home_category_creativework.png'
import reportingImg from 'assets/home/home_category_reporting.png'

import 'pages/Home.css'

const categoryData = [
  {
    title: 'Creative Work',
    blurb: 'Poems, personal essays, interview profiles, and coverage of initiatives I have led.',
    image: creativeWorkImg,
    imageAltText: '',
    buttonText: 'Read Here',
    buttonPage: 'creativework',
    imgAlign: 'img-right-align'
  },
  {
    title: 'Reporting',
    blurb: 'Clips of my newsletter writing, feature articles, and blog posts on politics, science and technology, and more.',
    image: reportingImg,
    imageAltText: '',
    buttonText: 'Read Here',
    buttonPage: 'reporting',
    imgAlign: 'img-left-align'
  }
]

function CategoryItem({ item }) {
  return (
    <div className={`category-item ${item.imgAlign} black-border-thick`}>
      <img src={item.image} alt={item.imgAltText} />
      <div className='category-item-text'>
        <h2>{item.title}</h2>
        <p>{item.blurb}</p>
        <HashLink className='category-item-button' to={`/${item.buttonPage}`}>
          {item.buttonText}
        </HashLink>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className='home-page'>
      <div className='home-section black-border-bottom'>
        <div className='page-container'>
          <div className='home-header'>
            <div className='home-header-img-wrapper'>
              <img className='black-border-thick' src={headerImg} alt='' />
              <div className='background-square black-border-thick' />
            </div>
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
                    I was previously a staff writer at <i>The Yappie</i>, and my poetry 
                    has been included in <i>Sine Theta</i> and MassPoetry’s 2024 
                    Intercollegiate Anthology.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className='category-section'>
        <div className='page-container'>
          <div className='category-column'>
            {categoryData.map((k) => <CategoryItem item={k} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
