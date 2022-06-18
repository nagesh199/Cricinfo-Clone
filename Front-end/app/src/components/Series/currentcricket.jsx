import { useState } from "react"
import { Current } from "./current"
import { Future } from "./future"
import { Recent } from "./recent"
import styles from "./series.module.css"

export const Series = ({theme})=>{
   const [future, setFuture] = useState(false)
   const [recent,setRecent] = useState(false);
   const [current,setCurrent] = useState(true);
    const handleFuture = ()=>{
         setFuture(true);
         setRecent(false)
         setCurrent(false)
    }
    const handleRecent = ()=>{
        setFuture(false)
        setRecent(true)
        setCurrent(false)
    }
    const handleCurrent = ()=>{
        setFuture(false);
        setCurrent(true);
        setRecent(false)
     }
    return (
        <div  id={theme ?styles.day : styles.night}>
            <div className={styles.head}>
                <h4 className={styles.headh4}
                onClick={handleCurrent}>Current Cricket</h4>
                <hr/>
                <h4 className={styles.headh4} 
                onClick={handleFuture}>Future Series and Tournaments</h4> 
                 <hr/>
                 <h4 className={styles.headh4}
                 onClick={handleRecent}>Recently Concluded</h4>
            </div>
            <div>
                { future ? <div><Future theme={theme}/></div> : recent ?<div><Recent theme={theme}/></div> : current ? <div><Current theme={theme}/></div>:<div></div>}
                
            </div>
        </div>
    )
}