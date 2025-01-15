import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import resume from 'assets/home/Jennifer_Xie_Resume_2022.pdf'

import 'layouts/NavLayout.css'

// TODO reset scroll position for home button, even when you're on same page
function NavigationBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  function reverseExpanded() {
    setIsNavExpanded(!isNavExpanded)
  }

	return (
		<nav className={`${isNavExpanded ? 'expanded' : ''}`}>
			<div className='nav-container page-container'>
				<HashLink to='/#top' className='home-nav-link'>Cindy J. Xie</HashLink>
        <FontAwesomeIcon 
          icon={faBars} 
          className='fa-lg' 
          onClick={() => reverseExpanded()}
        />
				<div className='nav-menu'>
					<HashLink to='/#projects'>Projects</HashLink>
					<HashLink to='/#about'>About</HashLink>
          <a href={resume} target='_blank' rel='noreferrer'>Resume</a>
					<HashLink to='/#contact'>Contact</HashLink>
				</div>
			</div>
      <div className='mobile-nav-menu'>
        <HashLink to='/#top' onClick={() => reverseExpanded()}>Home</HashLink>
        <HashLink to='/#projects' onClick={() => reverseExpanded()}>Projects</HashLink>
        <HashLink to='/#about' onClick={() => reverseExpanded()}>About</HashLink>
        <a href={resume} target='_blank' rel='noreferrer' onClick={() => reverseExpanded()}>Resume</a>
        <HashLink to='/#contact' onClick={() => reverseExpanded()}>Contact</HashLink>
      </div>
      <div 
        className='mobile-nav-backdrop'
        onClick={() => reverseExpanded()} 
      />
		</nav>
	)
}

function NavLayout() {
  return (
    <div>
			<NavigationBar />
      <Outlet />
    </div>
  )
}

export default NavLayout
