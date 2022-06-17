
import data from "./db.json";
import { FaSearch } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import style from "styled-components";
import HomeNews from "../../DATABASE/Teams/homepage.json";
import { HomeBox } from "../../components/Teams/HomeBox";
import styles from "../../CSS/Teams/homepage.module.css";
const Maindiv = style.div`
 width:100%;
  display:flex;
  justify-content:space-around;
 `;
const Searchdiv = style.div`
display:flex;
justify-content:space-around;
border: 1px solid rgb(3,169,244);
border-radius:100px;
color:rgb(3,169,244);
font-family:BentonSans,Arial,Noto Sans,sans-serif

`;
var i = 0;
export const Home = ({ theme }) => {
  const newsarr = HomeNews.HomeNews;
  // console.log(data)

  // theme change function
  // const [theme,settheme] = useState(true)

  // const handleTheme = () =>{
  //   settheme(!theme)
  //   console.log(theme)
  // }

  return (
    <Maindiv className={theme ? "daytheme" : "nighttheme"}>
    <div className={styles.home}>
    
        {/* left part of home page */}
        <div className={styles.leftDiv}>
          {/* <button onClick ={handleTheme}>theme</button> */}

          <div
            className={theme ? "Insidemaindivday" : "Insidemaindivnight"}
            style={{ width: "40%" }}
          >
            <img
              width="150"
              src="https://wassets.hscicdn.com/static/images/nlp-logo.svg"
              alt="ask a question"
            />
            <p>Which spinner has taken the most wickets in an IPL season?</p>
            <br />
            <div className="searchhover">
              <Searchdiv>
                <p>
                  {" "}
                  <FaSearch />{" "}
                </p>
                <h3>Ask a question</h3>
              </Searchdiv>
            </div>
          </div>
          <br />
          <div
            className={theme ? "Insidemaindivday" : "Insidemaindivnight"}
            style={{ width: "55%" }}
          >
            <p>Key Series</p>

            {data.against.map((item) => (
              <div id="hoverdivhere" key={i++}>
                {" "}
                <p>
                  {" "}
                  <RiArrowRightSLine
                    style={{ color: " rgb(3,169,244)" }}
                  />{" "}
                  {item.vs}
                </p>
              </div>
            ))}
          </div>
          <br />
          <div
            className={theme ? "Insidemaindivday" : "Insidemaindivnight"}
            style={{ width: "55%" }}
          >
            <p>Quick Links</p>
            {data.links.map((item) => (
              <div id="hoverdivhere" key={i++}>
                {" "}
                <p>
                  {" "}
                  <RiArrowRightSLine
                    style={{ color: " rgb(3,169,244)" }}
                  />{" "}
                  {item.quick}
                </p>
              </div>
            ))}
          </div>
          <br />
          <div
            id="hoverdivhere"
            className={theme ? "Insidemaindivday" : "Insidemaindivnight"}
            style={{ width: "55%" }}
          >
            <p>ESPNcricinfo Apps</p>
            <p>
              {" "}
              <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} /> App
            </p>
            <p>
              {" "}
              <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} /> iOS App
            </p>
          </div>
          <br />
          <div
            id="hoverdivhere"
            className={theme ? "Insidemaindivday" : "Insidemaindivnight"}
            style={{ width: "55%" }}
          >
            <p>Follow ESPNcricinfo</p>
            <p>
              {" "}
              <a target="blank" rel="noreferrer" href="https://www.instagram.com/_abhinav_roy_/">
                {" "}
                <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} />{" "}
                Instagram{" "}
              </a>
            </p>
            <p>
              {" "}
              <a target="_blank" rel="noreferrer" href="https://twitter.com/espncricinfo">
                {" "}
                <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} />{" "}
                Twitter
              </a>
            </p>
            <p>
              {" "}
              <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} />{" "}
              Facebook
            </p>
            <p>
              {" "}
              <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} /> YouTube
            </p>
          </div>
          <br />
          <div
            id="hoverdivhere"
            className={theme ? "Insidemaindivday" : "Insidemaindivnight"}
            style={{ width: "55%" }}
          >
            <p>ESPN Sites</p>
            <p>
              {" "}
              <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} /> The
              Cricket Monthly
            </p>
            <p>
              {" "}
              <RiArrowRightSLine style={{ color: " rgb(3,169,244)" }} /> ESPN
            </p>
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
        <div className={styles.rightDiv} >
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
        </div>
        </div>
      </Maindiv>

  );
};
