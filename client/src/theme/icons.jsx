import react from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown } from '@styled-icons/material-rounded/KeyboardArrowDown';
import { ChevronLeft } from '@styled-icons/boxicons-solid/ChevronLeft';
import { ChevronRight } from '@styled-icons/boxicons-solid/ChevronRight';

const StyledArrow = styled(KeyboardArrowDown)`
  width: 1em;
  margin-right: 0;
  float: right;
`;

export default StyledArrow;


const StyledChevronLeft = styled(ChevronLeft)`
  color: black;
  height: 16px;
  display: flex;
  flex-direction: end;
  &:hover {
      border: solid 1px red;
  }
  border-radius: 50%;
  /* flex-grow: 1; */
`;

const StyledChevronRight = styled(ChevronRight)`
  color: black;
  height: 16px;
  display: flex;
  flex-direction: left;
  &:hover {
      border: solid 1px red;
  }
  border-radius: 50%;
  /* flex-grow: 1; */

`;