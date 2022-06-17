
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/header-footer/Footer'
import Navbar from '../components/header-footer/Navbar'
import { Home } from '../components/Home/Home'
import { Series } from '../components/Series/currentcricket'
import { India } from '../components/Series/india'
import { SingleTeam } from '../Pages/Teams/SingleTeam'
import { Teams } from '../Pages/Teams/teams'
export const Mainroutes = () => {
  const [theme,settheme] = useState(true)
  const handleTheme = () =>{
    settheme(!theme)
    console.log(theme)
  }

  return (
    <div>
       <button onClick ={handleTheme}>theme</button>
       <Navbar/>
   <Routes>
    <Route path="/" element={<Home theme={theme} />}/>
    <Route path="/series" element={<Series/>}/>
    <Route path='/teams' element={<Teams/>}></Route>
    <Route path ="/series/india" element={<India/>}></Route>
    <Route path='/teams/:team' element={<SingleTeam/>}></Route>
   </Routes>
   <Footer/>
    </div>
  )
}
