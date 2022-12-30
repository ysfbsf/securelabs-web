import React from 'react'
import { Btn } from '../../ui/Btn'
import styles from './index.module.scss'
import cn from 'classnames'
import {SvgSprite} from '../../ui/SvgSprite'
import { useToggle } from '../../hooks/useToggle'
import { useInput } from '../../hooks/useInput'

export const Login = () => {
    const {isOpened, toggleIsOpened} = useToggle()
    const email = useInput()
    const password = useInput()

   const handelConnect = ()=>{
    console.log(email.value, password.value)
   }
  return (
    <div className={styles.container}>
        <div className={styles.form}> 
            <div className={styles.logo}>Logo</div>
            <div className={styles.Header}> Login in to<br /> your account</div>

            <div className={styles.loginInputs}>
                <div className={styles.label}>Email</div>
                <input onChange={email.onChange} type={'email'} className={styles.input} placeholder={'Email'}/>
                <div className={styles.label}>Password</div>
                <input onChange={password.onChange} type={isOpened ? 'text' : 'password'} className={styles.input}/>
                {isOpened ? 
                    <SvgSprite className={styles.eyeIcon} spriteID={'eyePasswordHide'} onClick={toggleIsOpened}/>
                :
                    <SvgSprite className={styles.eyeIcon} spriteID={'eyePassword'} onClick={toggleIsOpened}/>
                }
            </div>
            <div className={styles.loginBtn}>
                <Btn onClick={handelConnect} type={'email'} className={cn(styles.btn, styles.btnSubmit)}> Login </Btn>
                <Btn type={'email'} className={cn(styles.btn, styles.btnGoogle)}>
                    <SvgSprite spriteID={'google'} className={styles.googleIcon}/> 
                    <div>Login With Google</div>
                </Btn>
            </div>
            <div className={styles.signUpLink}>D'ont have an acount ? sign Up</div>
        </div>
        <div className={styles.image}> image</div>
    </div>
  )
}
