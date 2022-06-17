import { useNavigate } from "react-router-dom"
import styles from "./series.module.css"

export const Current = ()=>{
    const navigate = useNavigate()
 
    return (
        <div className={styles.currentMain}>
            <div className={styles.right}>

                 <h3 className={styles.h3}>INTERNATIONAL TOURS</h3>
                 <div className={styles.International}>
                     <p onClick={()=>navigate("/series/india")}>India v South Africa</p>
                     <p>England v New Zealand</p>
                     <p>Sri Lanka v Australia</p>
                     <p>Netherlands v West Indies</p>
                     <p>SA-W in Ireland</p>
                     <p>AUS-A in Sri Lanka</p>
                     <p>Zimbabwe v Afghanistan</p>
                     <p>Netherlands v England</p>
                     <p>West Indies v Bangladesh</p>
                     <p>Ireland v India</p>
                 </div>

                 <h3 className={styles.h3}>INTERNATIONAL TOURNAMENTS</h3>
                 <div className={styles.International}>
                      <p>CWC Challenge Group B</p>
                 </div>
            </div>
            <hr/>
            <div className={styles.left}>

                <h3 className={styles.h3}>ICC TOURNAMENTS</h3>
                  <div className={styles.International}>
                      <p>ICC Women's Championship</p>
                      <p>Men's Cricket World Cup League 2</p>
                      <p>CWC Challenge League Group A</p>
                      <p>CWC Challenge League Group B</p>
                      <p>ICC CWC Super League</p>
                      <p>ICC World Test Championship</p>
                  </div>

                  <h3 className={styles.h3}>T20/T10 TOURNAMENTS</h3>
                   <div className={styles.International}>
                      <p>Vitality Blast</p>
                   </div>

                  <h3 className={styles.h3}>ASSOCIATE CRICKET</h3>
                  <div className={styles.International}>
                      <p>Austria v Hungary</p>
                      <p>Sofia T20</p>
                      <p>Finland v Estonia</p>
                      <p>Bulgaria v Serbia</p>
                  </div>

                  <h3 className={styles.h3}>AFGHANISTAN DOMESTIC</h3>
                   <div className={styles.International}>
                      <p>3-day Provincial</p>
                   </div>

                   <h3 className={styles.h3}>ENGLAND DOMESTIC</h3>
                  <div className={styles.International}>
                      <p>County Div1</p>
                      <p>County Div2</p>
                      <p>100 (Men's)</p>
                      <p>100 (Women's)</p>
                      <p>RL Cup</p>
                      <p>Vitality Blast</p>
                      <p>RHF Cup</p>
                  </div>

                  <h3 className={styles.h3}>INDIA DOMESTIC</h3>
                  <div className={styles.International}>
                      <p>IPL</p>
                      <p>Ranji Trophy</p>
                      <p>Vijay Hazare Trophy</p>
                      <p>SMA Trophy</p>
                  </div>

                  <h3 className={styles.h3}>IRELAND DOMESTIC</h3>
                   <div className={styles.International}>
                      <p>INTER PRO T20</p>
                      <p>INTER PRO 1-Day</p>
                   </div>

                   <h3 className={styles.h3}>SRI LANKA DOMESTIC</h3>
                   <div className={styles.International}>
                      <p>Major Clubs T20</p>
                   </div>

                   <h3 className={styles.h3}>WEST INDIES DOMESTIC</h3>
                   <div className={styles.International}>
                      <p>WICB 4-day</p>
                   </div>
            </div>
            
        </div>
    )
}