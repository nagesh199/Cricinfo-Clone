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
                    <a href="/">Live Scores</a><a href="/">Series</a><a href="/">Teams</a><a href="/">News</a><a href="/">Features</a><a href="/">Videos</a><a href="/">Stats</a>
                </div>
                <div className={styles.searchDiv}>
                    <img src="https://wassets.hscicdn.com/static/images/fantasy-home.png" alt="" />
                    <a href="/">Fantasy</a>
                    <a href="/">Edition In</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
