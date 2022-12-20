import React from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'

export const Plan = ({expanded, setExpanded}) => {
  return (
    <DashboardWrapper activeItem={4} expanded={expanded} setExpanded={setExpanded}>
      Plan
    </DashboardWrapper>
  )
}
