import React from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'

export const Settings = ({expanded, setExpanded}) => {
  return (
    <DashboardWrapper activeItem={7} expanded={expanded} setExpanded={setExpanded}>
      Settings
    </DashboardWrapper>
  )
}
