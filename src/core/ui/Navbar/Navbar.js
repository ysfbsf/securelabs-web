import React from 'react'
import { Search } from '../Search/Search'
import { SvgSprite } from '../SvgSprite/SvgSprite'
import styles from './index.module.scss'
import logo from '../../../assets/images/logo.png'

export const Navbar = ({expanded, setExpanded}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <SvgSprite className={styles.svgIcons} spriteID={'menu'} onClick={() => setExpanded(!expanded)}/>
        <div className={styles.logoText}>
          <img src={logo} alt='logo'/>
        </div>
      </div>
      <Search />
    </div>
  )
}
