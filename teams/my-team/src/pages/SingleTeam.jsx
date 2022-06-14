
import React from 'react'
import styles from "../css/team.module.css"
import teams from "../data/teams.json"
import { Params, useParams } from 'react-router-dom'
export const SingleTeam = () => {
    let {team} =useParams()
     let teamarr=teams.teams;
  return (

    <div>
        <div className={styles.navbar}>
            <div>
       {
        teamarr.map((el,i)=>{
            return <div key={i}>
                <img src={el.imageId} alt="" />
                <span>{el.teamName}</span>
            </div>
        })
       } 
       <p>|</p>
       <p>Home</p>
       <p>Fixtures and Results</p>
       <p>Players</p>
       <p>Stats</p>
       <p>Videos</p>
       <p>Squads</p>
       <p>Galleries</p>
       <p>Photos</p>
       </div>
    <div>
    </div>
    </div>
    <div className={styles.mainBox}>
        <div className={styles.matches}></div>
        <div className={styles.news}></div>
        <div className={styles.ranking}></div>
    </div>
    </div>
  )
}
