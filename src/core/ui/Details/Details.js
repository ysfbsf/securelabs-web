import React, { useState } from 'react'
import { DataTableComponent } from '../DataTable/DataTableComponent'
import { Select } from '../Select'
import { TextEditor } from '../TextEditor'
import styles from './index.module.scss'
 
export const Details = ({data}) => {
    const [values] = useState([
        {
            id: 1,
            name: 'View All',
        },
        {
            id : 2,
            name : 'Documents'
        },
        {
            id : 3,
            name : 'Notes'
        },
    ])

    const [documents, setDocuments] = useState([
        {
            id: 1,
            name : "Web Design Material",
            activity: 'John Smith',
            size: '3 MB',
            dataCreated : "Sep 13, 2019",
            lastUpdated : "Sep 13, 2019",
        },
        {
            id : 2,
            name : "Competitor Template",
            activity: 'Amy Apple',
            size: '8 MB',
            dataCreated : "Sep 15, 2019",
            lastUpdated : "Sep 15, 2019",
        },
        {
            id: 3,
            name : "UI UX Design",
            activity: 'Tom Reese',
            size: '4 MB',
            dataCreated : "Sep 24, 2019",
            lastUpdated : "Sep 24, 2019",
        },
        {
            id : 4,
            name : "Programming Helper",
            activity: 'Hunter Smith',
            size: '6 MB',
            dataCreated : "Sep 27, 2019",
            lastUpdated : "Sep 27, 2019",
        },
    ])

    const [newValue, setNewValue] = useState()

    // useEffect(()=>{
    //     // console.log(documents)
    // }, [documents])
    return (
        <div className={styles.container}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.content}>
                <div className={styles.body}>
                    {data.body}
                </div>
            </div>
            <div className={styles.editor}>
                <TextEditor setDocuments={setDocuments} data={documents}/>
            </div>
            <div className={styles.logsViews}>
                <div className={styles.logs}>Logs</div>
                <Select 
                    className={styles.view} 
                    blueHeader 
                    initValues={values} 
                    setValues={setNewValue}
                    value={newValue}
                    header="View All"
                    radiusBorder
                /> 
            </div>
            <div className={styles.table}>
                <DataTableComponent data={documents}/>
            </div>
        </div>
  )
}
