import React from 'react'
import { Search } from '../Search/Search'
import { SvgSprite } from '../SvgSprite/SvgSprite'
import styles from './index.module.scss'
import image from '../../../assets/images/test2022.png'
import cn from 'classnames'

export const Navbar = ({activeItem}) => {
  return (
    <div className={styles.container}>
      <div className={styles.svgNavigation}>
        <SvgSprite spriteID={'arrowNext'} className={styles.reversSvg}/>
        <SvgSprite spriteID={'arrowNext'} />
      </div>
      <Search />
      <div className={cn(styles.header,{
        [styles.maxHeader] : activeItem === 3,
        [styles.transp] : activeItem === 7,
      })}>
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
