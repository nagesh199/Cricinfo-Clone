import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
    return (
        <div className={styles.NavContainer}>
            <div className={styles.ImgDiv}>
                <img src="https://wassets.hscicdn.com/static/images/logo.png" alt="" />
            </div>
            <div className={styles.secondDiv}>
                <div className={styles.contentDiv}>
                    <div className={styles.dropdown}>
                       <p> <Link to="/livescores" className={styles.dropbtn}>LiveScores</Link></p>
                    <div class={styles.dropdowncontent}>
                    <p> <Link to="/">Live Scores Home</Link></p>
                    <p> <Link to="/">Week view</Link></p>
                    <p> <Link to="/">Season view</Link></p>
                    <p> <Link to="/">Live Scores Home</Link></p>
                    <p> <Link to="/">International calender</Link></p>
                      <p>  <Link to="/">Desktop Scoreboard</Link></p>
                    </div>
                    </div>

                    <div className={styles.dropdown}>
                    <p> <Link to="/" className={styles.dropbtn}>Series</Link></p>
                    <div class={styles.dropdowncontent}>
                    <p> <Link to="/">India v South Africa</Link></p>
                    <p>  <Link to="/">IND-W in Sri Lanka</Link></p>
                    <p>   <Link to="/">Sri Lanka v Australia</Link></p>
                    <p>  <Link to="/">Netherlands v England</Link></p>
                    <p>  <Link to="/">SA-W in Ireland</Link></p>
                    <p>   <Link to="/">Country Div1</Link></p>
                    <p>  <Link to="/">Test Championship</Link></p>
                    <p>  <Link to="/">CWC Super League</Link></p>
                    <p>  <Link to="/">-Archives-</Link></p>
                    </div>
                    </div>

                    
                    <div className={styles.dropdown}>
                    <p><Link to="/" className={styles.dropbtn}>Teams</Link></p>
                    <div class={styles.dropdowncontent}>
                    <p> <Link to="/">Australia</Link></p>
                    <p> <Link to="/">Bangladesh</Link></p>
                    <p> <Link to="/">England</Link></p>
                    <p> <Link to="/">India</Link></p>
                    <p> <Link to="/">New Zealand</Link></p>
                    <p>  <Link to="/">Pakistan</Link></p>
                    <p>  <Link to="/">South Africa</Link></p>
                    <p> <Link to="/">Sri Lanka</Link></p>
                    <p> <Link to="/">West Indies</Link></p>
                    <p> <Link to="/">Zimbabwe</Link></p>
                    </div>
                    </div>

                    <div className={styles.dropdown}>
                    <p> <Link to="/news" className={styles.dropbtn}>News</Link></p>
                    <div class={styles.dropdowncontent}>
                    <p>  <Link to="/">News Home</Link></p>
                    <p>  <Link to="/">Covid-19</Link></p>
                    <p> <Link to="/">Ball-tampering</Link></p>
                    <p> <Link to="/">Technology in cricket</Link></p>
                    <p> <Link to="/">Racism</Link></p>
                        
                    </div>
                    </div>


                    <div className={styles.dropdown}>
                    <p> <Link to="/" className={styles.dropbtn}>Features</Link></p>
                    <div class={styles.dropdowncontent}>
                    <p>   <Link to="/">Features Home</Link></p>
                    <p>  <Link to="/">Writers</Link></p>
                    <p>  <Link to="/">Photo galleries</Link></p>
                    <p>  <Link to="/">The Cricket Monthly</Link></p>
                    </div>
                    </div>


                    <div className={styles.dropdown}>
                    <p> <Link to="/" className={styles.dropbtn}>Videos</Link></p>
                    <div class={styles.dropdowncontent}>
                    <p> <Link to="/">Videos Home</Link></p>
                    <p>  <Link to="/">T20 Time Out Hindi</Link></p>
                    <p>  <Link to="/">Haan Ya Naa</Link></p>
                    <p>  <Link to="/">Polite Enquiries</Link></p>
                    <p>  <Link to="/">Newsroom</Link></p>
                    <p>  <Link to="/">News and Analysis</Link></p>
                    <p>  <Link to="/">Features</Link></p>
                    <p>  <Link to="/">YouTube</Link></p>
                    </div>
                    </div>


                    <div className={styles.dropdown}>
                    <p> <Link to="/" className={styles.dropbtn}>Stats</Link></p>
                    <div class={styles.dropdowncontent}>
                    <p>   <Link to="/">Stats Home</Link></p>
                    <p>  <Link to="/">IPL 2022</Link></p>
                    <p>  <Link to="/">SuperStats</Link></p>
                    <p>  <Link to="/">All records</Link></p>
                    <p>  <Link to="/">Grounds</Link></p>
                    <p>  <Link to="/">AskCricinfo</Link></p>
                    </div>
                    </div>

                </div>
                <div className={styles.searchDiv}>
                    <img src="https://wassets.hscicdn.com/static/images/fantasy-home.png" alt="" />
                    <Link to="/">Fantasy</Link>

                    <div className={styles.dropdown}>
                    <p><Link to="/" className={styles.dropbtn}>EditionIn</Link></p>
                    <div class={styles.dropdowncontent}>
                    <p><Link to="/">Africa</Link></p>
                    <p> <Link to="/">Bangladesh</Link></p>
                    <p> <Link to="/">India-Hindi</Link></p>
                    <p> <Link to="/">Pakistan</Link></p>
                    <p>  <Link to="/">United Kingdom</Link></p>
                    <p>  <Link to="/">Global</Link></p>
                    </div>
                    </div>
                   
                </div>

                <div className={styles.themeicon}>
                        <img src="https://cdn-icons-png.flaticon.com/512/6803/6803223.png" alt="" />
                        <input type="search" placeholder="Search" />
                    </div>
            </div>
        </div>
    )
}

export default Navbar;