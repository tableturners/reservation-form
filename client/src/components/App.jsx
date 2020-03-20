import React, { Component } from 'react';
import Calendar from './Calendar';
import DropDownList from './DropdownComponent';
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
        <div>
          <DropDownList/>
        </div>
      
        {/* <div style={{margin: '30px', position: 'relative'}}><PartySizeSelectBox/></div>
        <div><Calendar/></div>
        <span><TimeSlotsSelectBox restaurants={this.state.restaurants}/></span>
        <input type="submit" value="Find Table" /> */}

      </div>
    );
  }
}

export default App;