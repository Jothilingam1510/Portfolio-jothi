import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent-right'>
            <h1>Mr.P.JothiLingam </h1>
            <p>Professional Frontend and React'js Developer</p>
            <div className='button'>
            <a href='https://www.linkedin.com/in/jothilingam-p-6a158226b'>
                <button className='download'>MY RESUME</button>
            </a>
            <Link to='Project' smooth={true} duration={500}>
                <button className='mywork'>MY WORK</button>
            </Link>
            </div>
        </div>

    </div>

  )
}

export default TopContent