import React, { useEffect } from 'react';
import useDropdown from './Hooks/useDropDown';
import styled from 'styled-components';

const PartySelectorWrapper = styled.div`


`;

const partysizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const PartySelector = (props) => {
  const [partysize, PartyDropdown] = useDropdown('Party Size', '', partysizes);
  useEffect(() => {
    console.log('here', partysize)
    props.onPartySelect(partysize)
  }, [partysize])
  return (
    <PartyDropdown />    
)
}

export default PartySelector;