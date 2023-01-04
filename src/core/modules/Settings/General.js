import React from 'react'
//styles
import styles from './index.module.scss'

// comp
import {SvgSprite} from '../../ui/SvgSprite'

export const General = () => {
  return (
    <div className={styles.general}>
      <div className={styles.headerCard}>General Settings</div>
      <div className={styles.formCard}>
        <div className={styles.inputsLabel}>
          <div className={styles.labelCard}>Company Name</div>
          <input 
              className={styles.inputSetting}
              type='text'
              placeholder='Add company name here…' />
        </div>
        <hr className={styles.lineSettingCard} />
        <div className={styles.inputsLabel}>
          <div className={styles.labelCard}>Company Logo</div>
          <div className={styles.uploadBtnWrapper}>
            <button className={styles.btn}>
                <div>Click to upload image</div>
                <SvgSprite className={styles.imgIcon} spriteID={'imgIcon'}/></button>
            <input type="file" name="myfile" />
          </div>
        </div>
        <hr className={styles.lineSettingCard} />
        <div className={styles.inputsLabel}>
          <div className={styles.labelCard}>Time Zone</div>
          <input 
              className={styles.inputSetting}
              type='text'
              placeholder='(UTC-07:00) Arizona' />
        </div>
        <hr className={styles.lineSettingCard} />
        <div className={styles.inputsLabel}>
          <div className={styles.labelCard}>Currency</div>
          <input 
              className={styles.inputSetting}
              type='text'
              placeholder='$USD - US Dollar' />
        </div>
      </div>
    </div>
  )
}
