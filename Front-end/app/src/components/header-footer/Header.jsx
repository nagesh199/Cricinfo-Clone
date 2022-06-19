import Data from "./ScoreCard.json";
import React from "react";
import styles from "./Header.module.css";

// import ScoreCard from "./ScoreCard";



 const Header = () => {
    // console.log(Data.sliderData)
    
    return (
      <>
        <div className={styles.main}>

         
        { Data.sliderData.map((item) => (
            <div className={styles.itemContainer}>

            <div className={styles.category}>
            <div><p>{item.live}</p></div>
            <div><p>{item.category}</p></div>
            </div>

            <div className={styles.team1}>
            <div className={styles.team1Img}><img src={item.team1Img} alt="" /><p>{item.team1}</p><div><h4>{item.team1Score}</h4></div></div>
            </div>

            <div className={styles.team2}>
            <div className={styles.team2Img}><img src={item.team2Img} alt="" /><p>{item.team2}</p><div><h4>{item.team2Score}</h4></div></div>
            </div>

            <div className={styles.result}><p>{item.result}</p></div>
        </div>
        ))}

       
        
        </ div>
      </>
    );
  };

export default Header;