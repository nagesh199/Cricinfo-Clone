import React from 'react'
import { Team } from './team'
import styles from "../../CSS/Teams/team.module.css"
export const  Match = ({matchDetailsMap}) => {
  return (
    <>
   {
   
   matchDetailsMap.match.map(({matchInfo},i)=>{

    return <div className={styles.matchBox} key={i}>
        <p>{Date(+matchInfo.startDate)}</p>
        <p>{matchInfo.matchDesc},{" "+matchInfo.venueInfo.ground}</p>
        <div className={styles.team}>
        <Team {...matchInfo.team1}/>
        </div>
        <div className={styles.team}>
        <Team {...matchInfo.team2}/>
        </div>  
        <p>{matchInfo.state}</p>
    </div>
    })
   }
   </>
  )
}
