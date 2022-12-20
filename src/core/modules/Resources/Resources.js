import React from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'

export const Resources = ({expanded, setExpanded}) => {
  return (
    <DashboardWrapper activeItem={5} expanded={expanded} setExpanded={setExpanded}>
      Resources
    </DashboardWrapper>
  )
}
