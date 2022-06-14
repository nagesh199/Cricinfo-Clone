import { Team } from "../components/team";
import list from "../data/db.json";
import styles from "../css/teams.module.css";
import { useNavigate } from "react-router-dom";
export const Teams = () => {
  let teamsarr = list.list;
  let womenarr = list.womenlist;
  let iplarr = list.ipllist;

  const navigate=useNavigate();
  const handleClick=(el)=>{

  navigate(`/teams/${el.teamName}`)

  }
  return (
    <div>
      <div className={styles.container}>
        <span>POPULAR INTERNATIONAL TEAMS</span>
        <div className={styles.mainDiv}>
          {teamsarr.map((el, i) => {
            return (
              <div key={i} onClick={()=>handleClick(el)}>
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
