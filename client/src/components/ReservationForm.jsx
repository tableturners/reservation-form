import React, { useContext } from 'react';
import RestaurantContext from '../contexts/RestaurantContext';
import styled from 'styled-components';
import Button from './Button';
import Title from './Title';
import Footer from './Footer';

const ReservationFormWrapper = styled.section`
  height: 50vh;
  width: 50vw;
  box-shadow: 0 2px 8px rgba(153,153,153,.4);
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  justify-content: row;
  align-items: center;
  flex-direction: column;
`
const InputBox = styled.section`
  height: 2em;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`

const ReservationForm = () => {
  const { restaurants } = useContext(RestaurantContext);
  
  return (
    <ReservationFormWrapper>
        <Title/>
        <InputBox>
          <div>Box1</div>
          <div>Box2</div>
          <div>Box3</div>
        </InputBox>
        <Button/>
        <Footer/>
    </ReservationFormWrapper>
  )
}

export default ReservationForm;