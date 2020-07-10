import React, { useContext } from 'react';
import RestaurantContext from '../contexts/RestaurantContext';
import styled from 'styled-components';

const ReservationFormWrapper = styled.section`
  background-color: ${props => props.theme.buttonBackgroundColor};
`

const ReservationForm = () => {
  const { restaurants } = useContext(RestaurantContext);
  
  return (
    <ReservationFormWrapper>
        <h1>Reservation Form</h1>
        <div> 
        {
            restaurants.map((restaurant) => {
                return (
                <li key={restaurant.id}>{restaurant.name}</li>
                )
        })
    }
            
        </div>
    </ReservationFormWrapper>
  )
}

export default ReservationForm;