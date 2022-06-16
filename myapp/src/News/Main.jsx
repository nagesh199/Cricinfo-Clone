import React from 'react'
import "../News/main.css"
import Compo from './Compo'
import axios from "axios"
import { useEffect,useState } from 'react';
function Main() {

    var [data, setdata] = useState([])
    const getdata=()=>{
        axios.get("http://localhost:3030").then(res=>setdata(res.data))
    }
    useEffect(() => {
      getdata()
    }, [])
  return (

    <>
        <div id='mainpage'>
            <div className='newsapp'>
                <div><h1 style={{color:"white",marginLeft:"20px"}}>Latest News</h1></div>
                <hr />
                {data.map(elem=> <Compo {...elem}/>)}
            </div>
            <div>
                

            </div>

        </div>
    
    </>
  )
}

export default Main