import React, { useContext } from 'react';
import RestaurantContext from '../contexts/RestaurantContext';
import styled from 'styled-components';
import Button from './Button';
import Title from './Title';
import Footer from './Footer';
import TimeSelector from './TimeSelector';
// import DataSelector from './DateSelector';
import PartySelector from './PartySelector';

const ReservationFormWrapper = styled.section`
  height: 50vh;
  width: 50vw;
  box-shadow: 0 2px 8px rgba(153,153,153,.4);
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  justify-content: row;
  align-items: center;
  flex-direction: column;
  font-size: ${props => props.theme.fontSize};
`
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const ReservationForm = () => {
  const { restaurants } = useContext(RestaurantContext);
  
  return (
    <ReservationFormWrapper>
        <Title/>
        <InputBox>
          <TimeSelector />
          <PartySelector />
        </InputBox>
        <Button />
        <Footer />
    </ReservationFormWrapper>
  )
}

export default ReservationForm;