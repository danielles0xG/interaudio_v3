import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css'



// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const myMoment = moment().format();
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer


export const MyCalendar = props => (
    <div>
      <BigCalendar
        localizer={localizer}
         events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )