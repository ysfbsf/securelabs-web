import React, { useState } from "react";
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import { Link } from "react-router-dom";
import { SvgSprite } from "../SvgSprite/SvgSprite";

export const Sidebar = ({activeItem, expanded}) => {
  
  let menuItems = [
    {
      id:1,
      name: "Home",
      iconName: "customize",
      type: "solid",
      to: '/home',
    },
    {
      id:2,
      name: "Processes/ Documents",
      iconName: "envelope",
      type: "solid",
      to: '/documents',
    },
    {
      id:3,
      name: "Incident Report",
      iconName: "report",
      type: "solid",
      to: '/report',
    },
    {
      id:4,
      name: "Emergency Plan",
      iconName: "male",
      type: "solid",
      to: '/plan',
    },
    {
      id:5,
      name: "Resources",
      iconName: "messenger",
      type: "logo",
      to: '/resources',
    },
    {
      id:6,
      name: "Calendar",
      iconName: "calendar",
      type: "solid",
      to: '/calendar',
    },
    {
      id:7,
      name: "Settings",
      iconName: "cog",
      type: "solid",
      to: '/settings',
    },
    {
      id:8,
      name: "Help",
      iconName: "help-circle",
      type: "solid",
      to: '/help',
    },
  ];

  const [active] = useState(activeItem);
  
  return (
    <div className={cn(styles.sidebar,{
      [styles.expanded] : expanded,
    })}>
      {menuItems.map((item, index) => {
        return (
          <Link
            to={item.to}
            className={cn(styles.boxicon, styles.boxiconContainer, {
              [styles.expandedBoxiconContainer] : expanded,
              [styles.active] : active === item.id,

            })}
            key={index}
          >
            <div>
              <SvgSprite className={cn(styles.svgIcons,{
                [styles.activeSvg] : active === item.id,
                [styles.hideSvg] : !expanded,
              })} spriteID={item.iconName} />
              <div
                className={cn(styles.description, { 
                [styles.showDescription] : expanded,
                [styles.hideDescription] : !expanded,
                [styles.activeDescription] : active === item.id,
              })}
              >
                {item.name}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};