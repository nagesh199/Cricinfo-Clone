
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Current } from '../components/Series/current'
import { Series } from '../components/Series/currentcricket'
import { Future } from '../components/Series/future'
import { Recent } from '../components/Series/recent'
export const Mainroutes = () => {


  return (
    <div>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/series/current" element={<Current/>}/>
    <Route path="/series" element={<Series/>}/>
    <Route path="/series/future" element={<Future/>}/>
    <Route path="/series/recent" element={<Recent/>}/>
   </Routes>
    </div>
  )
}
