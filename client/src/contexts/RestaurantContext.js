import React, { createContext } from 'react';

const RestaurantContext = createContext();

export const RestaurantProvider = RestaurantContext.Provider;
export const RestaurantConsumer = RestaurantContext.Consumer;

export default RestaurantContext;