import React, { Component } from 'react';
import Calendar from './Calendar';
import models from '../models';
import PartySelector from './PartySelector';
import TimeSelector from './TimeSelector';
import styled from 'styled-components';
import Title from './Title';
import DateSelector from './DateSelector';
import Button from './Button.jsx';
import TimesList from './TimesList';

const AppContainer = styled.div`
  display: flex;
  height: 227px;
  width: 288px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  align-content: space-around;
  margin-top: 32px;
  position: sticky;
  top: 75px;
  background: white;
  box-shadow: none;
`;

const Box2 = styled.div`
  margin: 0;
  padding: 0;
  // flex-direction: row;

`; 

const A = styled.div`
  //display : block;
  width: 200px;
`;

  // const Button = styled.button`
  //   font-family: sans-serif;
  //   font-size: 1rem;
  //   border: none;
  //   border-radius: 5px;
  //   padding: 7px  10px;
  //   background: red;
  //   color: #fff;
  //   &:hover {
  //     background: green;
  //   }
  // `;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '',
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
          <A>
          <PartySelector partySelected={this.state.partySelected} onPartySelect={this.onPartySelect}/>
          </A>
          <Box2>
            <TimeSelector timeSelected={this.state.timeSelected} onTimeSelect={this.onTimeSelect}/>
            <DateSelector dateSelected={this.state.dateSelected} onDateClick={this.onDateClick}/>
          </Box2>
          <Button/>
        </AppContainer>
    )
  }
}

export default App;