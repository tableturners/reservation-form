import React, { useContext } from 'react';
import RestaurantContext from '../contexts/RestaurantContext';

const ReservationForm = () => {
  const { restaurants } = useContext(RestaurantContext);
  
  return (
    <div>
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
    </div>
  )
}

export default ReservationForm;