import React, { useEffect, useState } from 'react'
import { DashboardReport } from '../../ui/DashboardSide'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'
import { Details } from '../../ui/Details/Details'
import { FormReport } from './FormReport'
import styles from './index.module.scss'
import { ShowReport } from './ShowReport'

export const Report = ({expanded, setExpanded}) => {
  const [reports, setReports] = useState([])
  const [form, setForm] = useState(true)
  const [actieReport, setActiveReport] = useState()
  
  useEffect(()=>{
    console.log(form)
  }, [form])
  
  return (
    <DashboardWrapper activeItem={3} expanded={expanded} setExpanded={setExpanded}>
      <div className={styles.main}>
        {!form ? (
          <div className={styles.reportDetails}>
            <ShowReport report={actieReport ? actieReport : reports[reports.length-1]}/>
            <Details />
          </div>
        ):(
          <FormReport 
            setReports={setReports} 
            reports={reports}
            setForm={setForm}
          />
        )}
        <DashboardReport 
          setForm={setForm} 
          reports={reports} 
          setActiveReport={setActiveReport}
          maxContent
        />
      </div>
    </DashboardWrapper>
  )
}
