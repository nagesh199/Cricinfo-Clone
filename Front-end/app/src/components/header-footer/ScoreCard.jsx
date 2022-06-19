import React from "react";
import styles from "./ScoreCard.module.css"

const ScoreCard = ({live}) => {
    console.log(live)
    return (
            <div className={styles.itemContainer}>

                <div className={styles.category}>
                <div><p>{live}</p></div>
                <div><p>{category}</p></div>
                </div>

                <div className={styles.team1}>
                <div className={styles.team1Img}><img src={team1Img} alt="" /><p>{team1}</p><div><h4>{team1Score}</h4></div></div>
                </div>

                <div className={styles.team2}>
                <div className={styles.team2Img}><img src={team2Img} alt="" /><p>{team2}</p><div><h4>{team2Score}</h4></div></div>
                </div>

                <div className={styles.result}><p>{result}</p></div>
            </div>
    )
}

export default ScoreCard;