import React, { Component } from 'react';
// import BookingItem from './BookingItem'
// import { Icon, Table } from 'semantic-ui-react'
// import * as s from './styles'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
// const initialState ={
//     tableRows:[{bookID:0,name:"0test"},{bookID:1,name:"1test"}]
// }


//example on how to add events
var events=[
  {
      'title': 'Nea`Costica',
      'start':new Date(2017,4,30,13,0,0),
      "end":new Date(2017,4,30,14,50,0),
  },
    {
      'title': 'George Duru`',
      'start':new Date(2017,4,30,2,15,0),
      "end":new Date(2017,4,30,6,0,0),
  },
{
      'title': 'Razvan Dan Bolovan',
      'start':new Date(2017,4,31,0,0,0),
      "end":new Date(2017,4,31,2,0,0),
  }
]

class BookingList extends Component {
    render() {
        console.log(this.props)
            BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
            let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
        return (
        
            <div>

                <BigCalendar events={events} views={allViews}  defaultDate={new Date()}/>
            </div>
        );
    }

}

export default BookingList;