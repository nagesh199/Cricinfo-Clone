import { useState } from "react"
import { Current } from "./current"
import { Future } from "./future"
import { Recent } from "./recent"
import styles from "./series.module.css"

export const Series = ()=>{
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
        <div>
            <h1>Current Series</h1>
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
                { future ? <div><Future/></div> : recent ?<div><Recent/></div> : current ? <div><Current/></div>:<div></div>}
                
            </div>
        </div>
    )
}