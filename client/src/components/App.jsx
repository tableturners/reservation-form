import React, { Component } from 'react';
import Calendar from './Calendar';
import models from '../models';
import PartySelector from './PartySelector';
import TimeSelector from './TimeSelector';
import styled from 'styled-components';
import Title from './Title';
import DateSelector from './DateSelector';


const AppContainer = styled.div`
  height: 146px;
  width: 295px;
  margin-top: 32px;
  position: sticky;
  top: 75px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: 'March 20',
      partySelected: null, 
      timeSelected: null,

    };
    this.onDateClick = this.onDateClick.bind(this);
    this.onPartySelect = this.onPartySelect.bind(this);
    this.onTimeSelect = this.onTimeSelect.bind(this);
  }
  onDateClick(date) {
    this.setState({
      dateSelected: date,
    })
  }
  onPartySelect(party) {
    this.setState({
      partySelected: party,
    })
  }
  onTimeSelect(time) {
    this.setState({
      timeSelected: time,
    })
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
      <AppContainer>
        <Title/>
        <PartySelector partySelected={this.state.partySelected} onPartySelect={this.onPartySelect}/>
        <TimeSelector timeSelected={this.state.timeSelected} onTimeSelect={this.onTimeSelect}/>
        {/* <Calendar dateSelected={this.state.dateSelected} onDateClick= {this.onDateClick}/> */}
        <DateSelector dateSelected={this.state.dateSelected} onDateClick={this.onDateClick}/>
      </AppContainer>
    )
  }
}

export default App;