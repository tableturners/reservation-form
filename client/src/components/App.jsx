import React, { Component } from 'react';
import PartySizeSelectBox from './PartySizeSelectBox';
import Calendar from './Calendar';
import TimeSlotsSelectBox from './TimeSlotsSelectBox';
import models from '../models';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    this.getRestaurant(Math.floor(Math.random() * 100));
  }

  getRestaurant(id) {
    models.reservations.get(id)
    .then((restaurants) => {
      console.log('resos', restaurants)
      this.setState({
        restaurants,
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

        <div><PartySizeSelectBox/></div>
        <div><Calendar/></div>
        <div><TimeSlotsSelectBox restaurants={this.state.restaurants}/></div>

      </div>
    );
  }
}

export default App;