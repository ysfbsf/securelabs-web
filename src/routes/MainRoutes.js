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
// import { Questionnaire } from '../core/modules/Questionnaire/Questionnaire'

export const MainRoutes = ({expanded, setExpanded}) => {
    return (
        <Routes>
            <Route path='/home' element={<Home expanded={expanded} setExpanded={setExpanded}/>} exact/>
            <Route path='/documents' element={<Documents expanded={expanded} setExpanded={setExpanded}/>} exact />
            <Route path='/report' element={<Report expanded={expanded} setExpanded={setExpanded}/>} exact />
            <Route path='/plan' element={<Plan expanded={expanded} setExpanded={setExpanded}/> } exact />
            <Route path='/resources' element={<Resources expanded={expanded} setExpanded={setExpanded}/>} exact />
            <Route path='/calendar' element={<Calendar expanded={expanded} setExpanded={setExpanded}/>} exact />
            <Route path='/settings' element={<Settings expanded={expanded} setExpanded={setExpanded}/>} exact />
            <Route path='/help' element={<Help /> } exact />
            {/* <Route path='/test' element={<Questionnaire />} exact /> */}

            <Route path='/404' element={<NotFound/>} exact/>
            <Route path='*' element={<Navigate to='/home' replace/>}/>
        </Routes>
    )
}
