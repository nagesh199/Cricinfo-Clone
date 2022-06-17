
import data from "./db.json";
import { FaSearch } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import style from "styled-components";
import HomeNews from "../../DATABASE/Teams/homepage.json";
import { HomeBox } from "../../components/Teams/HomeBox";
import styles from "../../CSS/Teams/homepage.module.css";
import { Matches } from "../Teams/matches";
const Maindiv = style.div`
 width:100%;
  display:flex;
  justify-content:space-around;
 `;
export const Home = ({ theme }) => {
  const dataarr=data.leftData;
  const Dataarr =data.rightData;
  const newsarr = HomeNews.HomeNews;
  
  return (
    <Maindiv className={theme ? "daytheme" : "nighttheme"}>
    <div className={styles.home}>
        {/* left part of home page */}
        <div className={styles.leftDiv}>
         
          <div className={theme ? "Insidemaindivday" : "Insidemaindivnight"}>
            <img
              width="150"
              src="https://wassets.hscicdn.com/static/images/nlp-logo.svg"
              alt="ask a question"
            />
            <p>Which spinner has taken the most wickets in an IPL season?</p>
            <br />
            <div className={styles.search}>
                <p>
                  <FaSearch />
                </p>
                <p>Ask a question</p>
            </div>
          </div>
          <div
            className={theme ? "Insidemaindivday" : "Insidemaindivnight"}>
            {
              dataarr.map((el,i)=>{
                return <div key={i} className={styles.subBox}>
                  <div>
                  <p>{el.title}</p>
                  </div>
                  
                  <Matches {...el}/>
                </div>
              })
            }
          </div>
        </div>
        {/* middle part of the home page */}
        <div className={styles.middleDiv}>
          {newsarr.map((el, i) => {
            return (
              <div key={i}>
                <HomeBox {...el} />
              </div>
            );
          })}
        </div>
        {/* right part of the home page */}
        {/* <div className={styles.rightDiv} >
          <div className={theme ? "Insidemaindivday" : "Insidemaindivnight"}>
            {data.newsheadline.map((item) => (
              <div id="hoverdivhere" key={i++}>
                <p>
                  {" "}
                  <RiArrowRightSLine
                    style={{ color: " rgb(3,169,244)" }}
                  />{" "}
                  {item.headline}
                </p>
              </div>
            ))}
          </div>
          <br />
          <div>
            {data.rightside.map((item) => (
              <div
                className={theme ? "Insidemaindivday" : "Insidemaindivnight"}
                key={i++}
              >
                <img
                  style={{ borderRadius: "15px" }}
                  src={item.image}
                  alt="img"
                />
                <h4>{item.para}</h4>
              </div>
            ))}
          </div>
        </div> */}
        </div>
      </Maindiv>

  );
};
