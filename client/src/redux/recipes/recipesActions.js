import types from './actionsTypes';

const fetchRecipesRequest = () => ({
  type: types.FETCH_REQUEST
});

const fetchRecipesSuccess = recipes => ({
  type: types.FETCH_SUCCESS,
  payload: recipes
});

const fetchRecipesError = error => ({
  type: types.FETCH_ERROR,
  payload: error
});

const addRecipe = recipe => ({
  type: types.ADD_RECIPE,
  payload: recipe
});

const updateRecipe = recipe => ({
  type: types.UPDATE_RECIPE,
  payload: recipe
});

export default {
  fetchRecipesRequest,
  fetchRecipesSuccess,
  fetchRecipesError,
  addRecipe,
  updateRecipe
};
