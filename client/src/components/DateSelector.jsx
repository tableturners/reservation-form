import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import useToggle from './Hooks/useToggle';

// const DateSelectorWrapper = styled.div`
//   display: flex;
//   height: 35px;
//   width: 288px;
//   flex-basis: auto;
// `;

const SelectWrapper = styled.button`
width: 100%;
height: 30px;
padding: 5px 24px 5px 30px;
margin-left: 3px;
border-radius: 3px;
border-color: #ffffff;
background-color: white;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 10px;
display: flex;
justify-content: left;
border: solid 1px lightgrey;
`;

const DateSelector = ({ dateSelected, onDateClick }) => { 
  const [openCalendar, setOpenCalendar] = useToggle(false);
  return (
    <div>
      <SelectWrapper onClick={setOpenCalendar}>Button
      </SelectWrapper>
      { openCalendar && <Calendar/> }
    </div> 
  );
};

export default DateSelector;