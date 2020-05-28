import { FILTERS } from './actions.type';

export const setNameFilter = (name = {}) => ({
  type: FILTERS.SET_NAME_FILTER,
  payload: { name },
});
