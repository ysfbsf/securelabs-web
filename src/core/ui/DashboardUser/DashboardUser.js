import React, { useState } from 'react'
import styles from './index.module.scss'
import image from '../../../assets/images/test2022.png'
import { Select } from '../Select'
import {DateInput} from '../DateInput'
import cn from 'classnames'

export const DashboardUser = ({showSide, setShowSide}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [values, setValues] = useState([
    {
        id: 1,
        name: 'Framwork 1',
        value: '1',
    },
    {
        id: 2,
        name: 'Framwork 2',
        value: '2',
    },
    {
        id: 3,
        name: 'Framwork 3',
        value: '3',
    },
])

  return (<>
      
      {/* <div className={cn(styles.hideSide, {
        [styles.showSide] : showSide,
      })} onClick={()=> setShowSide(!showSide)}>
        <SvgSprite spriteID={'arrowNext'} />
      </div> */}
      
      <div className={cn(styles.container, {
        [styles.sideUserHide]  : showSide,
      })}>      
        <div className={styles.header}>
          <div>
            <img className={styles.image} src={image} alt="ima"/>
          </div>
          <div className={styles.user}>
            <div className={styles.name}> Hamza Maarouf </div>
            <div className={styles.role}> Super Admin </div>
          </div>
        </div>
        <div className={styles.framworks}> 
            <Select className={styles.select} values={values} setValues={setValues}/>
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
