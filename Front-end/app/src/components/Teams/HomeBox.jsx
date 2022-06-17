import React from 'react'
import styles from "../css/"
export const HomeBox = ({storyList}) => {
   
  return (
    <div>
        {storyList.map(({story},i)=>{
            if(i===0){            
            return <div key={i}>
             <img src={story.imageId} alt="" />   
            <h3>{story.hline}</h3>
            </div>
            }
        })}
    </div>
  )
}
