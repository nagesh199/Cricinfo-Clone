import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from './Main'
import axios from "axios"
import styles from "../News/ind.module.css"
// import "../News/ind.css"

const Individualdata=({theme})=> {
    const [data, setData] = useState({})
    const [arr,setArr]=useState([])
    const {id}=useParams()
    
    const getdata=async()=>{
        const temp=axios.get(`http://localhost:3030/news/${id}`)
        var d=await temp
        setData(d.data)
        setArr(d.data.longdesc)
    }
  useEffect(()=>{
    getdata()
    
  },[])
  
    
  return (
    <>
    
    <div  id={theme ? styles.day : styles.night} className={styles.mainbackground}>
        <div  id={theme ? styles.day : styles.night} className={styles.submain}>
            <div  id={theme ? styles.day : styles.night}>
                <h1  id={theme ? styles.day : styles.night} style={{lineHeight:"24px",marginLeft:"5%",marginTop:"3%",color:"#35baf6",fontFamily:"BentonSans-Bold, Arial, Noto Sans, sans-serif",fontSize:"14px"}}>REPORT</h1>
              <hr />
            </div>
            <div>
                <h1  id={theme ? styles.day : styles.night} className={styles.Title}>{data.Title}</h1>
                <h4  id={theme ? styles.day : styles.night} style={{marginLeft:"5%",color:"#edeef0",fontFamily:"BentonSans, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</h4>
                <h5  id={theme ? styles.day : styles.night} style={{color:"#808183",marginLeft:"5%"}}>{data.time}</h5>
                <img src={data.image} alt="" style={{width:"95%",height:"400px",marginLeft:"25px",borderRadius:"25px"}}/>
            </div>
            <div className={styles.longdesc}>
              {arr.map(elem=><p  id={theme ? styles.day : styles.night}>{elem}</p>)}
            </div>

        </div>
        <div  id={theme ? styles.day : styles.night}> 

            <div  id={styles.trial}>
            <p  id={theme ? styles.day : styles.night} style={{paddingTop:"20px",marginLeft:"5%",fontWeight:"bold",color:"#f6f7f8",fontFamily:"BentonSans-Bold, Arial, Noto Sans, sans-serif"}}>Match Coverage</p>
            <hr />
            <div  id={theme ? styles.day : styles.night} className={styles.sidenews}>
           
            <div  id={theme ? styles.day : styles.night} style={{fontSize:"12px",color:"white",marginLeft:"10px"}}>
              <p  id={theme ? styles.day : styles.night} style={{fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif",lineHeight:"17px",fontWeight:"bold"}}>{data.Title}</p>
              <p  id={theme ? styles.day : styles.night} style={{marginRight:"5%",fontSize:"10px",lineHeight:"16px",textAlign:"start",fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</p>

            </div>
            <div  id={theme ? styles.day : styles.night}>
              <img src={data.image} style={{width:"80%",borderRadius:"20%" }} alt="" />

            </div>
         
          </div>
          <hr />
          <div  id={theme ? styles.day : styles.night} className={styles.sidenews}>
           
           <div  id={theme ? styles.day : styles.night} style={{fontSize:"12px",color:"white",marginLeft:"10px"}}>
             <p  id={theme ? styles.day : styles.night} style={{fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif",lineHeight:"17px",fontWeight:"bold"}}>{data.Title}</p>
             <p  id={theme ? styles.day : styles.night} style={{marginRight:"5%",fontSize:"10px",lineHeight:"16px",textAlign:"start",fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</p>

           </div>
           <div  id={theme ? styles.day : styles.night}>
             <img src={data.image} style={{width:"80%",borderRadius:"20%" }} alt="" />

           </div>
        
         </div>
         <hr />
         <div  id={theme ? styles.day : styles.night} className={styles.sidenews}>
           
           <div  id={theme ? styles.day : styles.night} style={{fontSize:"12px",color:"white",marginLeft:"10px"}}>
             <p  id={theme ? styles.day : styles.night} style={{fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif",lineHeight:"17px",fontWeight:"bold"}}>{data.Title}</p>
             <p  id={theme ? styles.day : styles.night} style={{marginRight:"5%",fontSize:"10px",lineHeight:"16px",textAlign:"start",fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</p>

           </div>
           <div  id={theme ? styles.day : styles.night}>
             <img src={data.image} style={{width:"80%",borderRadius:"20%" }} alt="" />

           </div>
        
         </div>
            </div>

                <div  id={theme ? styles.day : styles.night} style={{borderRadius:"5%",width:"300px",backgroundColor:"#1d1e1f",height:"400px",marginTop:"50%",marginLeft:"30%"}}>

                  <img src="https://s0.2mdn.net/simgad/13402271787841810265" alt="" srcset="" />

                </div>
         </div>

    </div>
    
    </>
  )
}

export default Individualdata