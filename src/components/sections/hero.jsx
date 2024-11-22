import React from 'react'
import { heroSection } from '../../assets/data/fakedata'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className='hero-section'>
         <div className='flex justify-between'>
            <div className="title">
                <h2>{heroSection.title}</h2>
                <h4>{heroSection.subtitle}</h4>
                <Link to={"/"} ><button>{heroSection.button}</button></Link>
            </div>
            <div className='hero-img'>
              <img src={heroSection.image} alt={heroSection.title} />
            </div>
         </div>
    </div>
  )
}
