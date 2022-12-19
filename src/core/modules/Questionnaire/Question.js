import React from 'react'

import styles from './index.module.scss'

export const Question = ({question, setResponse, response, step, setActiveNext}) => {

    const handleRadioChange = (event)=>{
        let items = [...response];
        let item = {
            ...items[step-1],
            res: event.target.value
        }
        items[step-1] = item;
        setResponse([...items]);
        setActiveNext(true)
    }

  return (
    <div className={styles.containerQuestion}>
        <div className={styles.question}>
            {question.question}
        </div>
        <div className={styles.response}>
            <div className={styles.input}>
                <label className={styles.label}> Yes
                    <input 
                        type={'radio'}
                        name='response' 
                        value={true} 
                        checked={response[step-1].res === 'true'}
                        onChange={handleRadioChange}
                    /> 
                    <span className={styles.checkmark}></span>
                </label>
            </div>
            <div className={styles.input}>
                <label className={styles.label}> No
                    <input 
                        type={'radio'}
                        name='response' 
                        value={false} 
                        checked={response[step-1].res === 'false'}
                        onChange={handleRadioChange}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            </div>
        </div>
    </div>
  )
}
