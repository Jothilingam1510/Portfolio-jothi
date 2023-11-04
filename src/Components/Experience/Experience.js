import React from 'react'
import { Element } from 'react-scroll'
import './Experience.css'
import doodle from '../../images/doodle.png'
const Experience = () => {
  return (
<>
<Element name='Experience' className='top'>
    <div className='title'>
      <p>EXPERIENCE</p>
    </div>
    <div className='imgdiv'>
      <img src={doodle} alt=''/>
    </div>
    <div className='content'>
    <div className='titles'>
      <h1>Hi, I'am Jothilingam (4 Months)</h1>
      <p>Im worked in Intership as a Front-end developer for four month. I Learned multiple Frontend development languages For Example .,HTML,CSS,SASS,JAVASCRIPT,REACT JS And It may be very helpfull for learning many of this about Frontend development and i also Learned how to handle all the databases </p>
    </div>
    </div>
</Element>
</>  
)
}

export default Experience