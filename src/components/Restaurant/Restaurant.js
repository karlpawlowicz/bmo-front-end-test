import React from 'react';

import { ListItem, ListItemContent } from './RestaurantStyle';

const renderPrice = (price) => {
  let dollarSigns = '';

  for (let i = 0; i < price; i++) {
    dollarSigns += '$';
  }

  return dollarSigns;
};

const Restaurant = ({ restaurant }) => {
  return (
    <ListItem flex>
      <ListItemContent>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.address}</p>
        <p>{renderPrice(restaurant.price)}</p>
      </ListItemContent>
    </ListItem>
  );
};

export default Restaurant;
