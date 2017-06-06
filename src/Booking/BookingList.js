import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import CustomToolbar from './CustomComponents/Toolbar'

//example on how to add events
var events = [
    {
        'title': 'Nea`Costica',
        'start': new Date(2017, 4, 30, 13, 0, 0),
        "end": new Date(2017, 4, 30, 14, 50, 0),
    },
    {
        'title': 'George Duru`',
        'start': new Date(2017, 4, 30, 2, 15, 0),
        "end": new Date(2017, 4, 30, 6, 0, 0),
    },
    {
        'title': 'Razvan Dan Bolovan',
        'start': new Date(2017, 4, 31, 0, 0, 0),
        "end": new Date(2017, 4, 31, 2, 0, 0),
    }
]

class BookingList extends Component {
    render() {
        BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
        
        let components={toolbar:CustomToolbar}

        return (

            <div>
                <BigCalendar 
                events={events}
                selectable={true} 
                defaultView={'week'} 
                defaultDate={new Date()} 
                components={components}
                onSelectSlot={(slotInfo)=> alert(slotInfo.start)}/>
            </div>
        );
    }

}

export default BookingList;