import React from 'react'
import './SectionOne.css'
import dots from './dotsfinal.jpg'


function CardSectionOne(props) {
  return (
    <div className='about--section-one-container'>
    <div className='about--section-one-column-one'>
        <p className='about--section-one-title'>{props.title}.</p>
        <p className='about--section-one-description'>{props.description}.</p>
        <ul>
            <li>Over 15 years of experience</li>
            <li>200+ successfully executed</li>
            <li>Exceptional Work Quality</li>

        </ul>
    </div>
    <div className='about--section-one-column-two'>
      <div className='about--section-one-image-backgroud'>
      <img  src={`data:image/jpeg;base64,${props.imageSrc}`} alt="it is an image." className='about-section-one-image'/>
      <div className='transparent-dots'></div>
      </div>
    </div>
      
    </div>
  )
}

export default CardSectionOne






