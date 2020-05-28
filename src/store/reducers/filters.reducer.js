import { FILTERS } from '../actions/actions.type';

export const INITIAL_STATE = {
  filters: { name: '' },
};

export const filtersReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FILTERS.SET_NAME_FILTER:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};
