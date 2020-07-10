import React, { useState } from 'react';

import { RestaurantProvider } from '../contexts/RestaurantContext';
import ReservationForm from './ReservationForm';

import styled from 'styled-components';

const App = () => {
  const [restaurants, setRestaurants] = useState([
   {name: 'One', id: 1},
   {name: 'Two', id: 2},
   {name: 'Three', id: 3},
    
  ]);

  return (
    <RestaurantProvider value={{ restaurants }}>
      <ReservationForm />
    </RestaurantProvider>
  )
}

export default App;