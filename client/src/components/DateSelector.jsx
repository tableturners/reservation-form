import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';

const DateSelectorWrapper = styled.div`
  display: flex;
  height: 35px;
  width: 288px;
  flex-basis: auto;
`;

const SelectWrapper = styled.div`
width: 200px;
height: 30px;
padding: 5px 24px 5px 30px;
margin-left: 3px;
border-radius: 3px;
border-color: #ffffff;
background-color: white;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 10px;
display: flex;
order: 3;
border: solid 1px;
`;

const DateSelector = ({ dateSelected, onDateClick }) => { 
  const [calendar, setCalendar] = useState(false);
  return (
    <SelectWrapper onClick={(e) => { 
        if (e.target.id !== 'cal') {
            setCalendar(!calendar);
        }}
        }>
      { dateSelected.slice(6, 11) }
      { calendar ? <Calendar id="cal" dateSelected={dateSelected} onDateClick= {onDateClick}/> : null }
    </SelectWrapper>
  );
};

export default DateSelector;