import React, { useEffect, useState } from 'react'
import { DataTableComponent } from '../DataTable/DataTableComponent'
import { Select } from '../Select'
import { TextEditor } from '../TextEditor'
import styles from './index.module.scss'

export const Details = ({data}) => {
    const [values] = useState([
        {
            id : 1,
            name : 'Documents'
        },
        {
            id : 2,
            name : 'Notes'
        },
    ])
    const [newValue, setNewValue] = useState()

    useEffect(()=>{
        console.log(newValue)
    }, [newValue])
    return (
        <div className={styles.container}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.content}>{data.body}</div>
            <div className={styles.editor}>
                <TextEditor />
            </div>
            <div className={styles.logsViews}>
                <div className={styles.logs}>Logs</div>
                <Select 
                    className={styles.view} 
                    whiteHeader 
                    initValues={values} 
                    setValues={setNewValue}
                    header="View All"
                    radiusBorder
                /> 
            </div>
            <div className={styles.table}>
                <DataTableComponent />
            </div>
        </div>
  )
}
