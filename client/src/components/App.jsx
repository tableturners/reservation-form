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
  display: block;
  height: 227px;
  font-family: sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-size-adjust: 100%;
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
  box-shadow: 0 2px 8px rgba(153,153,153,.4);
  color: -internal-root-color;
  
`;

const Box = styled.div`
  padding: 8px 16px 16px 16px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #fff;
  margin-bottom: 16px;
  display: block;
`; 

const InputBox = styled.div`
  clear: both;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  max-height: 150px;

`;

const PartyWrapper = styled.div`
  display: block;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
`;

const DateTimeWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 8px;
`;

const DateWrapper = styled.div`
  display: block;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;

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
          <Box>
            <InputBox>
              <PartyWrapper>
                <PartySelector partySelected={this.state.partySelected} onPartySelect={this.onPartySelect}/>
              </PartyWrapper>
              <DateTimeWrapper>
                <DateSelector dateSelected={this.state.dateSelected} onDateClick={this.onDateClick}/>
                <TimeSelector timeSelected={this.state.timeSelected} onTimeSelect={this.onTimeSelect}/>
              </DateTimeWrapper>
            </InputBox>
            {/* <ButtonBox>
              <Button/>
            </ButtonBox>
            <BookedBox>              
            </BookedBox> */}
          </Box>
        </AppContainer>
    )
  }
}

export default App;