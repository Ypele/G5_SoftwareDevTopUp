import React, { Component } from 'react'
// import BookingItem from './BookingItem'
// import { Icon, Table } from 'semantic-ui-react'
// import * as s from './styles'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import dates from 'react-big-calendar/lib/utils/dates'
import Week from 'react-big-calendar/lib/Week'
import localizer from 'react-big-calendar/lib/localizer'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'
import CustomToolbar from './CustomComponents/Toolbar'
// const initialState ={
//     tableRows:[{bookID:0,name:"0test"},{bookID:1,name:"1test"}]
// }


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
class MyWeek extends Week {
    render() {
        let { date } = this.props;
        let { start, end } = MyWeek.range(date, this.props);

        return (
            <TimeGrid {...this.props} start={start} end={end} eventOffset={15} />
        );
    }
}

class BookingList extends Component {
    render() {
        BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
        //let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
        MyWeek.navigate = (date, action) => {
            switch (action) {
                case BigCalendar.Navigate.PREVIOUS:
                    return dates.add(date, -1, 'week');

                case BigCalendar.Navigate.NEXT:
                    return dates.add(date, 1, 'week')

                default:
                    return date;
            }
        }

        MyWeek.range = (date, { culture }) => {
            let firstOfWeek = localizer.startOfWeek(culture);
            let start = dates.startOf(date, 'week', firstOfWeek);
            let end = dates.endOf(date, 'week', firstOfWeek);

            if (firstOfWeek === 1) {
                end = dates.subtract(end, 0, 'day');
            } else {
                start = dates.add(start, 1, 'day');
                end = dates.subtract(end, -1, 'day');
            }

            return { start, end };
        }
        let components={toolbar:CustomToolbar}
        return (

            <div>
                <BigCalendar events={events} defaultView={'week'} defaultDate={new Date()} components={components}/>
            </div>
        );
    }

}

export default BookingList;