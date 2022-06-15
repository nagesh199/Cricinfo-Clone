
import React from 'react'
import styles from "../css/team.module.css"
import teams from "../data/teams.json"
import { useParams } from 'react-router-dom'
import teamMatchesData from "../data/schedules.json"
import { Match } from '../components/match'
export const SingleTeam = () => {
    let {team} =useParams()
    let schedulearr = teamMatchesData.teamMatchesData;
    console.log(schedulearr[0].matchDetailsMap.match)
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
        <div className={styles.matches}>
            <div className={styles.toggle}>
                <div>Fixtures</div>
                <div>Results</div>
            </div>
            <div>
                {
    schedulearr.map((el,i)=>{
        return <div key={i}>
          <Match{...el}  />
        </div>
    })

                }
            </div>
        </div>
        <div className={styles.news}></div>
        <div className={styles.ranking}></div>
    </div>
    </div>
  )
}
