import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css'
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons'
const Contact = () => {
  return (
<>
<Element name="Contact Me" className='contact'>
    <h1>Contact</h1>
    <div className='contact-container'>
        <p>
            Email  : <span>jothilingam1510@gmail.com</span>
        </p>
        <p>
            GitHub-User :  <span>Jothilingam1510</span>    
        </p>  
        <p>
            Address  : <span>54,A East Car Street , Vallioor  Tirunelveli,TamilNadu Pin-code:627-117</span>
        </p>
        <p>
            Mobile-Number :  <span>+91-7094413371</span>    
        </p>     
        <div className='contact-icon'>
            <a href='https://www.linkedin.com/in/jothilingam-p-6a158226b'>
                    <LinkedIn/>
            </a>
            <a href='https://www.facebook.com/'>
                    <Facebook/>
            </a>
            <a href='https://instagram.com/thenameisjo._?igshid=OTk0YzhjMDVlZA=='>
                    <Instagram/>
            </a>
        </div>
    </div>
</Element>
</>  
)
}

export default Contact