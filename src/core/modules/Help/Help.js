import React from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'

export const Help = ({expanded, setExpanded}) => {
  return (
    <DashboardWrapper activeItem={8} expanded={expanded} setExpanded={setExpanded}>
      Help
    </DashboardWrapper>
  )
}
