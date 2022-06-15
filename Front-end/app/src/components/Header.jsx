import React from "react";
import Data from "../ScoreCard.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Header.module.css";
import ScoreCard from "./ScoreCard";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#F16E49",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#F16E49",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

const Header = () => {
    const caraouselOne = () =>
      Data.sliderData.map((item) => <ScoreCard {...item} key={item.id} />);

    return (
      <>
        <div className={styles.caraousel}>
          <div className={styles.caraouselInfo}>
            <p>SEE THE LATEST</p>
            <p>What's New</p>
          </div>
          <Slider
            dots={false}
            slidesToShow={5}
            slidesToScroll={5}
            autoplay={true}
            autoplaySpeed={3000}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            responsive={[
              {
                breakpoint: 480,
                settings: { slidesToShow: 4, slidesToScroll: 4 },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 4, slidesToScroll: 4 },
              },
              {
                breakpoint: 1024,
                settings: { slidesToShow: 5, slidesToScroll: 5 },
              },
            ]}
          >
            {caraouselOne()}
          </Slider>
        </div>
  
        
      </>
    );
  };
  
  export default Header;