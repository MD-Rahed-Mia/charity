import React from 'react'
import { ContactInfo } from '../../assets/data/fakedata'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";




export default function Contact() {

  return (
    <div className='contact-section' id='Contact-us'>
      <h3>{ContactInfo.title}</h3>
        <div className="contact-container flex justify-between">
            {
              ContactInfo.infos.map((item, i)=>{
                return(
                  <div key={i}>
                      <span>
                       {
                        i === 0 ? <FaLocationDot/>  : i === 1? <FaPhoneVolume /> : <IoMdMail />
                       }
                      </span>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

