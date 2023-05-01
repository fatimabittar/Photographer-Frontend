import React from 'react'
import heroImage from '../images/Hero.png';
import { Parallax } from "react-parallax"; 
export const GalleryHero = () => {
  return (
    <div className='galleryHero'>
        <Parallax
        bgImage={heroImage}
        strength={600}
        className='imageH'
        
      ></Parallax>
    </div>
  )
}