import React from 'react'
import styles from "../../CSS/Teams/homepage.module.css"
export const HomeBox = ({storyList}) => {
   
  return (
    <div>
        {storyList.map(({story},i)=>{    
          console.log(story.imageId)        
            return <div key={i}>
            <img src={story.imageId} alt="" />   
            <h3>{story.hline}</h3>
            <div className={styles.slider}>
              {story.sublist.map(({story},i)=>{
                return <div>
                   <img src={story.imageId} alt="" />   
                   <p>{story.seoHeadline}</p>
                </div>
              })}
            </div>
            </div>
        })}
    </div>
  )
}
