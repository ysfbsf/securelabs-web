import React from 'react'
import { ResourcesSidse } from '../../ui/DashboardSide/ResourcesSide'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'
import styles from './index.module.scss'
import cn from 'classnames'
import { SvgSprite } from '../../ui/SvgSprite/SvgSprite'

export const Resources = ({expanded, setExpanded}) => {

  const CompStar = ({n, actives})=>{
    const a = actives
    var elements = [];
    for(let i =0; i < n; i++){
        elements.push(<SvgSprite className={cn(styles.star, {
          [styles.activeStar] : actives-- > 0,
        })} spriteID={'star'} />);
    }
    return (<div className={styles.groupStar}>{elements} <div className={styles.starRank}>{a},0</div></div>);
  }

  return (
    <DashboardWrapper activeItem={5} expanded={expanded} setExpanded={setExpanded}>
      <div className={styles.main}>
        <div className={styles.container}>
          
          <div className={styles.card}>
            <div className={styles.headerCard}>
              <div className={styles.headerText}>Featured Resources</div>
              <div className={styles.select}>See All <SvgSprite spriteID={'arrow'} /></div>
            </div>
            <div className={styles.division}>
              <div className={styles.part}>
                <div className={styles.carre} style={{background:"#884DFF"}}></div>
                <div className={styles.text}>Incident Response</div>
              </div>
              <div className={styles.part}>
                <div className={styles.carre} style={{background:"#00E096"}}></div>
                <div className={styles.text}>DR</div>
              </div>
            </div>
            <div className={styles.division}>
              <div className={styles.part}>
                <div className={styles.carre} style={{background:"#FC5A5A"}}></div>
                <div className={styles.text}>BCP</div>
              </div>
              <div className={styles.part}>
                <div className={styles.carre} style={{background:"#0095FF"}}></div>
                <div className={styles.text}>Privacy Policy</div>
              </div>
            </div>
            <div className={styles.division}>
              <div className={styles.part}>
                <div className={styles.carre} style={{background:"#0095FF"}}></div>
                <div className={styles.text}>DSAR Policy</div>
              </div>
              <div className={styles.part}>
                <div className={styles.carre} style={{background:"#FF3D71"}}></div>
                <div className={styles.text}>BYOD</div>
              </div>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={cn(styles.headerCard, styles.headerWhite)}>
              <div className={styles.headerText}>Policies</div>
              <div className={styles.select}>See All <SvgSprite spriteID={'arrow'} /></div>
            </div>
            <div className={styles.division}>
              <div className={styles.part}>
                <div className={styles.carre}></div>
                <div className={styles.text}>
                  <div>Privacy by Design</div>
                  <CompStar n={5} actives={4}/>
                </div>
              </div>
              <div className={styles.part}>
                <div className={styles.carre}></div>
                <div className={styles.text}>Awareness Training</div>
              </div>
            </div>
            <div className={styles.division}>
              <div className={styles.part}>
                <div className={styles.carre}></div>
                <div className={styles.text}>
                  <div>Data Classification</div>
                  <CompStar n={5} actives={5}/>
                </div>
              </div>
              <div className={styles.part}>
                <div className={styles.carre}></div>
                <div className={styles.text}>
                  <div>Data Classification</div>
                  <CompStar n={5} actives={3}/>
                </div>
              </div>
            </div>
            <div className={styles.division}>
              <div className={styles.part}>
                <div className={styles.carre}></div>
                <div className={styles.text}>Privacy Metrics</div>
              </div>
              <div className={styles.part}>
                <div className={styles.carre}></div>
                <div className={styles.text}>Lock Computer</div>
              </div>
            </div>
          </div>
        </div>
        <ResourcesSidse />
      </div>
    </DashboardWrapper>
  )
}
