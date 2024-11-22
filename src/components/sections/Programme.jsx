import React from 'react'
import { programme } from '../../assets/data/fakedata'

export default function ProgrameAndServices() {
//     Orphan Care: Details about programs for children's education, healthcare, shelter, and emotional support.
// Support for Widows: Information about vocational training, financial aid, counseling, and empowerment programs.
// Community Outreach: Other initiatives, like awareness campaigns, health camps, or disaster relief efforts.
// Success Stories: Highlight the positive impact on individuals or communities.
  return (
    <div className='programmer-section' id='Programme' style={{backgroundImage:programme.background}}>
        <div className="programme-container flex justify-between">
          <div className="programme-left">
              <h3>{programme.title}</h3>
              <p>{programme.text}</p>
          </div>
            <div className="programme-list">
                {
                  programme.itemList.map((items, i)=>{
                    return(
                      <div className="programme-card" key={i}>
                          {/* <span>
                              <img src={""} alt="icon" />
                          </span> */}
                          <h4>{items.title}</h4>
                      </div>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}
