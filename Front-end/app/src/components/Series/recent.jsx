
import styles from "./series.module.css"
export const Recent = ()=>{

    return (
     <div className={styles.currentMain}>
        <div className={styles.right}>

           <h3 className={styles.h3}>INTERNATIONAL TOURS</h3>
           <div className={styles.International}>
             <p>Pakistan v West Indies</p>
             <p>Namibia v Hong Kong</p>
             <p>SL-W in Pakistan</p>
             <p>Bangladesh v Sri Lanka</p>
             <p>HKW-W in UAE</p>
             <p>Pakistan v Australia</p>
             <p>South Africa v Bangladesh</p>
             <p>West Indies v England</p>
             <p>New Zealand v Netherlands</p>
             <p>India v Sri Lanka</p>
             <p>Bangladesh v Afghanistan</p>
             <p>India v West Indies</p>
             <p>Australia v Sri Lanka</p>
             <p>IND-W in New Zealand</p>
           </div>

           <h3 className={styles.h3}>T20 TOURNAMENTS</h3>
           <div className={styles.International}>
              <p>PSL 2021</p>
           </div>
       </div>

       <hr/>
      <div className={styles.left}>

      <h3 className={styles.h3}>ASSOCIATE CRICKET</h3>
      <div className={styles.International}>
         <p>Namibia v Uganda</p>
         <p>Uganda Tri Series</p>
         <p>Spain v Germany</p>
         <p>NOR-W in Sweden</p>
         <p>Continental Cricket Cup</p>
      </div>
      </div>
    </div>
    )
}