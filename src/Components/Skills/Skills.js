import React from 'react'
import { Element } from 'react-scroll'
import hack from '../../images/hack.jpg'
import './Skill.css'
import { LinearProgress } from '@material-ui/core'

const Skill = () => {
  return (
<>
<Element className='SkillContainer' id='skills'>
    <div className='SkillContainer-image'>
        <img   src={hack} alt=''/>
    </div>
    <div className='SkillContainer-text'>
        <h2>Skill Sets</h2>
        <div className='skillContainer-skillset'>
        <h4>HTML & CSS</h4>
        <div className='SkillContainer-slider SkillContainer-slider1'>
        <LinearProgress variant="determinate" value={90} />
        </div>
        </div>
        <div className='skillContainer-skillset'>
        <h4>JavaScript</h4>
        <div className='SkillContainer-slider SkillContainer-slider2'>
        <LinearProgress variant="determinate" value={60} />
        </div>
        </div>
        <div className='skillContainer-skillset'>
        <h4>React js</h4>
        <div className='SkillContainer-slider SkillContainer-slider3'>
        <LinearProgress variant="determinate" value={80} />
        </div>
        </div>
        <div className='skillContainer-skillset'>
        <h4>Python</h4>
        <div className='SkillContainer-slider SkillContainer-slider4'>
        <LinearProgress variant="determinate" value={60} />
        </div>
        </div>
        <div className='skillContainer-skillset'>
        <h4>Node.Js</h4>
        <div className='SkillContainer-slider SkillContainer-slider5'>
        <LinearProgress variant="determinate" value={50} />
        </div>
        </div>
    </div>
</Element>
</>
  )
}

export default Skill