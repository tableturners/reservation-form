import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import StyledArrow from '../theme/icons';

const times = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];

const DropdownContainer = styled.div`
  width: 200px;
  padding: .5rem;
`;

const DropdownHeader = styled.button`
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

const DropdownOptionsContainer = styled.div`
  /* width: 100%; */

`;
const DropdownOptions = styled.ul`
  font-size: .875rem;

  padding-left: 1em;
  background: ${props => props.theme.greyColor};
  &:first-child {
    padding-top: 0.8em;
  }
  cursor: pointer;
`;

const DropdownItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  text-align: left;
`;

const PartySelector = () => {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const toggle = () => setIsOpen(!isOpen);
  
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
  return (
      <DropdownContainer>
        <a>Party</a>
        <div>
          <DropdownHeader onClick={toggle}>{selectedOption}
            <StyledArrow />
          </DropdownHeader>

          {isOpen && (
            <DropdownOptionsContainer>
              <DropdownOptions>
                {options && options.map(option => (
                  <DropdownItem onClick={() => selectOption(option)} >{option}</DropdownItem>                
                ))}
              </DropdownOptions>
            </DropdownOptionsContainer>
          )}
        </div>
      </DropdownContainer>
    )
 };

export default PartySelector;

