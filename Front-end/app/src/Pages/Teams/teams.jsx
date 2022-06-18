import { Team } from "../../components/Teams/team";
import list from "../../DATABASE/Teams/db.json";
import styles from "../../CSS/Teams/teams.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
export const Teams = ({theme}) => {

  useEffect(() => { 
    getData();
  },[])
const [iplData,setipl]=useState([])
const [teamData,setTeam]=useState([])
const [womenData,setwData]=useState([])

  const navigate=useNavigate();
  const handleClick=(el)=>{
  navigate(`/teams/${el.teamName}`)
  }
const getData= async()=>{
  const res= await axios.get("http://localhost:3030/teams")
  console.log(res.data.ipllist)
  setipl(res.data.ipllist)
  setTeam(res.data.list)
  setwData(res.data.womenlist)
}

  return (
    <div id={theme ?styles.day : styles.night}>
      <div  className={styles.container}>
        <span>POPULAR INTERNATIONAL TEAMS</span>
        <div className={styles.mainDiv}>
          {teamData.map((el, i) => {
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
          {womenData.map((el, i) => {
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
          {iplData.map((el, i) => {
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
