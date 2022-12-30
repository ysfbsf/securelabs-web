import React from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
export const ShowReport = ({report}) => {

  return (
    <div className={cn(styles.container, styles.reportP)}>
        <div className={styles.pageHeader}>
            Cloud Storage Breach {report.date}
        </div>

        <div className={styles.cardReport}>
            <div className={styles.HeaderCard}>
                <div>Date, Time & Duration of Incident</div>
                <div className={styles.blue}>December 2nd, 2022 at 10:51 AM PST until December 3rd, 2022 at 5:55 PM</div>
            </div>
            <div className={styles.titlesOfText}>Incident Report</div>
            <div className={styles.textContent} dangerouslySetInnerHTML={{__html: report.report}}></div>

            <div className={styles.titlesOfText}>Root Cause</div>
            <div className={styles.textContent} dangerouslySetInnerHTML={{__html: report.cause}}></div>
            
            <div className={styles.titlesOfText}>Corrective Action</div>
            <div className={styles.textContent} dangerouslySetInnerHTML={{__html: report.action}}></div>

            <div className={styles.titlesOfText}>Date, Time & Duration of Incident</div>
            <div className={styles.dateTime}>
                December 2nd, 2022 at 10:51 AM PST until December 3rd, 2022 at 5:55 PM
            </div>

            <div className={styles.titlesOfText}>Number of California Individuals Affected</div>
            <div className={styles.dateReport}>{parseInt(report.nbr.value).toLocaleString()}</div>
            <div className={styles.titlesOfText}>Contact Information</div>
            
            <div className={styles.listInputs}>
                <div>
                <div className={cn(styles.titlesOfText, styles.labelInput)}>First Name</div>
                <div className={styles.dateReport}>{report.firstName.value}</div>
                </div>
                <div>
                <div className={cn(styles.titlesOfText, styles.labelInput)}>Last Name</div>
                <div className={styles.dateReport}>{report.lastName.value}</div>
                </div>
                <div>
                <div className={cn(styles.titlesOfText, styles.labelInput)}>Title</div>
                <div className={styles.dateReport}>{report.title.value}</div>
                </div>
            </div>
            <div className={styles.listInputs}>
                <div>
                    <div className={cn(styles.titlesOfText, styles.labelInput)}>Email</div>
                    <div className={styles.dateReport}>{report.email.value}</div>
                    </div>
                    <div>
                    <div className={cn(styles.titlesOfText, styles.labelInput)}>Phone</div>
                    <div className={styles.dateReport}>{report.phone.value}</div>
                </div>
            </div>
        </div>
       
    </div>
  )
}
