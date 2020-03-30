import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-size: 21px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol;
`;

const Title = () => (
  <TitleWrapper>
    Make a Reservation
  </TitleWrapper>
);

export default Title;