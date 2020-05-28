import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';

import { fetchRestaurantsThunk } from '../store/actions/restaurants.actions';
import { setNameFilter } from '../store/actions/filters.actions';
import RestaurantList from '../components/RestaurantList';
import { Column, Container, Input, Label, Row, Submit } from '../GlobalStyle';

const selectRestaurantByName = createSelector(
  (state) => state.allRestaurants.restaurants,
  (state) => state.allFilters.filters,
  (restaurants, filters) =>
    restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(filters.name)
    )
);

const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantByName);
  const isPending = useSelector((state) => state.allRestaurants.isPending);
  const isFailure = useSelector((state) => state.allRestaurants.isFailure);
  const { city } = useParams();
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setNameFilter(name.toLowerCase()));
  };

  useEffect(() => {
    dispatch(fetchRestaurantsThunk(city));
  }, [city, dispatch]);

  if (isPending) {
    return <div>Loading</div>;
  }

  if (isFailure) {
    return <div>Failed</div>;
  }

  return (
    <Container>
      <Row>
        <Column>
          <h1>
            Restaurants in <span>{city}</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <h2>Filters</h2>
            <Label
              htmlFor="name"
              aria-required="true"
              block
              bold
              marginBottomLarge
            >
              Name*
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter a restaurant name"
              type="text"
              value={name}
              onChange={handleChange}
              marginBottomLarge
            />
            <Submit name="submit" type="Submit" block />
          </form>
        </Column>
      </Row>
      <RestaurantList restaurants={restaurants} />
    </Container>
  );
};

export default RestaurantsPage;
