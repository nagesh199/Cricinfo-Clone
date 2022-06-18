
import data from "./db.json";
import { FaSearch } from "react-icons/fa";
import style from "styled-components";
import { HomeBox } from "../../components/Teams/HomeBox";
import styles from "../../CSS/Teams/homepage.module.css";
import { Matches } from "../Teams/matches";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Maindiv = style.div`
  width:100%;
  display:flex;
  justify-content:space-around;
 `;
export const Home = ({ theme }) => {
  const dataarr=data.leftData;
  const Dataarr =data.rightData;
  
  const [homeNews,setNews]=useState([])
  useEffect(() => { 
    getData();
  },[])

  const getData= async()=>{
    const home= await axios.get("http://localhost:3030/homepage")
   console.log(home.data)
   setNews(home.data.HomeNews)
  }

  return (
    <Maindiv className={theme ? "daytheme" : "nighttheme"}>
      <div className={styles.content}>
      <div>
        <img src="https://tpc.googlesyndication.com/simgad/7204186807382043569?" alt="" />
      </div>
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
          {homeNews.map((el, i) => {
            return (
              <div  key={i}>
                <HomeBox theme={theme} {...el} />
              </div>
            );
          })}
        </div>
        <div className={styles.rightDiv}>
        <div className={theme ? "Insidemaindivday" : "Insidemaindivnight"}>
          {
            Dataarr.map((el,i)=>{
              if(i===0){
                return <div key={i} className={styles.subBox}>
                  <div>
                  <p>{el.title}</p>
                  </div>
                  <Matches {...el}/>
                </div>
              }
              else{
                return <div key={i}>
                     {
                      el.imageArr.map((el,i)=>{
                        return <div className={styles.img} key={i}>
                          <img src={el.image} alt="" />
                          <p>{el.para}</p>
                        </div>
                      })
                     }
                </div>
              }
            })
          }
          </div>
        </div>
        </div>
        </div>
      </Maindiv>
  );
};
