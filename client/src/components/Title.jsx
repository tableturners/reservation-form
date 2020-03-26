import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 10px;
  color: #333333; 
  // height: 47px;
  // width: 288px;
  display: flex;
  justify-content: space-evenly;
`;

const HeaderWrapper = styled.h2`
  height: 24px;
  width: 288 px;
  font-size: 15px;
`;

const Title = () => (
  <TitleWrapper>
    <HeaderWrapper >Make a Reservation</HeaderWrapper>
  </TitleWrapper>
);

export default Title;