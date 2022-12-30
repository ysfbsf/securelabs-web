import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import { Btn } from '../../ui/Btn'
import { TextEditor } from '../../ui/TextEditor'
import styles from './index.module.scss'
import cn from 'classnames'
export const FormReport = ({reports, setReports, setForm}) => {

    const [report, setReport] = useState()
    const [cause, setCause] = useState()
    const [action, setAction] = useState()

    const firstName = useInput('')
    const lastName = useInput('')
    const title = useInput('')
    const email = useInput('')
    const phone = useInput('')
    const nbr = useInput('')

    const handelSubmit = ()=>{
        const data = {
            id: reports.length +1,
            report: report,
            cause: cause,
            action: action,
            firstName: firstName,
            lastName: lastName,
            title: title,
            phone: phone,
            email: email,
            nbr : nbr,
            date : new Date().toLocaleDateString(),
        }
        setReports([...reports, data])
        setForm(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.textHeader}>
                The specific requirements for incident reports under the CCPA are set out in California Code of Regulations, title 1, section 999.310. Under this section, businesses must provide the following information in their incident reports: <br /><br />
                <div>A description of the incident,</div> 
                <div>including the types of personal information that were involved and the number of California consumers affected </div>
                <div>The date, time, and duration of the incident</div> 
                <div>The cause of the incident and any corrective action taken or planned to be taken</div>
            </div>
            <div className={styles.title}>Create Title - Incident Report Name</div>
            
            <div className={cn(styles.titlesOfText, styles.labelInput)}>Incident Report</div>
            <div className={styles.editor}>
                <TextEditor data={report} setData={setReport} />
            </div>
            
            <div className={cn(styles.titlesOfText, styles.labelInput)}>Root Cause</div>
            <div className={styles.editor}>
                <TextEditor data={cause} setData={setCause} />
            </div>
            
            <div className={cn(styles.titlesOfText, styles.labelInput)}>Corrective Action</div>
            <div className={styles.editor}>
                <TextEditor 
                data={action} 
                setData={setAction} 
                />
            </div>

            <div className={cn(styles.titlesOfText, styles.labelInput)}>Date, Time & Duration of Incident</div>
            <div className={styles.dateTime}>
                December 2nd, 2022 at 10:51 AM PST until December 3rd, 2022 at 5:55 PM
            </div>

            <div className={cn(styles.titlesOfText, styles.labelInput)}>Number of California Individuals Affected</div>
            <input 
                type={'number'} 
                className={styles.inputReport}
                onChange={nbr.onChange}
            />
            <div className={cn(styles.titlesOfText, styles.labelInput)}>Contact Information</div>
            
            <div className={styles.listInputs}>
                <div>
                <div className={cn(styles.titlesOfText, styles.labelInput)}>First Name</div>
                <input 
                        type={'text'} 
                        className={styles.inputReport}
                        onChange={firstName.onChange}/>
                </div>
                <div>
                <div className={cn(styles.titlesOfText, styles.labelInput)}>Last Name</div>
                <input 
                        type={'text'} 
                        className={styles.inputReport}
                        onChange={lastName.onChange}/>
                </div>
                <div>
                <div className={cn(styles.titlesOfText, styles.labelInput)}>Title</div>
                <input 
                        type={'text'} 
                        className={styles.inputReport}
                        onChange={title.onChange}/>
                </div>
            </div>
            <div className={styles.listInputs}>
                <div>
                <div className={cn(styles.titlesOfText, styles.labelInput)}>Email</div>
                <input 
                        type={'email'} 
                        className={styles.inputReport}
                        onChange={email.onChange}/>
                </div>
                <div>
                <div className={cn(styles.titlesOfText, styles.labelInput)}>Phone</div>
                <input 
                        type={'tel'} 
                        className={styles.inputReport}
                        onChange={phone.onChange}/>
                </div>
            </div>
            <div className={styles.submitbtnReport}>
                <Btn type={'submit'} className={styles.submitbtn} onClick={handelSubmit}>Create Report</Btn>
            </div>
           
        </div>
  )
}
