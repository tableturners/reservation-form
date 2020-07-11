import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  width: 5em;
  margin: 0;
  position: absolute;
  border-bottom: ${props => props.theme.greyColor};
`;

const DropdownHeader = styled.div`
  margin-bottom: 0;
  padding: 1em 2em 1em 1em;
  /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
  /* font-weight: 500; */
  font-size: 1.3rem;
  background: #ffffff;
  border-bottom: 1px solid ${props => props.theme.greyColor};
  /* flex-grow: 4; */
`;

const DropdownOptionsContainer = styled.div``;
const DropdownOptions = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: ${props => props.theme.greyColor};
  /* border: 2px solid #e5e5e5; */
  box-sizing: border-box;
  /* font-size: 1rem; */
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const DropdownItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  text-align: left;
`;

const useDropdown = (label, defaultState, options) => {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultState);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
  const makeDropdown = () => {
    return (
      <DropdownContainer>
        <DropdownHeader onClick={toggle}>{selectedOption}</DropdownHeader>
          {isOpen && (
            <DropdownOptionsContainer>
              <DropdownOptions>
                {options && options.map(option => (
                  <DropdownItem onClick={() => selectOption(option)} >{option}</DropdownItem>                
                ))}
              </DropdownOptions>
            </DropdownOptionsContainer>
          )}
      </DropdownContainer>
    )

 };
 return [selectedOption, makeDropdown, setSelectedOption]
}
export default useDropdown;