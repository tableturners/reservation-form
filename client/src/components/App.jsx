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

  return (
    <RestaurantProvider value={{ restaurants }}>
      <ThemeProvider theme={theme}>
        <ReservationForm />
      </ThemeProvider>
    </RestaurantProvider>
  )
}

export default App;