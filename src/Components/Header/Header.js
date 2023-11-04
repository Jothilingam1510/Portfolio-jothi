import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Front<span>End</span> Develop<span>er</span></h1>
        </div>
        <div className='header-right'>
            <Link to='about'smooth={true} duration={500} >
                <h4>
                About Me</h4>
            </Link>
            <Link to='skills'smooth={true} duration={500} >
                <h4>
                Skills</h4>
            </Link>
            <Link to='Project' duration={500} smooth={true}>
                <h4>
                Project</h4>
            </Link>
            <Link to='Experience' duration={500} smooth={true}>
                <h4>
                Experience</h4>
            </Link>
            <Link to='Contact Me' duration={500} smooth={true}>
                <h4>
                Contact Me</h4>
            </Link>

        </div>
    </div>
  )
}

export default Header