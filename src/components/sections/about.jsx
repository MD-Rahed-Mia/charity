import React from 'react'
import { About } from '../../assets/data/fakedata'

export default function AboutSection() {
  return (
    <div className='about-section' id="About">
        <div className="flex justify-between about-container">
            <div className="text">
              <h3>{About.title}</h3>
              <p>{About.text}</p>
            </div>
            <div className="about-img">
                <img src={About.image} alt="about" />
            </div>
        </div>
    </div>
  )
}
