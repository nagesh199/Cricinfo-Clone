import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ theme }) => {
  return (
    <div id={theme ? styles.day : styles.night} className={styles.container}>
      <div className={styles.footerInfo}>
        <div className={styles.infoItems}>
          <p>Key Series</p>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            India v South Africa
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            England v New Zealand
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Sri Lanka v Australia
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Pakistan v West Indies
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            West Indies v Bangladesh
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Zimbabwe v Afghanistan
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Netherlands v England
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Ireland v India
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Ranji Trophy
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Vitality Blast
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            County Div1
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            County Div2
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Women's Championship
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            World Test Championship
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            World Cup Super League
          </a>
        </div>
        <div className={styles.infoItems}>
          <p>Quick Links</p>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            T20 Time Out
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            T20 Time Out Hindi
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            ICC Rankings
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Fantasy Pick
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Haan Ya Naa
          </a>
        </div>
        <div className={styles.infoItems}>
          <p>ESPNcricinfo Apps</p>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Android App
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            iOS App
          </a>
        </div>
        <div className={styles.infoItems}>
          <p>Follow ESPNcricinfo</p>
          <a
            id={theme ? styles.day1 : styles.night1}
            target="_blank"
            href="https://www.instagram.com/_abhinav_roy_/"
          >
            Instagram
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Twitter
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            Facebook
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            YouTube
          </a>
        </div>
        <div className={styles.infoItems}>
          <p>ESPN Sites</p>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            The Cricket Monthly
          </a>
          <a id={theme ? styles.day1 : styles.night1} href="/">
            ESPN
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <div>
          Terms of Use | Privacy Policy | Interest-Based Ads | Addendum to the
          Global Privacy Policy | Feedback
        </div>
        <div>© 2022 ESPN Sports Media Ltd. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
