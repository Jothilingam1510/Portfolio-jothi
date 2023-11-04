import React from 'react'
import { Element } from 'react-scroll'
import './ProjectContainer.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.jpg'
import { GitHub } from '@material-ui/icons'

const Project = [
  {
  id:1,
  imgSrc:img1,
  title:'Tudo List',
  description:" To-do lists can be used to improve time management because all of your tasks are laid out clearly in advance."
},
{
  id:2,
  imgSrc:img2,
  title:'Curd Operation',
  description:"CRUD stands for Create, Read, Update, and Delete. Many HTTP services also model CRUD operations through REST or REST-like APIs."

},
{
  id:3,
  imgSrc:img3,
  title:'Counter App',
  description:"Counter app is used for increasing the number are quantity should  be increased and decreased for multiple purpose"

},
{
  id:4,
  imgSrc:img4,
  title:'SASS Concept',
  description:"SASS concept is used for easy way of finding the style tag for css concept and it may included the basics of all Sass concept"

},
{
  id:5,
  imgSrc:img5,
  title:'Food Website',
  description:"Normally it is a food website for ordering food it may be very usefull and the fast delivery is available in this orde for your food"

},
{
  id:6,
  imgSrc:img6,
  title:'Kidney Website',
  description:"It is used for all the purpose of kidney diseases like To find the kidney stone diseases in this system "

},


]

const ProjectContainer = () => {
 
  return (
  <Element name='Project' className='projectContainer' id='projects'>
    <h1>Projects</h1>
    <p>Here are some of the projects i will do successfully</p>
    <div className='cards'>
    {Project.map(({id,imgSrc,title,description})=>{
      return(
        <div key={id} className='single'>
          <div className='imgdiv'>
            <img src={imgSrc} alt=''/>
          </div>
          <div className='title'>{title}</div>
          <div className="desc">
              <p>{description}</p>
          </div>
          <div className='link'>
            <a href='https://github.com/Jothilingam1510'> <GitHub/> Github</a>
          </div>        
        </div>
      )
    })}
    </div>
  </Element>
  )
}

export default ProjectContainer