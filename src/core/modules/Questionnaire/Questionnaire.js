import React, { useState } from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

// logo
import logo from '../../../assets/images/logo.png'
// import { SvgSprite } from '../../ui/SvgSprite/SvgSprite'

// components
import {SvgSprite} from '../../ui/SvgSprite'
import {Btn} from '../../ui/Btn'
import { Question } from './Question'
import { Questions } from '../../../StaticData'

export const Questionnaire = () => {
    const [step, setStep] = useState(1);
    const [activNext, setActiveNext] = useState(false)
    const [response, setResponse] = useState([
        {
            id:1,
            res : '',
        },
        {
            id:2,
            res : '',
        },
        {
            id:3,
            res : '',
        },
        {
            id:4,
            res : '',
        },
        {
            id:5,
            res : '',
        },
        {
            id:6,
            res : '',
        },
        {
            id:7,
            res : '',
        },
        {
            id:8,
            res : '',
        },
        {
            id:9,
            res : '',
        },
        {
            id:10,
            res : '',
        },
        {
            id:11,
            res : '',
        },
        {
            id:12,
            res : '',
        },
    ])

    const Step = ({active}) => (
        <div 
            className={cn(styles.CustomStep, {
                [styles.activeStep] : active,
            })}
        ></div>
    );

    const handelSubmit = () =>{
        console.log(response)
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.logo}> 
                <img src={logo} alt='logo' className={styles.logoImage} /> 
            </div>
            <div className={styles.svg} > 
                <SvgSprite className={styles.svgIcon}  spriteID={'help-circle'}/> 
            </div>
        </div>
        <div className={styles.steps}> 
        {Questions.map( question => (
            <Step key={question.id} active={step === question.id}/>
        ))}
        </div>
        <div className={styles.stepsNmb}> Question {step} </div>
            <Question 
                question={Questions[step-1]} 
                setResponse={setResponse} 
                response={response} 
                step={step}
                setActiveNext={setActiveNext}
            />
        <div className={styles.suivant}> 
         <Btn className={styles.btnSuivant} disable={step<=1} onClick ={()=>{setStep(step-1)}}> Last Question </Btn>
         {step <  12 && <Btn className={styles.btnSuivant} disable={!activNext && response[step-1].res === ''} onClick ={()=>{setStep(step+1); setActiveNext(false)}}> Next Question </Btn> }
         {step >= 12 && <Btn className={cn(styles.btnSuivant, styles.submit)} disable={response.find(res => res.res === '')} onClick={handelSubmit} > Submit </Btn>}
        </div>
    </div>
  )
}
