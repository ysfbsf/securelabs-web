import React, { useState } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'

export const ToggleSwitch = ({className}) => {
  const [value, setValue] = useState(true)

  return (
    <label className={cn(styles.switch,{
      [className] : className
    })}>
        <input type="checkbox" defaultChecked onChange={()=>setValue(!value)}/>
        <span className={cn(styles.slider, styles.round, {
          [styles.transform] : className,
        })}></span>
    </label>

  )
}
