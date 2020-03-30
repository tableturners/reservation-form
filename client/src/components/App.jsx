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
  box-shadow: 0 2px 8px rgba(153,153,153,.4);
  border: 1px solid #e2e2e2;
  border-radius: 1px;
  height: 305px;
  width: 320px;
  background: #ffffff;
  padding-bottom: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  text-align: start;
  float: right;
  position: sticky;
  
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 16px 0px 16px;
  width: 288px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d8d9db;
  /* border-bottom: 1px solid; */

`;
const Box = styled.div`
  padding: 8px 16px 8px 16px;
  margin-bottom:16px;
  display: block;
`; 

const InputBox = styled.div`
padding-top: 8px;
  /* clear: both;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  max-height: 150px; */

`;

const PartyWrapper = styled.div`
  /* display: block;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1; */
  /* width: 100%; */
`;

const DateTimeWrapper = styled.div`
margin-top: 8px;
display: flex;
flex-direction: row;


  /* display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 8px; */
`;
const Label = styled.div`
display: block;
  padding-bottom: 4px;
  font-size: 14px;
  width: 100%;  
`;
const DateWrapper = styled.div`
width: 100%;
  /* display: block;
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1; */

`;

const TimeWrapper = styled.div`
width: 100%;
`;

const ReserveButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  /* box-sizing: border-box; */
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

  // findTable(this.state) {

  // } 

  render() {
    return (
        <AppContainer>
          <Header>
            <Title/>
          </Header>
          <Box>
            <InputBox>
              <PartyWrapper>
                <Label>Party Size
                </Label>
                  <PartySelector onPartySelect={this.onPartySelect}/>

              </PartyWrapper>
              <DateTimeWrapper>
                <DateWrapper>
                <Label>Date
                </Label>
                  <DateSelector dateSelected={this.state.dateSelected} onDateClick={this.onDateClick}/>

                </DateWrapper>
                <TimeWrapper>
                <Label>Time
                </Label>

                <TimeSelector timeSelected={this.state.timeSelected} onTimeSelect={this.onTimeSelect}/>
                </TimeWrapper>

              </DateTimeWrapper>
            </InputBox>
            {/* <ButtonBox>
              <Button/>
            </ButtonBox>
            <BookedBox>              
            </BookedBox> */}
            <ReserveButtonWrapper>
            {/* <TimesList timeSelected={this.state.timeSelected}/> */}
                <Button findTable={this.findTable}/>

            </ReserveButtonWrapper>
          </Box>
        </AppContainer>
    )
  }
}

export default App;