
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { SingleTeam } from '../pages/SingleTeam'
import { Teams } from '../pages/teams'
export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/teams' element={<Teams/>}></Route>
            <Route path='/teams/:team' element={<SingleTeam/>}></Route>
        </Routes>

    </div>
  )
}
