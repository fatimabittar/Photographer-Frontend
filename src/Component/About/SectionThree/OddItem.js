import React from 'react'
import './SectionThree.css'
import dots from '../SectionOne/dotsfinal.jpg'

function OddItem(props) {
    return (
      <div className='about--section-three-container'>
     
      <div className='about--section-three-column-one'>
        <div className='dots-background-three'>
        <img src={dots} alt="image" className='about-section-three-image'/>
        <div className='transparent-dots-three'></div>
        </div>
      </div>
      <div className='about--section-three-column-two'>
          <p className='about--section-three-title'>{props.title}</p>
          <p className='about--section-three-description'>{props.description}</p>
         
      </div>
        
      </div>
    )
  }

export default OddItem
