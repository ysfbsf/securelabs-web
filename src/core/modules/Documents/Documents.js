import React, { useRef, useState } from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'
import styles from './index.module.scss'
import image5 from '../../../assets/images/image5.png'
import image10 from '../../../assets/images/image10.png'
import image7 from '../../../assets/images/image7.png'
import image8 from '../../../assets/images/image8.png'
import image9 from '../../../assets/images/image9.png'
import { SvgSprite } from '../../ui/SvgSprite'
import cn from 'classnames'
import { Toultip } from '../../ui/Tooltip'
import { Details } from '../../ui/Details'
import { dataGovernance, privacybyDesign } from '../../../StaticData/DataGovernance'
import { Actions } from '../../ui/Actions/Actions'
import { useToggle } from '../../hooks/useToggle'

export const Documents = ({expanded, setExpanded}) => {
  const [showData, setShowData] = useState(false)
  const [show, setShow] = useState(false)
  const [detail, setDetail] = useState(false)
  const [data, setData] = useState()
  const [sideUser, setSideUser] = useState(false)
  const {isOpened, toggleIsOpened} = useToggle()

  const actions = useRef([
    {
        id: 1,
        text: 'Jon Smyt',
        icon: 'capa',
        onClick: () => console.log('test'),
    },
    {
        id: 2,
        text: 'Dodod Isto',
        icon: 'capa',
        onClick: () => console.log('test'),
    },
    {
        id: 3,
        text: 'Ttata baba',
        icon: 'capa',
        onClick: () => console.log('test'),
    },
])

  const handelEnter = (i) => {
    setShow(i)
  }
 
  const handelLeave = () => {
    setShow(null)
  }
 
  const OpenData = (id, type) =>{
    if(type === 'gover'){
      setData(dataGovernance.find(e => e.id === id))
    }else{
      setData(privacybyDesign.find(e => e.id === id))
    }
    setDetail(true)
  }

  const text = 'Data Governance is essential for GDPR. Article 22.5 outlines the data Classification for an organization and what they collect from end users'

  return (
    <DashboardWrapper activeItem={2} expanded={expanded} setExpanded={setExpanded} sideUser={sideUser}>
      <div className={styles.container}>
        <div className={styles.images}>
          <img src={image9} alt='GDPR'  className={styles.imgs}/>
          <img src={image5} alt='CCPA'  className={styles.imgs}/>
          <img src={image10} alt='HIPAA' className={styles.imgsHipaa}/>
          <img src={image7} alt='PSI'   className={styles.imgs}/>
          <img src={image8} alt='SOX'   className={styles.imgs}/>
        </div>
        <div className={styles.content}>
            <div className={styles.headerListe} onClick={()=>setShowData(!showData)}>Controls <SvgSprite spriteID={'arrow'}/></div>
            {!detail? (
              <ul className={cn(styles.liste, {
                [styles.showListe] : !showData,
                [styles.hideListe] : showData,
              })}>
                <li className={styles.liHeader}>Data Governance</li>
                {dataGovernance.map((item)=>(
                  <li key={item.id} className={styles.item} onClick={() => {OpenData(item.id, 'gover'); setSideUser(true)}} onMouseEnter={() => handelEnter(item.id)} onMouseLeave={()=>handelLeave()}><Toultip data={text} show={show} id={item.id}>{item.title}</Toultip></li>
                ))}
                <li className={styles.liHeader}>Privacy by Design</li>
                {privacybyDesign.map((item)=>(
                  <li key={item.id} className={styles.item} onClick={() => {OpenData(item.id, 'privacy'); setSideUser(true)}} onMouseEnter={() => handelEnter(item.id+dataGovernance.length)} onMouseLeave={()=>handelLeave()}><Toultip data={text} show={show} id={item.id+dataGovernance.length}>{item.title}</Toultip></li>
                ))}
              </ul>):(
              <>
                <div className={styles.liHeader}> 
                  <div>Data Governance</div>
                  <div>
                    <div className={styles.stakeholders} onClick={toggleIsOpened}>
                      Assign Stakeholders <SvgSprite spriteID={'arrow'}/>
                    </div>
                    <Actions actions={actions.current} noIcon isOpenedActions={isOpened}/>
                  </div>
                </div>
                <Details data={data} />
              </>
              )
            }
        </div>
      </div>
    </DashboardWrapper>
  )
}
