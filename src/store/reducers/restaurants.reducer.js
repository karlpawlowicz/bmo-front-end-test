import { RESTAURANTS } from '../actions/actions.type';

export const INITIAL_STATE = {
  restaurants: [],
  isPending: false,
  isFailure: false
};

export const restaurantsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case RESTAURANTS.SET_LOADING:
      return {
        ...state,
        isPending: true,
        isFailure: false
      };

    case RESTAURANTS.SET_DATA:
      return {
        ...state,
        restaurants: action.payload,
        isPending: false,
        isFailure: false
      };

    case RESTAURANTS.SET_ERROR:
      return {
        ...state,
        isPending: false,
        isFailure: true
      };
    default:
      return state;
  }
};