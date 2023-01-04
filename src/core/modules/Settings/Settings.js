import React, { useState } from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import { User, Compliance, General, Integrations, Incident, Security, Vulnerability } from '.'

export const Settings = ({expanded, setExpanded}) => {
  const items = [
    {
      id: 1,
      name: 'General Settings'
    },
    {
      id: 2,
      name: 'Users'
    },
    {
      id:3,
      name: 'Security Policies'
    },
    {
      id: 4,
      name: 'Vulnerability Management'
    },
    {
      id: 5,
      name: 'Incident Response'
    },
    {
      id:6,
      name: 'Compliance'
    },
    {
      id:7,
      name: 'Integrations'
    }
  ]
  const [activeItem, setActiveItem] = useState(1)

  const ActiveComp = ({active})=>{
    switch (active) {
      case 1:
        return <General />
      case 2:
        return <User />
      case 3:
        return <Security />
      case 4:
        return <Vulnerability />
      case 5:
        return <Incident />
      case 6:
        return <Compliance />
      case 7: 
        return <Integrations />
      default:
        return <General />
    }
  }

  return (
    <DashboardWrapper activeItem={7} expanded={expanded} setExpanded={setExpanded}>
      <div className={styles.main}>
        <div className={styles.items}>
          {items.map( item =>(
            <div key={item.id} className={cn(styles.item,{
              [styles.activeItem] : item.id === activeItem, 
            })} onClick={()=>{setActiveItem(item.id)}}>{item.name}</div>
          ))}
        </div>
        <div className={styles.content}>
          <ActiveComp active={activeItem} />
        </div>
      </div>
    </DashboardWrapper>
  )
}
