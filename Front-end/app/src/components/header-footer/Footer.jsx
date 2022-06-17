import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerInfo}>
        <div className={styles.infoItems}>
          <p>Key Series</p>
          <a href="/">India v South Africa</a>
          <a href="/">England v New Zealand</a>
          <a href="/">Sri Lanka v Australia</a>
          <a href="/">Pakistan v West Indies</a>
          <a href="/">West Indies v Bangladesh</a>
          <a href="/">Zimbabwe v Afghanistan</a>
          <a href="/">Netherlands v England</a>
          <a href="/">Ireland v India</a>
          <a href="/">Ranji Trophy</a>
          <a href="/">Vitality Blast</a>
          <a href="/">County Div1</a>
          <a href="/">County Div2</a>
          <a href="/">Women's Championship</a>
          <a href="/">World Test Championship</a>
          <a href="/">World Cup Super League</a>
        </div>
        <div className={styles.infoItems}>
          <p>Quick Links</p>
          <a href="/">T20 Time Out</a>
          <a href="/">T20 Time Out Hindi</a>
          <a href="/">ICC Rankings</a>
          <a href="/">Fantasy Pick</a>
          <a href="/">Haan Ya Naa</a>
        </div>
        <div className={styles.infoItems}>
          <p>ESPNcricinfo Apps</p>
          <a href="/">Android App</a>
          <a href="/">iOS App</a>
        </div>
        <div className={styles.infoItems}>
          <p>Follow ESPNcricinfo</p>
          <a target="_blank" href="https://www.instagram.com/_abhinav_roy_/">Instagram</a>
          <a href="/">Twitter</a>
          <a href="/">Facebook</a>
          <a href="/">YouTube</a>
        </div>
        <div className={styles.infoItems}>
          <p>ESPN Sites</p>
          <a href="/">The Cricket Monthly</a>
          <a href="/">ESPN</a>
        </div>
      </div>
      {/* <div className={styles.copyright}>
         
      </div> */}
    </div>
  );
}

export default Footer;