import React from 'react'
import styles from './index.module.scss'
import { SvgSprite } from "../SvgSprite/SvgSprite";

export const Search = () => {
  return (
    <div className={styles.container}>
        <SvgSprite spriteID={'search'} className={styles.svgSearch}/>
        <input type={'text'} className={styles.input} placeholder='Search'/>
    </div>
  )
}
