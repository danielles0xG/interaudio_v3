import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import './Calendar.css'



// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const myMoment = moment().format();
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer


const Calendar = props => (
        <div className='calendar_wrapper'>
        <iframe  src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=danielifg.dev%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FToronto"
              className='main_calendar'>
          </iframe>
</div>      
  )

  export default Calendar;