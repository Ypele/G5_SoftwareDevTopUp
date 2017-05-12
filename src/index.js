import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom'
import LoginContainer from './Login/LoginContainer'
import BookingList from './Booking/BookingList'


ReactDOM.render(
  <BrowserRouter>
  <div>
 <Route exact path="/" component={App}/>
 <Route path="/login" component={LoginContainer}/>
 <Route path="/bookings" component={BookingList}/>
 </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
