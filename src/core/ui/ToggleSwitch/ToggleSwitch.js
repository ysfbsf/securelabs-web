import React, { useState } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'

export const ToggleSwitch = () => {
  const [value, setValue] = useState(true)

  return (
    <label className={styles.switch}>
        <input type="checkbox" defaultChecked onChange={()=>setValue(!value)}/>
        <span className={cn(styles.slider, styles.round)}></span>
    </label>

  )
}
