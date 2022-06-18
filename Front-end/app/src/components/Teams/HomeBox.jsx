import React from 'react'
import styles from "../../CSS/Teams/homepage.module.css"
export const HomeBox = ({storyList}) => {
   
  return (
    <div>
        {storyList.map(({story},i)=>{   
                
            return <div key={i}>
            <img src={story.imageId} alt="" />   
            <h3>{story.hline}</h3>
             <p>{story.intro}</p>
            <div className={styles.slider}>
              {story.sublist.map(({story},i)=>{
                return <div>
                   <img src={story.imageId} alt="" />   
                   <p>{story.seoHeadline}</p>
                </div>
              })}
            </div>
            <div className={styles.oneDiv}>
              <div>
              <img src={story.source.img} alt="" />
              </div>
              <div>
                <h3>{story.source.caption}</h3>
                <p>{story.source.subCaption}</p>
              </div>
            </div>
            </div>
     
        })}
    </div>
  )
}
