import React from 'react'
import { Search } from '../Search/Search'
import { SvgSprite } from '../SvgSprite/SvgSprite'
import styles from './index.module.scss'
import logo from '../../../assets/images/logo.png'
import image from '../../../assets/images/test2022.png'

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
      <div className={styles.header}>
          <SvgSprite spriteID={'settings'} className={styles.settingsIcon}/>
          <div className={styles.imageProfile}>
            <img className={styles.image} src={image} alt="ima"/>
          </div>
          <div className={styles.user}>
            <div className={styles.name}> Hamza Maarouf </div>
            <div className={styles.role}> Super Admin </div>
          </div>
        </div>
    </div>
  )
}
