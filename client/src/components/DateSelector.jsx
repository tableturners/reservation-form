import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import StyledArrow from '../theme/icons';

const DateContainer = styled.div`
  width: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  margin-left: .5rem;
  position: relative;
`;

const DateHeader = styled.button`
  height: 35px;
  width: 100%;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.greyColor}; 
  font-size: .875rem;
  &:focus {
    outline: none;
  }
  &:hover {
    border-bottom: 1px solid ${props => props.theme.buttonBackgroundColor};
  }
  
`;


const DateSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
  const toggle = () => setIsOpen(!isOpen);

  return (
    <DateContainer>
      <a>Date</a>
      <DateHeader onClick={toggle}>
        {selectedOption}
        <StyledArrow />
      </DateHeader>
      { isOpen && (
        // <CalendarContainer>
          <Calendar selectOption={selectOption}/>
        // </CalendarContainer>
        )  
      }
    </DateContainer> 
  );
};

export default DateSelector;