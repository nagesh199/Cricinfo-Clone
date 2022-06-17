
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/header-footer/Footer'
import Header from '../components/header-footer/Header'
import Navbar from '../components/header-footer/Navbar'
import { Home } from '../components/Home/Home'
import Individualdata from '../components/News/Individualdata'
import Main from '../components/News/Main'
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
       <Header/>
       <Navbar/>
   <Routes>
    <Route path="/" element={<Home theme={theme} />}/>
    <Route path="/series" element={<Series/>}/>
    <Route path ="/news" element={<Main/>}/>
    <Route path="/news/:id" element={<Individualdata/>}/>
      {/* <Route path="/livescores" element={<LiveScores/>}/> */}
   </Routes>
   <Footer theme={theme} />
    </div>
  )
}
