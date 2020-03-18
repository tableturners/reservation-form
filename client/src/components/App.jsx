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
    this.getAllRestaurants();
  }

  getAllRestaurants() {
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

        <div><PartySizeDD/></div>
        <div><Calendar/></div>
        <div><TimesDD/></div>

      </div>
    );
  }
}

export default App;