import React from 'react'
import styles from './index.module.scss'
import { Btn } from '../Btn'
import cn from 'classnames'
export const DashboardReport = ({reports, setForm, setActiveReport, maxContent}) => {
    const handelClick = (report)=>{
        console.log(report)
        setActiveReport(report)
    }
    return (
        <div className={cn(styles.container, {
            [styles.maxContent] : maxContent,
        })}>    
            <Btn className={styles.btnReports} onClick={()=>{setForm(true); setActiveReport()}}>Incident Reports</Btn>
            {reports && reports?.map( report =>(
                <div key={report.id} className={styles.reportText} onClick={()=>handelClick(report)}>Cloud Storage Breach {report.date}</div>
            ))}
        </div>
    )
}

