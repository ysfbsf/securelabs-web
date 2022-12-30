import React, { useState } from 'react'
import { Select } from '../../ui/Select'
import styles from './index.module.scss'
import cn from 'classnames'

export const DashboardRisk = () => {
    const [values] = useState([
        {
            id: 1,
            name: 'Highest',
            color: '#FF0304',
            value: 'highest',
        },
        {
            id: 2,
            name: 'Sinificant',
            color: '#FFC00E',
            value: 'sinificant',
        },
        {
            id: 3,
            name: 'Moderate',
            color: '#FFFF11',
            value: 'moderate',
        },
        {
            id: 4,
            name: 'Minor',
            color: '#85FFBC',
            value: 'minor',
        },
        {
            id: 5,
            name: 'Negligible',
            color: '#00B050',
            value: 'negligible',
        },
        {
            id: 6,
            name: 'N/A',
            color: '#FFFFFF',
            value: 'na',
        },
    ])
    const [newValue, setNewValue] = useState(values[5])

  return (
      <div className={styles.container}>    
      <Select 
            className={styles.select} 
            whiteHeader 
            initValues={values} 
            setValues={setNewValue}
            header="Assign Risk Level"
            radiusBorder
        />  
        <div className={cn(styles.divRisk, {
                [styles.riskWhiteColor] : newValue === values[5]
            })} style={{backgroundColor : newValue.color}}> <p className={cn(styles.riskText,{
                [styles.riskWhiteText] : newValue === values[0] || newValue === values[4]
            })}>{newValue.name}</p> </div>
      </div>
  )
}
