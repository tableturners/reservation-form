import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  /* height: 20%; */
  margin: 0;
  padding: 0rem 5.6rem;
  font-size: 2rem;
  font-family: ${props => props.theme.font};
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.greyColor};
`;

const Title = () => (
  <TitleWrapper>
    <span>Make a Reservation</span>
  </TitleWrapper>
);

export default Title;