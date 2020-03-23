import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 10px;
  color: #333333;
`;

const HeaderWrapper = styled.h2`
  margin-top: 7px;
  margin-bottom: 10px;
  font-size: 15px;
`;

const Title = () => (
  <TitleWrapper>
    <HeaderWrapper >Make a Reservation</HeaderWrapper>
  </TitleWrapper>
);

export default Title;