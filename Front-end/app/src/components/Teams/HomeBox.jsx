import React from 'react'
import styles from "../../CSS/Teams/homepage.module.css"
export const HomeBox = ({storyList,theme}) => {
   
  return (
    <div>
        {storyList.map(({story},i)=>{   
                
            return <div key={i}>
            <img src={story.imageId} alt="" />   
            <h3 id={theme ?styles.day : styles.night}>{story.hline}</h3>
             <p id={theme ?styles.day : styles.night}>{story.intro}</p>
            <div className={styles.slider}>
              {story.sublist.map(({story},i)=>{
                return <div>
                   <img src={story.imageId} alt="" />   
                   <p id={theme ?styles.day : styles.night}>{story.seoHeadline}</p>
                </div>
              })}
            </div>
            <div className={styles.oneDiv}>
              <div>
              <img src={story.source.img} alt="" />
              </div>
              <div>
                <h3 id={theme ?styles.day : styles.night}>{story.source.caption}</h3>
                <p id={theme ?styles.day : styles.night}>{story.source.subCaption}</p>
              </div>
            </div>
            </div>
     
        })}
    </div>
  )
}
