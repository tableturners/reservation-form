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
  display: block;
  height: 50vh;
  width: 50vw;
  max-width: 718px;
  padding: 1rem 1rem;
  box-shadow: 0 2px 8px rgba(153,153,153,.4);
  background-color: ${props => props.theme.whiteColor};
  font-size: ${props => props.theme.fontSize};
`
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0 1rem;
  font-size: 1.5rem;
  font-family: ${props => props.theme.font};
  font-weight: 600;
  /* margin-bottom: 1rem; */
  border-bottom: 1px solid ${props => props.theme.greyColor};
  position: relative;
`;

const InputBoxWrapper = styled.div`
  display: block;
  padding: .5rem 1rem 1rem;

`;

const InputBox = styled.div`
  transition: max-height .4s ease 0s;
  max-height: 500px;
  overflow: hidden;
  padding-top: 1rem;
  /* margin-bottom: 4rem; */
`;


const PartySelectorWrapper = styled.div`
  /* display: flex; */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;

`;

const DateAndTimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
`;
const FooterWrapper = styled.div`
  margin: 1rem auto 0;
  display: block;
  position: absolute;
  flex-direction: column;
  justify-content: center;

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
          <PartySelectorWrapper>
            <PartySelector />
          </PartySelectorWrapper>
          <DateAndTimeWrapper>
            <TimeSelector />
            <DateSelector />
          </DateAndTimeWrapper>
        </InputBox>
        <FooterWrapper>
          <Button />
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </FooterWrapper>
      </InputBoxWrapper>
    </ReservationFormWrapper>
  )
}

export default ReservationForm;