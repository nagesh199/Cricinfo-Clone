
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Current } from '../components/Series/current'
import { Series } from '../components/Series/currentcricket'
import { Future } from '../components/Series/future'
import { Recent } from '../components/Series/recent'
import { Result } from '../components/Series/result'
export const Mainroutes = () => {
  const [theme,settheme] = useState(true)
  
  const handleTheme = () =>{
    settheme(!theme)
    console.log(theme)
  }

  return (
    <div>
       <button onClick ={handleTheme}>theme</button>
   <Routes>
    <Route path="/" element={<Home theme={theme} />}/>
    <Route path="/series/current" element={<Current/>}/>
    <Route path="/series" element={<Series/>}/>
    <Route path="/series/future" element={<Future/>}/>
    <Route path="/series/recent" element={<Recent/>}/>
    <Route path="/series/result" element={<Result/>}/>
   </Routes>
    </div>
  )
}
