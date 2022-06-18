import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Navbar = ({but}) => {

   const navigate=useNavigate()

    const handlenavigate = () =>{
        navigate("/")
    }

    const MaterialUISwitch = styled(Switch)(({ theme  }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
          width: 32,
          height: 32,
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
     
      } ));



    return (
        <div className={styles.NavContainer}>
            <div  className={styles.ImgDiv}>
                <img onClick={handlenavigate} src="https://wassets.hscicdn.com/static/images/logo.png" alt="" />
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
                    <p> <Link to="/series" className={styles.dropbtn}>Series</Link></p>
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
                    <p><Link to="/teams" className={styles.dropbtn}>Teams</Link></p>
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
                    
 
  
    <MaterialUISwitch  sx={{ m: 1 }}  onChange={but} ></MaterialUISwitch>
       
      
            
                        {/* <img  src="https://cdn-icons-png.flaticon.com/512/6803/6803223.png" alt="" /> */}
                        <input type="search" placeholder="Search" />
                    </div>
            </div>
        </div>
    )
}

export default Navbar;