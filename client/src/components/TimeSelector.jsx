import React, { useState, useEffect } from 'react';
import StyledArrow from '../theme/icons';
import styled from 'styled-components';

const times = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];

const TimeContainer = styled.div`
  width: 200px;
  padding: 1rem;
`;

const TimeHeader = styled.button`
  height: 35px;
  width: 100%;
  border: none;
  background: none;
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

const TimeOptionsContainer = styled.div``;

const TimeOptions = styled.ul`
cursor: pointer;
  padding-left: 1em;
  background: ${props => props.theme.greyColor};
  ;
  &:first-child {
    padding-top: 0.8em;
  }
  font-size: .875rem;
  line-height: 1.15;
`;

const TimeItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  text-align: left;
`;

const TimeSelector = () => {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const options = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];

  const toggle = () => setIsOpen(!isOpen);
  
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
  return (
      <TimeContainer>
        <div>Time</div>
        <TimeHeader onClick={toggle}>{selectedOption}
          <StyledArrow />
        </TimeHeader>
          {isOpen && (
            <TimeOptionsContainer>
              <TimeOptions>
                {options && options.map(option => (
                  <TimeItem onClick={() => selectOption(option)} >{option}</TimeItem>                
                  ))}
              </TimeOptions>
            </TimeOptionsContainer>
          )}
      </TimeContainer>
    )
 };

export default TimeSelector;