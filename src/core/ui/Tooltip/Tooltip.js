import React from 'react'
import styles from './index.module.scss'
import cn from 'classnames';

export const Toultip = ({children, show = false, data, id}) => {

    return (
        <div className={styles.tooltipContainer}>
            {children}
            <div>
            {show === id &&
                <div className={cn(styles.tooltipBody, {
                    [styles.show] : show ||show === 0,
                    [styles.none] : !show
                    })}>
                <div className={styles.data}>{data}</div>
                </div>
            }
            </div>
        </div>
    )
}