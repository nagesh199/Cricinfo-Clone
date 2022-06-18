import React, { useEffect, useState } from "react";
import styles from "../../CSS/Teams/team.module.css";
import teams from "../../DATABASE/Teams/teams.json";

import { Match } from "../../components/Teams/match";
import { News } from "../../components/Teams/News";
import { Rank } from "../../components/Teams/Rank";
import { Team } from "../../components/Teams/team";
import axios from "axios";

export const SingleTeam = () => {
  // let { team } = useParams();
 
  let teamarr = teams.teams;

  useEffect(() => { 
    getData();
  },[])
const [newsData,setNews]=useState([])
const [scheduleData,setSchedule]=useState([])
const [wicketData,setWicket]=useState([])
const [runsData,setRuns]=useState([])


const getData= async()=>{
  const news= await axios.get("http://localhost:3030/teamsnews")
  const schedule = await axios.get("http://localhost:3030/schedules")
  const ranking = await axios.get("http://localhost:3030/ranking")
 console.log(ranking.data.RUNS.Test)
  setNews(news.data.storyList)
  setSchedule(schedule.data.teamMatchesData)
  setRuns(ranking.data.RUNS.Test)
  setWicket(ranking.data.WICKETS.Test)
}
  return (
    <div>
      <div className={styles.navbar}>
        <div>
          {teamarr.map((el, i) => {
            return (
              <div className={styles.mainDiv} key={i}>
                <Team {...el} />
              </div>
            );
          })}
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
        <div></div>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.matches}>
          <div className={styles.toggle}>
            <div>Fixtures</div>
            <div>Results</div>
          </div>
          <div>
            {scheduleData.map((el, i) => {
              return (
                <div key={i}>
                  <Match {...el} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.news}>
          {newsData.map((el, i) => {
            if (i === 0) {
              return (
                <div className={styles.cover}>
                  <div>
                    <h3>{el.story.hline}</h3>
                    <p>{el.story.intro}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={i} className={styles.subnews}>
                  <News {...el.story} />
                </div>
              );
            }
          })}
        </div>
        <div className={styles.ranking}>
          <div>
            <div className={styles.fst}>
              <h3>Top Run Scorers</h3>
              <p>In last one year</p>
            </div>
            <div className={styles.option}>
              <div>Test</div>
              <div>ODI</div>
              <div>T20I</div>
              <div>FC</div>
            </div>
            <div className={styles.box}>
              {runsData.map((el, i) => {
                return (
                  <div>
                    <Rank {...el} />
                  </div>
                );
              })}
            </div>
            <div>View All Stats</div>
          </div>
          <div>
            <div className={styles.fst}>
              <h3>Top Wicket Takers</h3>
              <p>In last one year</p>
            </div>
            <div className={styles.option}>
              <div>Test</div>
              <div>ODI</div>
              <div>T20I</div>
              <div>FC</div>
            </div>
            <div className={styles.box}>
              {wicketData.map((el, i) => {
                return (
                  <div>
                    <Rank {...el} />
                  </div>
                );
              })}
            </div>
            <div>View All Stats</div>
          </div>
        </div>
      </div>
    </div>
  );
};
