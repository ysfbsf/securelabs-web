import React from "react";
import { SvgSprite } from "../../ui/SvgSprite/SvgSprite";
import styles from './index.module.scss'
import cn from "classnames";

export const  RBCToolbar = (props) => {
  const { label, date,view, views, onView, onNavigate } = props;

  const goToView = (view) => {
    onView(view);
  };

  const goToBack = () => {
    onNavigate("PREV");
  };
  const goToNext = () => {
    onNavigate("NEXT");
  };

  const goToToday = () => {
    onNavigate("TODAY");
  };

  return (
    <div className={styles.topCalendar}>
        <div className={styles.calendarHeader}>{new Date(date).getFullYear()}</div>
        <div className="rbc-toolbar">
            <div className={"rbc-btn-group"}>
                <button className={styles.removeBorder} onClick={goToToday}>Today</button>
            </div>
            <div className={cn("rbc-toolbar-label", styles.label)}>
                    <SvgSprite onClick={goToBack} spriteID={'arrow'} className={styles.backSvg}/>
                    <span className={styles.dateLabel}>{label}</span>
                    <SvgSprite onClick={goToNext} spriteID={'arrow'} className={styles.nextSvg}/>
            </div>
            <div className="rbc-btn-group">
                {views?.map((item) =>item !== 'agenda' && (
                <button
                    onClick={() => goToView(item)}
                    key={item}
                    className={cn(styles.removeBorder,{ "rbc-active": view === item })} 
                >
                    {item}
                </button>
                ))}
            </div>
        </div>
    </div>
  );
}