import React from 'react'
import data from "./db.json"
import { FaSearch } from 'react-icons/fa';
import { RiArrowRightSLine } from "react-icons/ri";
import style from "styled-components"

 const Maindiv = style.div`
 width:100%;
  display:flex;
  justify-content:space-around;
 `
const Searchdiv = style.div`
display:flex;
justify-content:space-around;
border: 1px solid rgb(3,169,244);
border-radius:100px;
color:rgb(3,169,244);
font-family:BentonSans,Arial,Noto Sans,sans-serif

`
var i = 0;
export const Home = () => {
 console.log(data)
 
  return (
    <Maindiv>
      {/* left part of home page */}
       <div>
          side part
          <div className= "Insidemaindiv" style={{width:"40%"}}>
            <img width="150"src="https://wassets.hscicdn.com/static/images/nlp-logo.svg" alt="ask a question" />
             <p>Which spinner has taken the most wickets in an IPL season?</p>
             <br/>
             <div  className= "searchhover"> 
             <Searchdiv>
            <p> <FaSearch/> </p>
              <h3>Ask a question</h3>
              </Searchdiv>
              </div>
          </div>
           <br/>
           <div  className="Insidemaindiv" style={{width:"55%"}}>
            <p>Key Series</p>
           
            {data.against.map((item) =>(
              <div  key ={ i++}> <p> <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/> {item.vs}</p></div>
         
            ))}
            
           
           </div>
           <br/>
           <div  className="Insidemaindiv" style={{width:"55%"}}>
           <p>Quick Links</p>
            {data.links.map((item) =>(
              <div  key ={ i++}> <p> <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/> {item.quick}</p></div>
         
            ))}
           </div>
           <br/>
           <div className="Insidemaindiv" style={{width:"55%"}}>
            <p>ESPNcricinfo Apps</p>
            <p > <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/>App</p>
            <p> <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/>iOS App</p>
           </div>
           <br/>
           <div className="Insidemaindiv" style={{width:"55%"}}>
            <p>Follow ESPNcricinfo</p>
            <p > <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/>Instagram</p>
            <p> <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/>Twitter</p>
            <p> <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/>Facebook</p>
            <p> <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/>YouTube</p>
           </div>
           <br/>
           <div className="Insidemaindiv" style={{width:"55%"}}>
            <p>ESPN Sites</p>
            <p > <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/>The Cricket Monthly</p>
            <p> <RiArrowRightSLine style={{color:" rgb(3,169,244)"}}/>ESPN</p>
           </div>
       </div>
        {/* middle part of the home page */}
       
       <div>
       center part
       </div>
        {/* right part of the home page */}
        <div>
          <div></div>
          <div>
            {data.rightside.map((item)=>(
            <div>
                 <img src={item.image} alt="img" />
              <h3>{item.para}</h3>
            </div>
            ))}
          </div>
        </div>
       <div>
       right part
       </div>
    </Maindiv>
  )
}
