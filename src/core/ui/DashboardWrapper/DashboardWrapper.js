import React from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './index.module.scss'

export const DashboardWrapper = ({children, activeItem, expanded, setExpanded}) => {

    return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.content}>
                <Sidebar activeItem={activeItem} expanded={expanded}/>
                <div className={styles.pages}>
                    <div className={styles.navbar}>
                        <Navbar activeItem={activeItem}/>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}
