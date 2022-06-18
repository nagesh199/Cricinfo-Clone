import styles from "./series.module.css"
import Carousel from 'carousel-react-rcdev'
export const South = ({theme})=>{


    return (
        <div id={theme ?styles.day : styles.night} style={{marginLeft:"10px"}}>
           
            <div className={styles.back}>
            
            </div>
            <div id={theme ?styles.day : styles.night} className={styles.blackimgbottom}>
                 <h1>Chahal finds success again by going back to his strengths</h1>
                 <p>"In the last game , I was bowling a lot of sliders. My strength is to turn the ball to get it to dip."</p>
            </div>
            <div className={styles.about}>
                  <div >
                      <h6>Scorecard:India win by 48 run</h6>
                      <h6>Report:India stay alive in series</h6>
                  </div>
                  <h6 style={{marginLeft:"-530px", marginTop:"-10px"}}>Hindi coverage</h6>
            </div>
            <div style={{width:"600px"}}>
                <Carousel style={{display:"flex",gap:"20px"}}>
                    <div className={styles.slidediv}>
                        <img  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0614/dm_220614_INET_CRIC_indvsa2022_time_out_chahal_non-branded_GLOBAL/dm_220614_INET_CRIC_indvsa2022_time_out_chahal_non-branded_GLOBAL.jpg" alt="" />
                        <h5>Jaffer:Wristspinners need to be brave and Chahal was</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0614/dm_220614_INET_CRIC_indvsa2022_time_out_gaikwad_non-branded_GLOBAL/dm_220614_INET_CRIC_indvsa2022_time_out_gaikwad_non-branded_GLOBAL.jpg" alt="" />
                        <h5>Steyn: Gaikwad bats just like KL Rahul</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0615/dm_220615_indvssa_interview_nonbranded_ruturajpcv3/dm_220615_indvssa_interview_nonbranded_ruturajpcv3.jpg" alt="" />
                        <h5>Gaikwad:'Going after bowling doesnot mean you have to be reckless'</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0615/dm_220615_indvssa_interview_nonbranded_temba/dm_220615_indvssa_interview_nonbranded_temba.jpg" alt="" />
                        <h5>Bhavuma open to SA batting frist if condition dictate that</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://cdn-wp.thesportsrush.com/2022/05/773342a8-bookmyshow-ind-vs-sa.jpg" alt=""/>
                        <h5>Jaffer:Wristspinners need to be brave and Chahal was</h5>
                   </div>
                   
                </Carousel>
            </div>
            <div className={styles.about}>
                <h5>INDIA VS SOUTH AFRICA</h5>
                <p>2ND T20I, CUTTACK</p>
            </div>
            <div className={styles.second}>
            </div>
            <div id={theme ?styles.day : styles.night} className={styles.imgbottom}>
                 <h1>How Klaasen tamed a triky Cuttack pitch</h1>
                 <p>"He struggled at the start but went on to navigate his path smartly , writes Hemant Brar"</p>
            </div>
            <div className={styles.about}>
                  <div style={{marginBottom:"-40px"}}>
                      <h6>Scorecard:SA won by 48 run</h6>
                      <h6>Report:SA take 2-0 lead</h6>
                  </div>
                  <div style={{marginBottom:"-40px"}}>
                      <h6>Hindi coverage</h6>
                      <h6>Iyer:'Bhuvi gave us the start we needed'</h6>
                  </div>
                  <div>
                      <h6>Klaasen:'Knew we had to target spinners'</h6>
                      <h6>Throwback to pre-Covid items</h6>
                  </div>
                  
            </div>
            <div style={{width:"600px"}}>
                <Carousel style={{display:"flex",gap:"20px"}}>
                    <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0612/dm_220612_INET_CRIC_indvsa2022_time_out_ind_batting_non-branded_GLOBAL/dm_220612_INET_CRIC_indvsa2022_time_out_ind_batting_non-branded_GLOBAL.jpg" alt="" />
                        <h5>Did India bat poorly or did South Africa bowl really well</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0612/dm_220612_INET_CRIC_indvsa2022_time_out_klaasen_non-branded_GLOBAL/dm_220612_INET_CRIC_indvsa2022_time_out_klaasen_non-branded_GLOBAL.jpg" alt="" />
                        <h5>Steyn: It looked like Klaasen batted on a different pitch</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0612/dm_220612_INET_CRIC_indvsa2022_time_out_ind_spin_non-branded_GLOBAL/dm_220612_INET_CRIC_indvsa2022_time_out_ind_spin_non-branded_GLOBAL.jpg" alt="" />
                        <h5>Jeffer:Chahal not transferring IPL impact into internationales</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0615/dm_220615_indvssa_interview_nonbranded_temba/dm_220615_indvssa_interview_nonbranded_temba.jpg" alt="" />
                        <h5>Bhavuma open to SA batting frist if condition dictate that</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0612/dm_220612_indvssa_interview_nonrbranded_iyer2/dm_220612_indvssa_interview_nonrbranded_iyer2.jpg" alt=""/>
                        <h5>Shreyas:"Important to try out our plans even if we fail"</h5>
                   </div>
                   
                </Carousel>
            </div>
            <div className={styles.about}>
                <h5>INDIA VS SOUTH AFRICA</h5>
                <p>1St T20I, DELHI</p>
            </div>
            <div className={styles.frist}>
            </div>
            <div id={theme ?styles.day : styles.night} className={styles.imgbottom}>
                 <h1>Steyn:Miller now hits boundaries whenever he wants to</h1>
                 <p>Wasim Jaffer adds that the SA batter has become "absolutely brilliant" against spin</p>
            </div>
            <div className={styles.dussen}>
                 <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/340600/340662.10.jpg"/>
                 <div>
                      <h3>Rassie van der Dussen: 'When Shreyas dropped me, I knew I had to make India pay'</h3>
                      <p>"We knew even if the asking rate got up to 14-15, we could use that one short boundary with the right-left combination"</p>
                 </div>
            </div>
            <div className={styles.about}>
                  <div style={{display:"flex" , justifyContent:"space-between", width:"600px"}}>
                      <h6>Scorecard:SA won by 7 wickets</h6>
                      <h6>Report:SA ace big chase</h6>
                  </div>
                 
            </div>
            <div style={{width:"600px"}}>
                <Carousel style={{display:"flex",gap:"20px"}}>
                    <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/340600/340659.6.jpg" alt="" />
                        <h5>Stats: South Africa's record chase cuts short India's winning streak</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0610/dm_220610_indvssa_interview_nonbranded_ras2/dm_220610_indvssa_interview_nonbranded_ras2.jpg" alt="" />
                        <h5>van der Dussen: Dwaine is probably one of the hardest hitters</h5>
                   </div>
                 
                   <div className={styles.slidediv}>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0610/dm_220610_indvssa_interview_nonbranded_ras1/dm_220610_indvssa_interview_nonbranded_ras1.jpg" alt="" />
                        <h5>Rassie van der Dussen - 'We knew if we take it to the end, we could win it'</h5>
                   </div>
                   <div className={styles.slidediv}>
                        <img src="https://cdn-wp.thesportsrush.com/2022/05/773342a8-bookmyshow-ind-vs-sa.jpg" alt=""/>
                        <h5>Jaffer:Wristspinners need to be brave and Chahal was</h5>
                   </div>
                   
                </Carousel>
            </div>
        </div>
    )
}