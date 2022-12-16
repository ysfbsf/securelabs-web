import React, { useState } from 'react'
import { DashboardUser } from '../DashboardUser/DashboardUser'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './index.module.scss'
import cn from 'classnames'

export const DashboardWrapper = ({children, activeItem}) => {
    const [showSide, setShowSide] = useState(false)
    const [expanded, setExpanded] = useState(true);
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.navbar}>
                <Navbar expanded={expanded} setExpanded={setExpanded}/>
            </div>
            <div className={styles.content}>
                <Sidebar activeItem={activeItem} expanded={expanded} setExpanded={setExpanded}/>
                {children}
            </div>
        </div>
        <div className={cn(styles.dashboardUser, {
            [styles.sideUserHide] : showSide,
            [styles.sideUserShow] : !showSide,
        })}>
            <DashboardUser showSide={showSide} setShowSide={setShowSide}/>
        </div>
        
    </div>
  )
}
