import Data from "./ScoreCard.json";
import React from "react";
import styles from "./Header.module.css";
import ScoreCard from "./ScoreCard";



 const Header = () => {
    console.log(Data.sliderData)
    return (
      <>
        <div className={styles.main}>

         
        { Data.sliderData.map((item) => {  <ScoreCard key={item.id} {...item} />})}

       
        
        </ div>
      </>
    );
  };

export default Header;