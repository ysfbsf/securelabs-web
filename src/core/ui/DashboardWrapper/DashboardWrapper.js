import React from 'react'
import { DashboardRisk } from '../DashboardRisk/DashboardRisk'
import { DashboardUser } from '../DashboardUser/DashboardUser'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './index.module.scss'

export const DashboardWrapper = ({children, activeItem, expanded, setExpanded, sideUser}) => {

    return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.navbar}>
                <Navbar expanded={expanded} setExpanded={setExpanded}/>
            </div>
            <div className={styles.content}>
                <Sidebar activeItem={activeItem} expanded={expanded} setExpanded={setExpanded}/>
                <div className={styles.pages}>{children}</div>
                {!sideUser ? <DashboardUser/> : <DashboardRisk />}
            </div>
        </div>
    </div>
  )
}
