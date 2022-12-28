import React from 'react'
import styles from './index.module.scss'
import cn from 'classnames'

export const ToggleSwitch = () => {
  return (
    <label className={styles.switch}>
        <input type="checkbox" checked/>
        <span className={cn(styles.slider, styles.round)}></span>
    </label>

  )
}
