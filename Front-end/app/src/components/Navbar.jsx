import React from "react";
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
                        <a href="/" className={styles.dropbtn}>Live Scores</a>
                    <div class={styles.dropdowncontent}>
                        <a href="/">Live Scores Home</a>
                        <a href="/">Week view</a>
                        <a href="/">Season view</a>
                        <a href="/">Live Scores Home</a>
                        <a href="/">International calender</a>
                        <a href="/">Desktop Scoreboard</a>
                    </div>
                    </div>

                    <div className={styles.dropdown}>
                        <a href="/" className={styles.dropbtn}>Series</a>
                    <div class={styles.dropdowncontent}>
                        <a href="/">India v South Africa</a>
                        <a href="/">IND-W in Sri Lanka</a>
                        <a href="/">Sri Lanka v Australia</a>
                        <a href="/">Netherlands v England</a>
                        <a href="/">SA-W in Ireland</a>
                        <a href="/">Country Div1</a>
                        <a href="/">Test Championship</a>
                        <a href="/">CWC Super League</a>
                        <a href="/">-Archives-</a>
                    </div>
                    </div>

                    
                    <div className={styles.dropdown}>
                        <a href="/" className={styles.dropbtn}>Teams</a>
                    <div class={styles.dropdowncontent}>
                        <a href="/">Australia</a>
                        <a href="/">Bangladesh</a>
                        <a href="/">England</a>
                        <a href="/">India</a>
                        <a href="/">New Zealand</a>
                        <a href="/">Pakistan</a>
                        <a href="/">South Africa</a>
                        <a href="/">Sri Lanka</a>
                        <a href="/">West Indies</a>
                        <a href="/">Zimbabwe</a>
                    </div>
                    </div>

                    <div className={styles.dropdown}>
                        <a href="/" className={styles.dropbtn}>News</a>
                    <div class={styles.dropdowncontent}>
                        <a href="/">News Home</a>
                        <a href="/">Covid-19</a>
                        <a href="/">Ball-tampering</a>
                        <a href="/">Technology in cricket</a>
                        <a href="/">Racism</a>
                        
                    </div>
                    </div>


                    <div className={styles.dropdown}>
                        <a href="/" className={styles.dropbtn}>Features</a>
                    <div class={styles.dropdowncontent}>
                        <a href="/">Features Home</a>
                        <a href="/">Writers</a>
                        <a href="/">Photo galleries</a>
                        <a href="/">The Cricket Monthly</a>
                    </div>
                    </div>


                    <div className={styles.dropdown}>
                        <a href="/" className={styles.dropbtn}>Videos</a>
                    <div class={styles.dropdowncontent}>
                        <a href="/">Videos Home</a>
                        <a href="/">T20 Time Out Hindi</a>
                        <a href="/">Haan Ya Naa</a>
                        <a href="/">Polite Enquiries</a>
                        <a href="/">Newsroom</a>
                        <a href="/">News and Analysis</a>
                        <a href="/">Features</a>
                        <a href="/">YouTube</a>
                    </div>
                    </div>


                    <div className={styles.dropdown}>
                        <a href="/" className={styles.dropbtn}>Stats</a>
                    <div class={styles.dropdowncontent}>
                        <a href="/">Stats Home</a>
                        <a href="/">IPL 2022</a>
                        <a href="/">SuperStats</a>
                        <a href="/">All records</a>
                        <a href="/">Grounds</a>
                        <a href="/">AskCricinfo</a>
                    </div>
                    </div>

                </div>
                <div className={styles.searchDiv}>
                    <img src="https://wassets.hscicdn.com/static/images/fantasy-home.png" alt="" />
                    <a href="/">Fantasy</a>

                    <div className={styles.dropdown}>
                        <a href="/" className={styles.dropbtn}>EditionIn</a>
                    <div class={styles.dropdowncontent}>
                        <a href="/">Africa</a>
                        <a href="/">Bangladesh</a>
                        <a href="/">India-Hindi</a>
                        <a href="/">Pakistan</a>
                        <a href="/">United Kingdom</a>
                        <a href="/">Global</a>
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
