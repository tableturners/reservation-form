import React, { useContext } from 'react';
import RestaurantContext from '../contexts/RestaurantContext';
import styled from 'styled-components';
import Button from './Button';
import Title from './Title';
import Footer from './Footer';
import TimeSelector from './TimeSelector';
// import DataSelector from './DateSelector';
import PartySelector from './PartySelector';
import DateSelector from './DateSelector';

const ReservationFormWrapper = styled.div`
  height: 50vh;
  width: 50vw;
  box-shadow: 0 2px 8px rgba(153,153,153,.4);
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  justify-content: row;
  align-items: center;
  flex-direction: column;
  font-size: ${props => props.theme.fontSize};
  /* @media only screen and (max-width: 768px) {
    width: 100%;
  } */
`
const TitleWrapper = styled.div`
  /* padding: 1rem; */
  margin: 0;
  padding: 0rem 5.6rem;
  font-size: 2rem;
  font-family: ${props => props.theme.font};
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.greyColor};

`;
const InputBox = styled.div`
  margin-bottom: 4rem;
`;

const InputBoxWrapper = styled.div`
 display: flex;
 flex-direction: column;
`;
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;

const FooterContainer = styled.div`
  padding: 1rem;

`;
const ReservationForm = () => {
  const { restaurants } = useContext(RestaurantContext);
  
  return (
    <ReservationFormWrapper>
      <TitleWrapper>
        <Title/>
      </TitleWrapper>
      <InputBoxWrapper>
        <InputBox>
          <TimeSelector />
          <PartySelector />
          <DateSelector />
        </InputBox>
      </InputBoxWrapper>
      <FooterWrapper>
        <Button />
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterWrapper>
    </ReservationFormWrapper>
  )
}

export default ReservationForm;