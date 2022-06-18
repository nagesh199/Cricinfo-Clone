import React from 'react'

import Compo from './Compo'
import axios from "axios"
import { useEffect,useState } from 'react';
// import styles from "../News/main.module.css"
import "../News/main.css"
function Main({theme}) {

    var [data, setdata] = useState([])
    const getdata=()=>{
        axios.get("http://localhost:3030/news").then(res=>setdata(res.data))
    }
    useEffect(() => {
      getdata()
    }, [])
  return (

    <>
        <div id={theme ?"mainpageday" :"mainpagenight"}>
            <div  id={theme ?"day" : "night"} className="newsapp">
                <div><h1 style={{color:"white",marginLeft:"20px"}}>Latest News</h1></div>
                <hr />
                {data.map(elem=> <Compo {...elem} theme={theme}/>)}
            </div>
            <div>
                {/* ---------------------------------------------------- */}
               
               <img src="https://tpc.googlesyndication.com/simgad/10921045685882734973" style={{marginTop:"50px"}} alt="" srcset="" />
               
              
             

             <div style={{marginTop:"200px"}}>
              <img src="https://tpc.googlesyndication.com/simgad/7638344253131718272" alt="" />
             </div>

            </div>

        </div>
    
    </>
  )
}

export default Main