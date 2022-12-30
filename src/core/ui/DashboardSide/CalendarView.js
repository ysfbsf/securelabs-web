import React, { useState } from 'react'
import { Select } from '../Select'
import styles from './index.module.scss'
// import cn from 'classnames'

export const CalendarView = () => {
    const [values] = useState([])
    const [newValue, setNewValue] = useState('test')
    console.log(newValue)
    return (
        <div className={styles.container}>    
            <Select 
                className={styles.select} 
                whiteHeader 
                initValues={values} 
                setValues={setNewValue}
                header="Calendar View"
                radiusBorder
            />  
        </div>
    )
}
