import rootReducer, { restaurantsReducer } from './index';
import {
  setRestaurantsData,
  setRestaurantLoading,
  setRestaurantError,
} from '../actions/restaurants.actions.js';

const DEFAULT_STATE = {
  allFilters: {
    filters: {
      name: '',
    },
  },
  allRestaurants: {
    isFailure: false,
    isPending: false,
    restaurants: [],
  },
};

describe('Restaurants reducer', () => {
  test('setRestaurantsData with valid restaurant', () => {
    expect(
      rootReducer(
        DEFAULT_STATE,
        setRestaurantsData([{ name: 'The Three Broomsticks' }])
      )
    ).toEqual({
      ...DEFAULT_STATE,
      allRestaurants: {
        isFailure: false,
        isPending: false,
        restaurants: [{ name: 'The Three Broomsticks' }],
      },
    });
  });

  test('setRestaurantLoading', () => {
    expect(rootReducer(DEFAULT_STATE, setRestaurantLoading(true))).toEqual({
      ...DEFAULT_STATE,
      allRestaurants: {
        isFailure: false,
        isPending: true,
        restaurants: [],
      },
    });
  });

  test('setRestaurantError', () => {
    expect(rootReducer(DEFAULT_STATE, setRestaurantError(true))).toEqual({
      ...DEFAULT_STATE,
      allRestaurants: {
        isFailure: true,
        isPending: false,
        restaurants: [],
      },
    });
  });
});
