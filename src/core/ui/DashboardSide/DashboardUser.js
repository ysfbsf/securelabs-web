import React, { useState } from 'react'
import styles from './index.module.scss'
import { Select } from '../Select'
import {DateInput} from '../DateInput'

export const DashboardUser = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [values, setValues] = useState([
    {
        id: 1,
        name: 'CCPA',
        value: '1',
    },
    {
        id: 2,
        name: 'PCI-DSS',
        value: '2',
    },
    {
        id: 3,
        name: 'SOC',
        value: '3',
    },
])

  return (<>
      <div className={styles.container}>      
        <div className={styles.framworks}> 
            <Select className={styles.selectFramwork} values={values} setValues={setValues}/>
            <DateInput className={styles.dateBtn} setStartDate={setStartDate} startDate={startDate}/>
        </div>
        <div className={styles.listFramworks}> 
          {values.length > 0 && values.map(value => (
            <div key={value.id} className={styles.item}>
              {value.name}
            </div>
          ))}
        </div>
        <div className={styles.dateDiv}>
          Date
          <div className={styles.item}>
            {startDate.toLocaleDateString()}
          </div>
        </div>
          
        <div className={styles.actions}> 
          Actions Item
          <p className={styles.danger}>Schedule Audit for CCPA Compliance</p> 
        </div>
        <div className={styles.items}> 
          Activity
          <div className={styles.privacy}> Privacy Policy created for GDPR Art 3.6 </div> 
          <div className={styles.privacy}> BCP Added 12/8/2022 for CCPA 4.6 </div>
        </div>
      </div>
    </>
  )
}
