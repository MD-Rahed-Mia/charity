import React from 'react'
import { missionVission } from '../../assets/data/fakedata'
import mission from '../../assets/images/mission (2).jpg'




export default function Mission_Vission() {
  return (
    <div className='mission-section' id='Mission'>
        <div className="flex justify-between mission-container">
            <div className="image-site">
                <span>
                    <img src={mission} alt={missionVission.image.alt} />
                </span>
            </div>
            <div className="text-site">
                <div className="mission">
                  <span>
                      <h3>{missionVission.mission.title}</h3>
                  </span>
                  <p>{missionVission.mission.text}</p>
                </div>
                <div className="vission">
                  <span>
                      <h3>{missionVission.vission.title}</h3>
                  </span>
                  <p>{missionVission.vission.text}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
