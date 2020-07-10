import React, { useContext } from 'react';
import RestaurantContext from '../contexts/RestaurantContext';

const ReservationForm = () => {
  const { restaurants } = useContext(RestaurantContext);
  
  return (
    <h1>Reservation Form</h1>
  )
}

export default ReservationForm;