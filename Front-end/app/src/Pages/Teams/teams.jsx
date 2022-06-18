import { Team } from "../../components/Teams/team";
import list from "../../DATABASE/Teams/db.json";
import styles from "../../CSS/Teams/teams.module.css";
import { useNavigate } from "react-router-dom";
export const Teams = ({theme}) => {
  let teamsarr = list.list;
  let womenarr = list.womenlist;
  let iplarr = list.ipllist;

  const navigate=useNavigate();
  const handleClick=(el)=>{

  navigate(`/teams/${el.teamName}`)

  }
  return (
    <div id={theme ?styles.day : styles.night}>
      <div  className={styles.container}>
        <span>POPULAR INTERNATIONAL TEAMS</span>
        <div className={styles.mainDiv}>
          {teamsarr.map((el, i) => {
            return (
              <div id={theme ?styles.day : styles.night} key={i} onClick={()=>handleClick(el)}>
                <Team {...el} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        <span>POPULAR WOMEN'S TEAMS</span>
        <div className={styles.mainDiv}>
          {womenarr.map((el, i) => {
            return (
              <div key={i}  onClick={()=>handleClick(el)} >
                <Team {...el} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        <span>IPL 2022 TEAMS</span>
        <div className={styles.mainDiv}>
          {iplarr.map((el, i) => {
            return (
              <div key={i}  onClick={()=>handleClick(el)}>
                <Team {...el} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
