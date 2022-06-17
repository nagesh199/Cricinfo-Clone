import React from "react";
import styles from "../../CSS/Teams/team.module.css";
import teams from "../../DATABASE/Teams/teams.json";
// import { useParams } from "react-router-dom";
import teamMatchesData from "../../DATABASE/Teams/schedules.json";
import storyList from "../../DATABASE/Teams/news.json";
import { Match } from "../../components/Teams/match";
import { News } from "../../components/Teams/News";
import { Rank } from "../../components/Teams/Rank";
import { Team } from "../../components/Teams/team";
import ranking from "../../DATABASE/Teams/ranking.json";

export const SingleTeam = () => {
  // let { team } = useParams();
  let schedulearr = teamMatchesData.teamMatchesData;
  let newsarr = storyList.storyList;
  let runsarr = ranking.RUNS.Test;
  let Wicketsarr = ranking.WICKETS.Test;
  console.log(newsarr);
  let teamarr = teams.teams;
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
            {schedulearr.map((el, i) => {
              return (
                <div key={i}>
                  <Match {...el} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.news}>
          {newsarr.map((el, i) => {
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
              {runsarr.map((el, i) => {
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
              {Wicketsarr.map((el, i) => {
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
