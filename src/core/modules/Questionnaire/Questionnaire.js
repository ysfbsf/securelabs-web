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
import { Question1 } from './Question1'
import { Question2 } from './Question2'
import { Question3 } from './Question3'
import { Question4 } from './Question4'
import { Question5 } from './Question5'
import { Question6 } from './Question6'
import { Question7 } from './Question7'
import { Question8 } from './Question8'
import { Question9 } from './Question9'
import { Question10 } from './Question10'
import { Question11 } from './Question11'
import { Question12 } from './Question12'

export const Questionnaire = () => {
    const [step, setStep] = useState(1);
    const Step = ({active}) => (
        <div 
            className={cn(styles.CustomStep, {
                [styles.activeStep] : active,
            })}
        ></div>
    );
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
        <Step active={step === 1}/>
        <Step active={step === 2}/>
        <Step active={step === 3}/>
        <Step active={step === 4}/>
        <Step active={step === 5}/>
        <Step active={step === 6}/>
        <Step active={step === 7}/>
        <Step active={step === 8}/>
        <Step active={step === 9}/>
        <Step active={step === 10}/>
        <Step active={step === 11}/>
        <Step active={step === 12}/>
        </div>
        <div className={styles.stepsNmb}> Question {step} </div>
        {step === 1 && <Question1 />}
        {step === 2 && <Question2 />}
        {step === 3 && <Question3 />}
        {step === 4 && <Question4 />}
        {step === 5 && <Question5 />}
        {step === 6 && <Question6 />}
        {step === 7 && <Question7 />}
        {step === 8 && <Question8 />}
        {step === 9 && <Question9 />}
        {step === 10 && <Question10 />}
        {step === 11 && <Question11 />}
        {step === 12 && <Question12 />}
        <div className={styles.suivant}> 
         {step > 1 && <Btn className={styles.btnSuivant} onClick ={()=>{setStep(step-1)}}> Last Question </Btn> } 
         {step < 12 && <Btn className={styles.btnSuivant} onClick ={()=>{setStep(step+1)}}> Next Question </Btn> }
        </div>
    </div>
  )
}
