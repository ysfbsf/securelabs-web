import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import { Home } from '../core/modules/Home'
import { NotFound } from '../core/status/NotFound'
import { Help } from '../core/modules/Help'
import { Calendar } from '../core/modules/Calendar'
import { Settings } from '../core/modules/Settings'
import { Documents } from '../core/modules/Documents'
import { Plan } from '../core/modules/Plan'
import { Report } from '../core/modules/Report'
import { Resources } from '../core/modules/Resources'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home/>} exact/>
            <Route path='/documents' element={<Documents />} exact />
            <Route path='/report' element={<Report />} exact />
            <Route path='/plan' element={<Plan /> } exact />
            <Route path='/resources' element={<Resources />} exact />
            <Route path='/calendar' element={<Calendar />} exact />
            <Route path='/settings' element={<Settings />} exact />
            <Route path='/help' element={<Help /> } exact />
           

            <Route path='/404' element={<NotFound/>} exact/>
            <Route path='*' element={<Navigate to='/home' replace/>}/>
        </Routes>
    )
}
