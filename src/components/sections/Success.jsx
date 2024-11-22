import React from 'react'
import { achivements } from '../../assets/data/fakedata'





export default function Success() {
//     Statistics and Milestones: Numbers showing how many widows and orphans have been helped.
// Testimonies: Quotes or short videos from beneficiaries and supporters.
// Annual Reports: Downloadable documents showcasing the organization’s work.
  return (
    <div className='achivement-section' id='Achivements'>
      <h3>{achivements.title}</h3>
       <div className="achivement-container">
            <div className="details">
                <h3>{achivements.orphanageTitle}</h3>
                <div className="cards">
                    {
                      achivements.orphanageSupport.map((items, i)=>{
                        return(
                          <div className="info" key={i}>
                            {/* <img src={items.image} alt="orphanage" /> */}
                            <div >
                              <h2>{items.value}+</h2>
                                <h4>{items.title}</h4>
                            </div>
                          </div>
                        )
                      })
                    }
                </div>
            </div>
            <div className="details">
                  <h3>{achivements.widowstitle}</h3>
                  <div className="cards">
                      {
                        achivements.widowSupport.map((items, i)=>{
                          return(
                            <div className="info" key={i}>
                              {/* <img src={items.image} alt="widow" /> */}
                              <div>
                                <h2>{items.value}+</h2>
                                  <h4>{items.title}</h4>
                              </div>
                            </div>
                          )
                        })
                      }
                  </div>
            </div>
       </div>
    </div>
  )
}
