import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

// Hooks
import { useToggle } from '../../hooks/useToggle'

// Styles
import styles from './index.module.scss'

import { SvgSprite } from '../SvgSprite/SvgSprite'

export const Select = ({className,btnSwith,values, setValues, text, selectFullWidth}) => {
    
    const [selectData] = useState([
        {
            id: 1,
            name: 'CCPA',
            value: '1',
        },
        {
            id: 2,
            name: 'PCI-DSS',
            value: '2',
        },
        {
            id: 3,
            name: 'SOC',
            value: '3',
        },
    ])

    const select = useRef()
    const {isOpened, toggleIsOpened} = useToggle()
    const [activeName] = useState('All Framworks')
    
    const changeValue = select => {
        if(values.find(v=> v.value === select.value))
            setValues(values.filter( v => v.value !== select.value))
        else{
            setValues([...values, select])
        }
        toggleIsOpened()
    }

    const handleClick = e => {
        if (isOpened && !select.current.contains(e.target)) {
            toggleIsOpened()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    })

    return (
        <div ref={select} className={cn(styles.select, {
            [styles.selectContent]: text,
            [styles.selectOpened]: isOpened,
            [className]: className,
        })}>
            <div className={cn(styles.selectActive, {
                [styles.selectActiveOpened]: isOpened,
                [styles.selectActiveFull]: selectFullWidth,
                [styles.btnSwith]: btnSwith,
                [styles.headerSelect] : true,
            })} onClick={toggleIsOpened}>
                {
                    text && (
                        <div className={styles.selectText}>
                            {text}
                        </div>
                    )
                }
                <span>{activeName}</span>
                <SvgSprite spriteID={'arrow'} />
            </div>
            {
                isOpened && (
                    <div className={styles.selectDrop}>
                        {
                            selectData.map(select => (
                                <div
                                    className={cn(styles.selectItem, {
                                        [styles.selectItemActive]:true ,
                                        [styles.selectItemRight]: text,
                                    })}
                                     key={select.id}
                                     onClick={() => changeValue(select)}
                                >
                                    {select.name}
                                    {
                                        values.find(v => v.value === select.value) && <SvgSprite spriteID={'check'} />
                                    }
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
