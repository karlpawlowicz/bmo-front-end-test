import { combineReducers } from 'redux';
import { restaurantsReducer } from './restaurants.reducer';
import { filtersReducer } from './filters.reducer';

const rootReducer = combineReducers({
  allRestaurants: restaurantsReducer,
  allFilters: filtersReducer,
});

export default rootReducer;
