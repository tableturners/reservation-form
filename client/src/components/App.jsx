import React, { Component } from 'react';
import PartySizeDD from './PartySizeDD.jsx';
import Calendar from './Calendar.jsx';
import TimesDD from './imesDD.jsx/index.js';


const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      times: []

    })
  }

  // componentDidMount() {

  // }

  // async function getRestaurantData() {
  //   try {
  //     const response = await axios.get('/restaurants');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    return (
      <div>
        <div className="make-reservation"> 
        <h3>
          <span>Make a reservation</span>
        </h3>
        </div>

        <div><PartySizeDD partySize={this.state.restaurants.partySize}/></div>
        <div><Calendar/></div>
        <div><TimesDD timeSlots={this.state.restaurant.timeSlots}/></div>

      </div>
    );
  }
}