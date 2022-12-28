import React, { useCallback, useState } from 'react'
import { DashboardWrapper } from '../../ui/DashboardWrapper/DashboardWrapper'
import { Calendar as MyCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Popup} from '../../ui/Popup'
import { AddEventComponent } from './AddEventComponent';
import styles from './index.module.scss'
import {DataTableComponent} from '../../ui/DataTable'
import { RBCToolbar } from './RBCToolbar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.scss"

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(MyCalendar)
export const Calendar = ({expanded, setExpanded}) => {
  const [events, setEvents] = useState([])
  const [addEventPopup, setAddEventPopup] = useState()
  const [newEvent, setNewEvent] = useState()

  const eventStyleGetter = (e, start, end, isSelected)=> {
    var backgroundColor = e.color;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '4px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block',
        padding : '5px',
    };
    return {
        style: style
    };
  }

  const moveEvent = useCallback(
    ({
      event,
      start,
      end,
      resourceId,
      isAllDay: droppedOnAllDaySlot = false,
    }) => {
      const { allDay } = event
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true
      }

      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end, resourceId, allDay }]
      })
    },
    [setEvents]
  )

const resizeEvent = useCallback(
  ({ event, start, end }) => {
    setEvents((prev) => {
      const existing = prev.find((ev) => ev.id === event.id) ?? {}
      const filtered = prev.filter((ev) => ev.id !== event.id)
      return [...filtered, { ...existing, start, end }]
    })
  },
  [setEvents]
)

  return (
    <DashboardWrapper activeItem={6} expanded={expanded} setExpanded={setExpanded}>
      <DragAndDropCalendar
        defaultView="month"
        events={events}
        localizer={localizer}
        onSelectEvent={function noRefCheck(e){console.log(e,'test')}}
        onSelectSlot={(e)=>{setAddEventPopup(true); setNewEvent(e)}}
        eventPropGetter={(e)=>eventStyleGetter(e)}
        selectable
        resizable
        style={{height: 800, width: '90%', margin: 'auto', backgroundColor : "#fff", marginTop: "20px", borderRadius: "10px"}}
        components={{toolbar: RBCToolbar}}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
      />
      {
        events.length > 0 && (
          <div className={styles.listeEvents}>
            <div className={styles.titreTable}> Events Liste </div>
            <DataTableComponent data={events} events/>
          </div>
        )
      }
      
      {addEventPopup && 
        <Popup big={true} isOpenedPopup={addEventPopup} closePopup={() => setAddEventPopup(false)}>
          <AddEventComponent
            closePopup={() => setAddEventPopup(false)} 
            title = {'Add Event'}
            newEvent={newEvent}
            setEvents={setEvents}
            events={events}
          />
        </Popup>
      }
    </DashboardWrapper>
  )
}
