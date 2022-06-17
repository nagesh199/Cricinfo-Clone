
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/header-footer/Footer'
import Header from '../components/header-footer/Header'
import Navbar from '../components/header-footer/Navbar'
import { Home } from '../components/Home/Home'
import Individualdata from '../components/News/Individualdata'
import Main from '../components/News/Main'
import { Current } from '../components/Series/current'
import { Series } from '../components/Series/currentcricket'
import { Future } from '../components/Series/future'
import { Recent } from '../components/Series/recent'
import { Result } from '../components/Series/result'
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
    <Route path="/series/current" element={<Current/>}/>
    <Route path="/series" element={<Series/>}/>
    <Route path="/series/future" element={<Future/>}/>
    <Route path="/series/recent" element={<Recent/>}/>
    <Route path="/series/result" element={<Result/>}/>
    <Route path='/teams' element={<Teams/>}/>
    <Route path='/teams/:team' element={<SingleTeam/>}/>
    <Route path ="/news" element={<Main/>}/>
    <Route path="/news/:id" element={<Individualdata/>}/>
      {/* <Route path="/livescores" element={<LiveScores/>}/> */}
   </Routes>
   <Footer/>
    </div>
  )
}
