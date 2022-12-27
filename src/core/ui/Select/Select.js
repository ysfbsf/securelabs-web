import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

// Hooks
import { useToggle } from '../../hooks/useToggle'

// Styles
import styles from './index.module.scss'

import { SvgSprite } from '../SvgSprite/SvgSprite'

export const Select = ({className,btnSwith,values, value, header, blueHeader, radiusBorder, whiteHeader, initValues, setValues, text, selectFullWidth}) => {
    
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
    const [activeName, setActive] = useState(value?value.name:(initValues ? header :'All Framworks'))
    
    const changeValue = select => {
        if(!initValues){
            if(values.find(v=> v.value === select.value))
                setValues(values.filter( v => v.value !== select.value))
            else{
                setValues([...values, select])
            }
            toggleIsOpened()
        }else{
            if(initValues.find(v=> v.value === select.value))
                setValues(initValues.find( v => v.value === select.value))
            else{
                setValues(values)
            }
            toggleIsOpened()
        }
        if(value){
            setActive(select.name)
        }
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
                [styles.whiteHeader] : whiteHeader,
                [styles.blueHeader] : blueHeader,
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
                    <div className={cn(styles.selectDrop,{
                        [styles.radiusBorder] : radiusBorder,
                    })}>
                        {
                            
                            (initValues?initValues:selectData).map(select => (
                                <div
                                    className={cn(styles.selectItem, {
                                        [styles.selectItemActive]:true ,
                                        [styles.selectItemRight]: text,
                                        [styles.whiteDrop] : blueHeader,
                                    })}
                                     key={select.id}
                                     onClick={() => changeValue(select)}
                                >
                                    {initValues && <div className={styles.divColor} style={{backgroundColor : select.color}}></div>}
                                    {select.name}
                                    {
                                       !initValues && values.find(v => v.value === select.value) && <SvgSprite spriteID={'check'} />
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
