import React from "react";
import Data from "../ScoreCard.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
//import styles from "./Header.module.css";
import ScoreCard from "./ScoreCard";



const Header = () => {
    return (
      <>
       { Data.sliderData.map((item) => <ScoreCard {...item} key={item.id} />)};
      </>
    );
  };
  
  export default Header;