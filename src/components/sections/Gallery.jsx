import React, { useState } from 'react'
import { Gallary } from '../../assets/data/fakedata';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';






export default function Gallery() {
  const allImg = Gallary.filter((items) => items.catagory !== "video")
    const [filter, setFilter] = useState(allImg);
    const [video, setVideo] = useState([]);
    const handleFilter = (type) => {
        const filteredItems = allImg.filter((items) => items.catagory === type)
        setFilter(filteredItems);
        console.log(filteredItems)
    }

    const videos = Gallary.filter((item)=> item.catagory === "video")


  return (
    <Tabs>
      <TabList>
        <Tab onClick={()=>{setFilter(allImg)}}>All</Tab>
        <Tab onClick={()=>{handleFilter("orphanage")}}>orphanage</Tab> 
        <Tab onClick={()=>{handleFilter("widows")}}>widows</Tab>
        <Tab onClick={()=>{setFilter(videos)}}>videos</Tab>
      </TabList>

      <TabPanel>
       <div className="gallary-items">
          {
            filter.length < 1? <p style={{color:"red"}}>There is no video item</p> :
            filter.map((elem, i)=>{
              console.log(elem)
             return(
               <div key={i} className='item'>
                <img src={elem.image} alt="image"  />
               </div>
             )
            })
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className="gallary-items">
          {
            filter.length < 1? <p style={{color:"red"}}>There is no items</p> :
            filter.map((elem, i)=>{
              return(
                <div key={i} className='item'>
                    <img src={elem.image} alt={elem.name}/>
                </div>
              )
            })
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className="gallary-items">
          {
            filter.length < 1? <p style={{color:"red"}}>There is no items</p> :
            filter.map((elem, i)=>{
              return(
                <div key={i} className='item'>
                    <img src={elem.image} alt={elem.name}/>
                </div>
              )
            })
          }
        </div>
      </TabPanel>
    
      <TabPanel>
      <div className="gallary-items">
          {
            filter.length < 1? <p style={{color:"red"}}>There is no video item</p> :
            filter.map((elem, i)=>{
              console.log(elem)
             return(
               <div key={i} className='item'>
                 <iframe width="100%" height="363" src="https://www.youtube.com/embed/Q2RnEErUmGs" title="Bhool Bhulaiyaa 3: Beiraada | Kartik Aaryan, Triptii Dimri | Sachet-Parampara, Rashmi V | Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               </div>
             )
            })
          }
        </div>
      </TabPanel>
  </Tabs>
  )
}
