import React, { useRef, useState } from 'react'
import styles from './index.module.scss'
import {Btn} from '../../ui/Btn'
import {SvgSprite} from '../../ui/SvgSprite'
import { Actions } from '../../ui/Actions/Actions'
import cn from 'classnames'

export const User = () => {
  const [activeItem, setActiveItem] = useState()
  const [modifyUser, setModifyUser] = useState(false)
  const [showData, setShowData] = useState(true)
  const [activityLog, setActivityLog] = useState(false)

  const data = [
    {
      id: 1,
      firstName: 'hamza',
      lastName: 'Maarouf',
      email: 'test@test',
      phone: '0000000000',
      role: 'Compliance Manager',
      status: 'Internal',
      action: <SvgSprite className={styles.svgMore} spriteID={'more'} />
    },
    {
      id: 2,
      firstName: 'dodo',
      lastName: 'dol',
      email: 'dodod@tfajest',
      phone: '0000000000',
      role: 'Compliance Manager',
      status: 'Internal',
      action: <SvgSprite className={styles.svgMore} spriteID={'more'} />
    },
    {
      id: 3,
      firstName: 'golan',
      lastName: 'malik',
      email: 'gol@malik',
      phone: '0000000000',
      role: 'Compliance Manager',
      status: 'external',
      action: <SvgSprite className={styles.svgMore} spriteID={'more'} />
    },
  ]

  const actions = useRef([
    {
        id: 1,
        text: 'Modify User',
        onClick: () => {setModifyUser(true); setShowData(false); setActivityLog(false)},
    },
    {
        id: 2,
        text: 'Activity Log',
        onClick: () => {setModifyUser(false); setShowData(false); setActivityLog(true)},
    },
  ])


  const activity = [
    {
      id:1,
      controle: 'blalalal',
      activity: 'hjglgbkjhbkljhknm!:',
      lastUpdated: 'lkigblgbl'
    },
    {
      id:2,
      controle: 'blalalal',
      activity: 'hjglgbkjhbkljhknm!:',
      lastUpdated: 'lkigblgbl'
    },
    {
      id:3,
      controle: 'blalalal',
      activity: 'hjglgbkjhbkljhknm!:',
      lastUpdated: 'lkigblgbl'
    },
  ]

  return (
    <div className={styles.general}>
      <div className={styles.headerCard}>
        {modifyUser && 'Modify User'}
        {activityLog && 'User Activity'}
        {showData && 'Users'}</div>
      <div className={cn(styles.formCard,{
        [styles.meginButton] : modifyUser
      })}>
        
        {!activityLog &&
          <div className={styles.addUser}>
            <Btn className={cn(styles.addBtnUser,{
              [styles.modifyUserBtn] : modifyUser,
            })}>{modifyUser ? 'Delete User' : 'Add User'}</Btn>
           </div>
        }
         

        {showData && 
          <table className={styles.tableSettingUser}>
            <thead>
              <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th className={styles.tdOption}>Options</th>
              </tr>
            </thead>
            {data.map(user=>(
              <tbody key={user.id}>
                <tr>
                <td>{user.firstName+' '+user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className={styles.tdOption}>
                    <Actions 
                      actions={actions.current}  
                      setActiveItem={setActiveItem}
                      header={false}
                      className
                      activeData={user}
                    />
                </td>
                </tr>
              </tbody>
            ))}
          </table>
        }

        {modifyUser && activeItem &&
          <div className={styles.dataUser}>
            <div className={styles.headerDataUser}>User</div>
            <hr className={styles.userHr}/>
            <div className={styles.dataUserDetail}>
              <div className={styles.labelDataUser}>First Name :</div>
              <div className={styles.detailUser}> {activeItem.firstName} </div>
            </div>
            <div className={styles.dataUserDetail}>
              <div className={styles.labelDataUser}>Last Name :</div>
              <div className={styles.detailUser}> {activeItem.lastName} </div>
            </div>
            <div className={styles.dataUserDetail}>
              <div className={styles.labelDataUser}>Email :</div>
              <div className={styles.detailUser}> {activeItem.email} </div>
            </div>
            <div className={styles.dataUserDetail}>
              <div className={styles.labelDataUser}>Phone :</div>
              <div className={styles.detailUser}> {activeItem.phone} </div>
            </div>
            <div className={styles.dataUserDetail}>
              <div className={styles.labelDataUser}>Role :</div>
              <div className={styles.detailUser}> {activeItem.role} </div>
            </div>
            <div className={styles.dataUserDetail}>
              <div className={styles.labelDataUser}>Status :</div>
              <div className={styles.detailUser}> {activeItem.status} </div>
            </div>
            <div className={styles.addUser}>
              <Btn className={styles.addBtnUser}>Save</Btn>
            </div>
          </div>
        }

        {activityLog &&
          <div>
            <div className={styles.headerDataUserActivity}>User : {activeItem.firstName+' '+activeItem.lastName}</div>
            <table className={styles.tableSettingUserActivity}>
            <thead className={styles.trHeader}>
              <tr>
                <th>Controle</th>
                <th>Activity</th>
                <th className={styles.updateStyle}>Last Update</th>
              </tr>
            </thead>
            {activity.map( a => (
              <tbody key={a.id}>
                <tr>
                  <td>{a.controle}</td>
                  <td>{a.activity}</td>
                  <td className={styles.updateStyle}>{a.lastUpdated}</td>
                </tr>
              </tbody>
            ))}
          </table>
          </div>
        }
      </div>
    </div>
  )
}
