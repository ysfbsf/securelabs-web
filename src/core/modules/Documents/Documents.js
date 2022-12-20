import React from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'

export const Documents = ({expanded, setExpanded}) => {
  return (
    <DashboardWrapper activeItem={2} expanded={expanded} setExpanded={setExpanded}>
      Documents
    </DashboardWrapper>
  )
}
