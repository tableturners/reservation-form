import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  background-color: #fff;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: flex;
  flex-direction: column;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 48px;
  justify-content: flex-end;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: center;
  text-size-adjust: 100%;  
`;

const HeaderWrapper = styled.h3`
  border-bottom: 1px solid #d8d9db;
  height: 48px;
  font-size: 21px;
  font-weight: 700;
  line-height: 24px;
`;

const Title = () => (
  <TitleWrapper>
    <HeaderWrapper >Make a Reservation</HeaderWrapper>
  </TitleWrapper>
);

export default Title;