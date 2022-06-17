import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from './Main'
// import axios from "axios"
import styles from "../News/ind.module.css"
// import "../News/ind.css"

const Individualdata=()=> {
    const [data, setData] = useState({})
    const [arr,setArr]=useState([])
    const {id}=useParams()
    
    const getdata=async()=>{
        // const temp=axios.get(`http://localhost:3030/${id}`)
        // var d=await temp
        // setData(d.data)
        // setArr(d.data.longdesc)
    }
  // useEffect(()=>{
  //   getdata()
    
  // },[])
  
    
  return (
    <>
    <div id={styles.mainbackground}>
        <div id={styles.submain}>
            <div>
                <h1 style={{lineHeight:"24px",marginLeft:"5%",marginTop:"3%",color:"#35baf6",fontFamily:"BentonSans-Bold, Arial, Noto Sans, sans-serif",fontSize:"14px"}}>REPORT</h1>
              <hr />
            </div>
            <div>
                <h1 className={styles.Title}>{data.Title}</h1>
                <h4 style={{marginLeft:"5%",color:"#edeef0",fontFamily:"BentonSans, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</h4>
                <h5 style={{color:"#808183",marginLeft:"5%"}}>{data.time}</h5>
                <img src={data.image} alt="" style={{width:"95%",height:"400px",marginLeft:"25px",borderRadius:"25px"}}/>
            </div>
            <div className={styles.longdesc}>
              {arr.map(elem=><p>{elem}</p>)}
            </div>

        </div>
        <div> 

            <div id={styles.trial}>
            <p style={{paddingTop:"20px",marginLeft:"5%",fontWeight:"bold",color:"#f6f7f8",fontFamily:"BentonSans-Bold, Arial, Noto Sans, sans-serif"}}>Match Coverage</p>
            <hr />
            <div className={styles.sidenews}>
           
            <div style={{fontSize:"12px",color:"white",marginLeft:"10px"}}>
              <p style={{fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif",lineHeight:"17px",fontWeight:"bold"}}>{data.Title}</p>
              <p style={{marginRight:"5%",fontSize:"10px",lineHeight:"16px",textAlign:"start",fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</p>

            </div>
            <div>
              <img src={data.image} style={{width:"80%",borderRadius:"20%" }} alt="" />

            </div>
         
          </div>
          <hr />
          <div className={styles.sidenews}>
           
           <div style={{fontSize:"12px",color:"white",marginLeft:"10px"}}>
             <p style={{fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif",lineHeight:"17px",fontWeight:"bold"}}>{data.Title}</p>
             <p style={{marginRight:"5%",fontSize:"10px",lineHeight:"16px",textAlign:"start",fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</p>

           </div>
           <div>
             <img src={data.image} style={{width:"80%",borderRadius:"20%" }} alt="" />

           </div>
        
         </div>
         <hr />
         <div className={styles.sidenews}>
           
           <div style={{fontSize:"12px",color:"white",marginLeft:"10px"}}>
             <p style={{fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif",lineHeight:"17px",fontWeight:"bold"}}>{data.Title}</p>
             <p style={{marginRight:"5%",fontSize:"10px",lineHeight:"16px",textAlign:"start",fontFamily:"BentonSans-Medium, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</p>

           </div>
           <div>
             <img src={data.image} style={{width:"80%",borderRadius:"20%" }} alt="" />

           </div>
        
         </div>
            </div>

                <div style={{borderRadius:"5%",width:"300px",backgroundColor:"#1d1e1f",height:"400px",marginTop:"50%",marginLeft:"30%"}}>

                </div>
         </div>

    </div>
    
    </>
  )
}

export default Individualdata