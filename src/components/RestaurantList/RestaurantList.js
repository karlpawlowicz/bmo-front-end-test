import React from 'react';

import Restaurant from '../Restaurant';
import { List } from './RestaurantListStyle';

const RestaurantList = ({ restaurants }) => {
  return (
    <List flex flexWrap>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.name} restaurant={restaurant} />
      ))}
    </List>
  );
};

export default RestaurantList;
