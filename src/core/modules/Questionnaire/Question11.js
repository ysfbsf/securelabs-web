import React from 'react'
import styles from './index.module.scss'

export const Question11 = () => {
  return (
    <div className={styles.containerQuestion}>
    <div className={styles.question}>
        Does you organization have a Disaster Recovery or Business Continuity Plan?
    </div>
    <div className={styles.response}>
        <div className={styles.input}>
            <input type={'radio'} name='response'/> Yes
        </div>
        <div className={styles.input}>
            <input type={'radio'} name='response'/> No
        </div>
    </div>
</div>
  )
}
