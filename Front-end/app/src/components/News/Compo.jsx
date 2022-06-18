import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../News/main.css"
import Individualdata from './Individualdata';

function Compo({id,image,Title,shortdec,time,theme}) {
  const navigate=useNavigate()
  return (
    <>  
         <div className='Container' onClick={()=>navigate(`/${id}`)}>
                    <div  id={theme ?"day" : "night"} className="image">
                        <img className='imgclass' src={image} alt="" />
                    </div>
                    <div className='imageDescription'>
                        <p  id={theme ?"day" : "night"} className='title'>
                            {Title}
                        </p>
                        <p  id={theme ?"day" : "night"} className='shortdesc'>
                        {shortdec}
                        </p>
                        <p  id={theme ?"day" : "night"} className='time'>
                          {time}
                        </p>
                    </div>
                </div>
               


                <hr style={{height:"0.2px",color:"##edeef0"}}/>
    
    </>
  )
}

export default Compo