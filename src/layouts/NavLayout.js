import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import 'layouts/NavLayout.css'

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
