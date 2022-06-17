import styles from "./series.module.css"
export const Result = ()=>{
    return (
        <div>
             <div className={styles.fixture}>
                
                <p>RESULT</p>
                <p>3th T201(N), Visakhapatnam, june 14,2022, South Africa</p>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}} src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt=""/>
                    <p>INDIA</p>
                    <p>179/5</p>
                </div>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}}  src="https://media.istockphoto.com/vectors/south-african-national-flag-official-flag-of-south-africa-accurate-vector-id936590950?k=20&m=936590950&s=612x612&w=0&h=sHQSrucjiXFnllQ0_Ena0Mv3EE2arpUBLXVEiV2w4BY=" alt=""/>
                    <p>SA</p>
                    <p>131</p>
                </div>
                   <p style={{fontSize:"13px"}}>India won by 48 run</p>     
                
               </div>
            
               <div className={styles.fixture}>
                
                <p>RESULT</p>
                <p>2ND T201(N), Cuttack, june 12,2022, South Africa</p>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}} src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt=""/>
                    <p>INDIA</p>
                    <p>148/6</p>
                </div>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}}  src="https://media.istockphoto.com/vectors/south-african-national-flag-official-flag-of-south-africa-accurate-vector-id936590950?k=20&m=936590950&s=612x612&w=0&h=sHQSrucjiXFnllQ0_Ena0Mv3EE2arpUBLXVEiV2w4BY=" alt=""/>
                    <p>SA</p>
                    <p>149</p>
                </div>
                   <p style={{fontSize:"13px"}}>South Africa won by 4 wickets</p>     
               </div>
               <div className={styles.fixture}>
                
                <p>RESULT</p>
                <p>1st T201(N), Delhi, june 09,2022, South Africa</p>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}} src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt=""/>
                    <p>INDIA</p>
                    <p>211</p>
                </div>
                <div className={styles.fixture_1}>
                    <img style={{width:"20px", height:"20px"}}  src="https://media.istockphoto.com/vectors/south-african-national-flag-official-flag-of-south-africa-accurate-vector-id936590950?k=20&m=936590950&s=612x612&w=0&h=sHQSrucjiXFnllQ0_Ena0Mv3EE2arpUBLXVEiV2w4BY=" alt=""/>
                    <p>SA</p>
                    <p>213</p>
                </div>
                   <p style={{fontSize:"13px"}}>South Africa won by 7 wickets</p>     
                
                
               </div>
        </div>
    )
}