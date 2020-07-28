import React, { useState } from 'react';

import { RestaurantProvider } from '../contexts/RestaurantContext';
import ReservationForm from './ReservationForm';
import { ThemeProvider } from 'styled-components';
  
import styled from 'styled-components';
import * as theme from '../theme/theme';

const App = () => {
  const [restaurants, setRestaurants] = useState([
   {name: 'One', id: 1},
   {name: 'Two', id: 2},
   {name: 'Three', id: 3},
    
  ]);
  
  const [reservations, setReservations] = useState([
    {
      id: 1, 
      restaurantID: 1, 
      info: {
        name: 'John Doe',
        party: 4,
        date: "Fri Oct 16 2020 06:02:46 GMT-0700 (Pacific Daylight Time)"
      } 
    },
    {
      id: 2, 
      restaurantID: 2, 
      info: {
        name: 'Mary Smith',
        party: 8,
        date: "Sat Oct 17 2020 06:02:46 GMT-0700 (Pacific Daylight Time)"
      } 
    },
    {
      id: 3, 
      restaurantID: 3, 
      info: {
        name: 'Clint Doe',
        party: 3,
        date: "Sun Oct 18 2020 06:02:46 GMT-0700 (Pacific Daylight Time)"
      } 
    },
  ])

  const [party, setParty] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  

  return (
    <RestaurantProvider value={{ restaurants, reservations, setParty, setDate, setTime }}>
      <ThemeProvider theme={theme}>
        <ReservationForm />
      </ThemeProvider>
    </RestaurantProvider>
  )
}

export default App;