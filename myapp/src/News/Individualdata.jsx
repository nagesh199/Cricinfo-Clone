import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from './Main'
import axios from "axios"
import "../News/ind.css"

const Individualdata=()=> {
    const [data, setData] = useState({})
    const {id}=useParams()
    
    const getdata=async()=>{
        const temp=axios.get(`http://localhost:3030/${id}`)
        var d=await temp
        setData(d.data)
    }
  useEffect(()=>{
    getdata()
    console.log(data);
  },[])
    
  return (
    <>
    <div id='mainbackground'>
        <div id='submain'>
            <div>
                <h1 style={{lineHeight:"24px",marginLeft:"5%",marginTop:"3%",color:"#35baf6",fontFamily:"BentonSans-Bold, Arial, Noto Sans, sans-serif",fontSize:"14px"}}>REPORT</h1>

            </div>
            <div>
                <h1 className='Title'>{data.Title}</h1>
                <h4 style={{marginLeft:"5%",color:"#edeef0",fontFamily:"BentonSans, Arial, Noto Sans, sans-serif"}}>{data.shortdec}</h4>
                <h5 style={{color:"#808183",marginLeft:"5%"}}>{data.time}</h5>
                <img src={data.image} alt="" style={{width:"95%",height:"400px",marginLeft:"25px",borderRadius:"25px"}}/>
            </div>

        </div>
        <div> 

         </div>
    </div>
    
    </>
  )
}

export default Individualdata