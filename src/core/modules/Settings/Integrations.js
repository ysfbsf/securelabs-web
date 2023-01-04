import React from 'react'
import { SvgSprite } from '../../ui/SvgSprite'
import { ToggleSwitch } from '../../ui/ToggleSwitch'
import styles from './index.module.scss'

export const Integrations = () => {
  return (
    <div className={styles.general}>
      <div className={styles.headerCard}>Integrations</div>
      <div className={styles.formCard}>
        <div className={styles.hederIntegration}>
          status
        </div>
        <div className={styles.socialMediaGroup}>
          <div className={styles.labelAndSvg}>
            <div className={styles.backSvg}>
              <SvgSprite className={styles.imgIcon} spriteID={'imgIcon'}/>
            </div>
            <div className={styles.socialLabelIntegra}>
              <div className={styles.nameSocial}>Gougle Cloud</div>
              <div className={styles.apiKey}>Api Key :</div>
            </div>
          </div>
          <div className={styles.status}> <ToggleSwitch /> </div>
        </div>
        <hr className={styles.userHr}/>
       
        <div className={styles.socialMediaGroup}>
          <div className={styles.labelAndSvg}>
            <div className={styles.backSvg}>
              <SvgSprite className={styles.imgIcon} spriteID={'imgIcon'}/>
            </div>
            <div className={styles.socialLabelIntegra}>
              <div className={styles.nameSocial}>Facebook</div>
              <div className={styles.apiKey}>Api Key :</div>
            </div>
          </div>
          <div className={styles.status}> <ToggleSwitch /> </div>
        </div>
        <hr className={styles.userHr}/>

        <div className={styles.socialMediaGroup}>
          <div className={styles.labelAndSvg}>
            <div className={styles.backSvg}>
              <SvgSprite className={styles.imgIcon} spriteID={'imgIcon'}/>
            </div>
            <div className={styles.socialLabelIntegra}>
              <div className={styles.nameSocial}>Instagram</div>
              <div className={styles.apiKey}>Api Key :</div>
            </div>
          </div>
          <div className={styles.status}> <ToggleSwitch /> </div>
        </div>
        <hr className={styles.userHr}/>

        <div className={styles.socialMediaGroup}>
          <div className={styles.labelAndSvg}>
            <div className={styles.backSvg}>
              <SvgSprite className={styles.imgIcon} spriteID={'imgIcon'}/>
            </div>
            <div className={styles.socialLabelIntegra}>
              <div className={styles.nameSocial}>Slack</div>
              <div className={styles.apiKey}>Api Key :</div>
            </div>
          </div>
          <div className={styles.status}> <ToggleSwitch /> </div>
        </div>
        <hr className={styles.userHr}/>

        <div className={styles.socialMediaGroup}>
          <div className={styles.labelAndSvg}>
            <div className={styles.backSvg}>
              <SvgSprite className={styles.imgIcon} spriteID={'imgIcon'}/>
            </div>
            <div className={styles.socialLabelIntegra}>
              <div className={styles.nameSocial}>Gmail</div>
              <div className={styles.apiKey}>Api Key :</div>
            </div>
          </div>
          <div className={styles.status}> <ToggleSwitch /> </div>
        </div>
        
      </div>
    </div>
  )
}
