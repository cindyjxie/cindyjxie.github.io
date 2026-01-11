import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import 'layouts/NavLayout.css'

// Font Awesome google scholar icon wasn't available in free-brands-svg-icons, 
// so I used the svg directly.
function GoogleScholarIcon() {
  return (
    <svg className="google-scholar-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path fill="currentColor" d="M454.9 362.5C454.9 362.5 454.9 362.6 455 362.6C464.2 382 469.4 403.7 469.4 426.6C469.3 509.1 402.5 576 320 576C237.5 576 170.7 509.1 170.7 426.7C170.7 403.8 175.9 382.1 185.1 362.7C186.8 359.1 188.7 355.5 190.7 352C195.1 344.4 200.1 337.3 205.7 330.7C233.1 298.1 274.2 277.4 320.1 277.4C353.7 277.4 384.7 288.5 409.7 307.3C418.8 314.2 427.1 322 434.5 330.8C440.1 337.4 445.1 344.6 449.5 352.1C451.5 355.5 453.3 359.1 455 362.6L454.9 362.5zM481.3 343.7C451.2 285.3 390.3 245.3 320 245.3C249.7 245.3 188.8 285.3 158.7 343.7L64 266.7L320 64L576 266.7L481.3 343.8L481.3 343.7z"/>
    </svg>
  )
}

// TODO reset scroll position for home button, even when you're on same page
function NavigationBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  function reverseExpanded() {
    setIsNavExpanded(!isNavExpanded)
  }

	return (
		<nav className={`${isNavExpanded ? 'expanded' : ''} black-border-bottom`}>
			<div className='nav-container page-container'>
				<HashLink to='/#top' className='home-nav-link'>Cindy J. Xie</HashLink>
        <FontAwesomeIcon 
          icon={faBars} 
          className='fa-lg' 
          onClick={() => reverseExpanded()}
        />
				<div className='nav-menu'>
          <HashLink to='/academicwork'>Academic Work</HashLink>
					<HashLink to='/creativework'>Creative Work</HashLink>
					<HashLink to='/reporting'>Reporting</HashLink>
          <a href='https://www.linkedin.com/in/cindy-x/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedinIn} className='fa-linkedin-in' />
          </a>
          <a href='https://scholar.google.com/citations?user=_e7GpwgAAAAJ&hl=en' target='_blank' rel='noreferrer'>
            <GoogleScholarIcon />
          </a>
          <a href='https://twitter.com/cj_xie' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTwitter} className='fa-twitter' />
          </a>
				</div>
			</div>
      <div className='mobile-nav-menu'>
        <HashLink to='/academicwork' onClick={() => reverseExpanded()}>Academic Work</HashLink>
        <HashLink to='/creativework' onClick={() => reverseExpanded()}>Creative Work</HashLink>
        <HashLink to='/reporting' onClick={() => reverseExpanded()}>Reporting</HashLink>
        <a href='https://www.linkedin.com/in/cindy-x/' target='_blank' rel='noreferrer' onClick={() => reverseExpanded()}>
            <FontAwesomeIcon icon={faLinkedinIn} className='fa-linkedin-in' />
        </a>
        <a href='https://scholar.google.com/citations?user=_e7GpwgAAAAJ&hl=en' target='_blank' rel='noreferrer'>
            <GoogleScholarIcon />
          </a>
        <a href='https://twitter.com/cj_xie' target='_blank' rel='noreferrer' onClick={() => reverseExpanded()}>
          <FontAwesomeIcon icon={faTwitter} className='fa-twitter' />
        </a>
      </div>
      <div 
        className='mobile-nav-backdrop'
        onClick={() => reverseExpanded()} 
      />
		</nav>
	)
}

function Footer() {
  return (
    <div className='footer black-border-top'>
      <div className='footer-container page-container'>
        <div className='footer-menu'>
          <a href='https://www.linkedin.com/in/cindy-x/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedinIn} className='fa-linkedin-in' />
          </a>
          <a href='https://scholar.google.com/citations?user=_e7GpwgAAAAJ&hl=en' target='_blank' rel='noreferrer'>
            <GoogleScholarIcon />
          </a>
          <a href='https://twitter.com/cj_xie' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTwitter} className='fa-twitter' />
          </a>
        </div>
      </div>
    </div>
  )
}

function NavLayout() {
  return (
    <div className='nav-layout'>
			<NavigationBar />
      <Outlet />
      <div className='footer-top-space' />
      <Footer />
    </div>
  )
}

export default NavLayout
