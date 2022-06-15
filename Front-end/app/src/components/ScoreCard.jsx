import React from "react";
import styles from "./ScoreCard.module.css"

const ScoreCard = ({ team1Img, live, category, team2Score}) => {
    //console.log(props)
    return (
    <div className="itemContainer">
      <div className={styles.itemImg}>
        <img src={team1Img} alt={live} />
      </div>
      <div className={styles.itemInfo}>
        <p className={styles.brand}>{live}</p>
        <p className={styles.title}>{category}</p>
        <p className={styles.price}>₹ {team2Score}</p>
      </div>
    </div>
    );
}

export default ScoreCard;