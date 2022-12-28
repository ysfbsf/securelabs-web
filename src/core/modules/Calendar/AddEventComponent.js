import React, { useState } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'
import { PopupTop } from '../../ui/Popup/PopupTop'
import { useInput } from '../../hooks/useInput'
import { ToggleSwitch } from '../../ui/ToggleSwitch'

export const AddEventComponent = ({ closePopup, title, newEvent, setEvents, events }) => {
    const colors = ["#1A7DC2", "green", "red", "#FFA500"]
    const options = {
        hour: '2-digit',
        minute: '2-digit',
    }
    const [start] = useState(new Date(newEvent.start))
    const [end] = useState(new Date(newEvent.end))
    const [startDate] = useState(start.toDateString())
    const [endDate] = useState(end.toDateString())
    const [startTimes] = useState(start.toLocaleTimeString('en-US', options))
    const [endTimes] = useState(end.toLocaleTimeString('en-US', options))
    const titre = useInput('')
    const address = useInput('')
    const note = useInput('')
    const [color, setColor] = useState()

    const addEventAction = () => {
        const ev = {
            allDay: false,
            createdBy : 'hamza',
            members : 5,
            end: new Date(end),
            start: new Date(start),
            title: titre.value,
            address : address.value,
            note : note.value,
            color : color,
            dataCreated : 'test',
            lastUpdated : 'test',
        }
        setEvents([...events, ev])
        closePopup()
    }

    return (
        <>
            <PopupTop className={styles.customTop} closePopup={closePopup} title={title} />
            <div className={styles.teamsPopupContent}>
                <div className={styles.bodyPopup}>
                    <div className={styles.header}>
                        <div className={styles.info}> Informations Event</div>
                        <div className={styles.colors}>
                            {colors.map((c,i) => (
                                <div 
                                    key={c} 
                                    className={styles.square} 
                                    style={{ backgroundColor: c }}
                                    onClick={()=>setColor(c)}>
                                        {color === c && <div className={styles.activeColor}></div>}
                                        {!color && i === 0  && <div className={styles.activeColor}></div>}
                                    </div>
                            ))}
                        </div>
                    </div>
                    <input 
                        className={styles.inputFull} 
                        type={'text'} 
                        value={titre.value}
                        onChange={titre.onChange}
                        placeholder='Titre*' 
                    />
                    <input 
                        className={styles.inputFull} 
                        type={'text'} 
                        value={address.value}
                        onChange={address.onChange}
                        placeholder='Address*' 
                    />
                    <div className={styles.inputs}>
                        <div className={styles.date}>
                            <div className={styles.dateText}>Starts Time</div>
                            <input disabled className={styles.inputFull} type={'text'} placeholder={startDate} />
                            <input disabled className={styles.inputFull} type={'text'} placeholder={startTimes} />
                        </div>
                        <div className={styles.date}>
                            <div className={styles.dateText}>Ends Time</div>
                            <input disabled className={styles.inputFull} type={'text'} placeholder={endDate} />
                            <input disabled className={styles.inputFull} type={'text'} placeholder={endTimes} />
                        </div>
                    </div>
                    <textarea
                        value={note.value}
                        onChange={note.onChange} 
                        placeholder='Type your note...' 
                        rows={'5'} 
                        className={styles.textarea} 
                    />
                </div>
                <div className={styles.teamsPopupBtns}>
                    <div className={styles.notification}>
                        <div className={styles.notificationText}>Notification</div> <ToggleSwitch />
                    </div>
                    <div>
                        <button
                            className={cn(styles.teamsPopupBtn, styles.teamsPopupBtnBlue)}
                            type={'button'}
                            onClick={addEventAction}
                        >
                            Add New
                        </button>
                        <button
                            className={cn(styles.teamsPopupBtn, styles.teamsPopupBtnWhite)}
                            type={'button'}
                            onClick={closePopup}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
