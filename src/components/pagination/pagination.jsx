import React from 'react'

export default function Pagination({totalPage,}) {
  return (
    <div className='flex justify-between'>
        {/* <ul>
            <li>Prev</li>
            {
                totalPage.map((items, i)=>{
                    return(
                        <li key={i}>{items}</li>
                    )
                })
            }
            <li>Next</li>
        </ul> */}
    </div>
  )
}
