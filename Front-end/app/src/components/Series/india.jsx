
import { useState } from "react"
import { Result } from "./result"
import styles from "./series.module.css"
import { South } from "./south"
export const India = ()=>{
   const [reslt,setReslt] = useState(true);
   const [fix,setFix] = useState(false)
   const handleResulte = ()=>{
       setReslt(false);
       setFix(true)
   }
   const handleFixture = ()=>{
    setReslt(true);
    setFix(false)
   }
    return (
        <div className={styles.MainIndia}>
            <div className={styles.rightbox}>
                <div className={styles.rightdiv}>
                    <div onClick={handleFixture} className={styles.btn}>Fixtures</div>
                    <div onClick={handleResulte} className={styles.btn}>Results</div>
                </div>
                { reslt ?
              <div>
              <div className={styles.fixture}>
                
                <p>TOMORROW, 7:00 PM</p>
                <p>4th T201(N), Rajkot, june 17,2022, South Africa</p>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}} src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt=""/>
                    <p>INDIA</p>
                </div>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}}  src="https://media.istockphoto.com/vectors/south-african-national-flag-official-flag-of-south-africa-accurate-vector-id936590950?k=20&m=936590950&s=612x612&w=0&h=sHQSrucjiXFnllQ0_Ena0Mv3EE2arpUBLXVEiV2w4BY=" alt=""/>
                    <p>SA</p>
                </div>
                   <p style={{fontSize:"13px"}}>Match yet to begin</p>     
                
               </div>
               
               <div className={styles.fixture}>
                
                <p>SUN, 19 JUN, 7:00 PM</p>
                <p>5th T201(N), Bengluru, june 19,2022, South Africa</p>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}} src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt=""/>
                    <p>INDIA</p>
                </div>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}}  src="https://media.istockphoto.com/vectors/south-african-national-flag-official-flag-of-south-africa-accurate-vector-id936590950?k=20&m=936590950&s=612x612&w=0&h=sHQSrucjiXFnllQ0_Ena0Mv3EE2arpUBLXVEiV2w4BY=" alt=""/>
                    <p>SA</p>
                </div>
                   <p style={{fontSize:"13px"}}>Match yet to begin</p>     
                
               </div>
              </div>
              :
              <div>
                <Result/>
              </div>
             } 
            </div>
            <div className={styles.leftbox}>
                 <South/>
            </div>
        </div>
    )
}