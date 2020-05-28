import axios from 'axios';

import { RESTAURANTS } from './actions.type';
import { API_URL } from '../../constants';

export const setRestaurantsData = (restaurants = {}) => ({
  type: RESTAURANTS.SET_DATA,
  payload: restaurants,
});

export const setRestaurantLoading = () => ({
  type: RESTAURANTS.SET_LOADING,
});

export const setRestaurantError = () => ({
  type: RESTAURANTS.SET_ERROR,
});

export const fetchRestaurantsThunk = (city) => (dispatch) => {
  dispatch(setRestaurantLoading());

  return axios
    .get(`${API_URL}${city}`)
    .then((response) => dispatch(setRestaurantsData(response.data.restaurants)))
    .catch((error) => {
      dispatch(setRestaurantError());
    });
};
