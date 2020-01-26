import types from './actionsTypes';

const INIT_RECIPES = [];

function recipesReducer(state = INIT_RECIPES, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.ADD_RECIPE:
      return [...state, payload];

    case types.UPDATE_RECIPE:
      return payload;

    case types.FETCH_REQUEST:
    case types.FETCH_ERROR:
      return INIT_RECIPES;

    default:
      return state;
  }
}

export default recipesReducer;
