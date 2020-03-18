import React, { Component } from 'react';
import PartySizeDD from './PartySizeDD';
import Calendar from './Calendar';
import TimesDD from './TimesDD';
import models from '../models';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    console.log('componentdidmoujnt`')
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    console.log('hit')
    models.reservations.get()
    .then((reservations) => {
      this.setState({
        restaurants: reservations,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="make-reservation"> 
        <h3>
          <span>Make a reservation</span>
        </h3>
        </div>

        <div><PartySizeDD partySize={this.state.restaurants}/></div>
        <div><Calendar/></div>
        <div><TimesDD timeSlots={this.state.restaurants}/></div>

      </div>
    );
  }
}

export default App;