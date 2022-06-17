import Data from "../ScoreCard.json";
import React from "react";
import styles from "./Header.module.css";
import ScoreCard from "./ScoreCard";



 const Header = () => {
    return (
      <>
        <div className={styles.main}>

         
        { Data.sliderData.map((item) => <ScoreCard {...item} key={item.id} />)}

       
        
        </ div>
      </>
    );
  };

export default Header;