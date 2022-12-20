import React from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'

export const Calendar = ({expanded, setExpanded}) => {
  return (
    <DashboardWrapper activeItem={6} expanded={expanded} setExpanded={setExpanded}>
      Calendar
    </DashboardWrapper>
  )
}
