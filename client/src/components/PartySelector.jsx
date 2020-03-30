import React, { useEffect } from 'react';
import useDropdown from './Hooks/useDropDown';
import styled from 'styled-components';
import useToggle from './Hooks/useToggle';


const partysizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const StyledButton = styled.div`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #d8d9db;
  &:hover {
    border-bottom: solid 2px #bf1722;
  };
  height: 30px;
  background-color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: left;
`;
const PartySelector = (props) => {
  // const [openMenu, setOpenMenu] = useToggle(false);
  const [partysize, PartyDropdown] = useDropdown('Party Size', '', partysizes);
  useEffect(() => {
    props.onPartySelect(partysize)
  }, [partysize])
  return (
    <div>
      <PartyDropdown /> 
    </div> 
  );
//   return (
//     <PartyDropdown />    
// )
}

export default PartySelector;