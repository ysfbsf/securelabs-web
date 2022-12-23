import React, { useEffect, useRef } from 'react'
import cn from 'classnames'

// Styles
import styles from './index.module.scss'
import { useMobile } from '../../hooks/useMobile'
import { useToggle } from '../../hooks/useToggle'
import { SvgSprite } from '../SvgSprite/SvgSprite'

export const Actions = ({actions, setActiveItem, noIcon, isOpenedActions}) => {
    const isTablet = useMobile(769)
    const {isOpened, toggleIsOpened} = useToggle()
    const action = useRef()

    const handleClick = e => {
        if (isOpened && !action.current.contains(e.target)) {
            toggleIsOpened()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    })

    useEffect(()=>{
        console.log(isOpenedActions)
    }, [isOpenedActions])
    return (
        <div className={styles.actions} ref={action}>
            {!noIcon && 
                <div className={styles.actionsBtn} onClick={toggleIsOpened}>
                    {
                        isTablet ? <SvgSprite spriteID={'arrow'}/> : <SvgSprite spriteID={'more'}/>
                    }
                </div>
            }
            {
                (isOpened || isOpenedActions) && (
                    <div className={styles.actionsContent}>
                        <div className={styles.headerAction}>
                            <div className={styles.addUser}>Add Stakeholder</div>
                            <SvgSprite spriteID={'add'}  className={styles.addIcon}/>
                        </div>
                        {
                            actions.map(actionItem => actionItem && (
                                <div key={actionItem.id} className={cn(styles.actionsContentBtn, {
                                    [styles.actionsContentBtnDelete]: actionItem.delete,
                                })} onClick={() => {
                                    actionItem.onClick()
                                    setActiveItem && setActiveItem()
                                }}>
                                    <div>{actionItem.text}</div>
                                    <SvgSprite spriteID={actionItem.icon}/>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
