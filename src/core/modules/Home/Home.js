import React from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper'

export const Home = ({expanded, setExpanded}) => {
  return (
    <DashboardWrapper activeItem={1} expanded={expanded} setExpanded={setExpanded}>
      Home
    </DashboardWrapper>
  )
}
