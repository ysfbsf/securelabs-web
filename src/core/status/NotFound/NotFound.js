import React from 'react'

// Styles
import styles from './index.module.scss'

// Components

export const NotFound = () => {
    return (
        <div className={styles.error}>
            Not Found
            <span>404</span>
        </div>
    )
}
