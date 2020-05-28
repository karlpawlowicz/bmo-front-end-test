import rootReducer, { filtersReducer } from './index';
import { setNameFilter } from '../actions/filters.actions.js';

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

describe('Filters reducer', () => {
  test('setNameFilter with valid name', () => {
    expect(rootReducer(DEFAULT_STATE, setNameFilter('Sushi'))).toEqual({
      ...DEFAULT_STATE,
      allFilters: {
        filters: {
          name: 'Sushi',
        },
      },
    });
  });
});
