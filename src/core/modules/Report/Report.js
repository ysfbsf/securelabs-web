import React from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'

export const Report = ({expanded, setExpanded}) => {
  return (
    <DashboardWrapper activeItem={3} expanded={expanded} setExpanded={setExpanded}>
      Report
    </DashboardWrapper>
  )
}
