import axios from 'axios';
import actions from './recipesActions';

axios.defaults.baseURL =
  (process.env.PORT && `http://localhost:${process.env.PORT}`) ||
  'http://localhost:8000';

const getRecipes = url => async dispatch => {
  try {
    dispatch(actions.fetchRecipesRequest());

    await axios
      .get(url)
      .then(({ data }) => {
        dispatch(actions.fetchRecipesSuccess(data));
      })
      .catch(error => dispatch(actions.fetchRecipesError(error)));
  } catch (e) {
    dispatch(actions.fetchRecipesError(e));
  }
};

const getRecipeById = id => async dispatch => {
  try {
    dispatch(actions.fetchRecipesRequest());

    await axios
      .get(id)
      .then(({ data }) => {
        dispatch(actions.fetchRecipesSuccess(data));
      })
      .catch(error => dispatch(actions.fetchRecipesError(error)));
  } catch (e) {
    dispatch(actions.fetchRecipesError(e));
  }
};

const addRecipe = (url, body) => async dispatch => {
  try {
    await axios
      .post(url, body)
      .then(({ data }) => {
        dispatch(actions.addRecipe(data.recipe));
      })
      .catch(error => console.log(error));
  } catch (e) {
    console.log(e);
  }
};

const updateRecipe = (url, body) => async dispatch => {
  try {
    await axios
      .put(url, body)
      .then(({ data }) => {
        console.log(data);
        dispatch(actions.updateRecipe(data.recipe));
      })
      .catch(error => console.log(error));
  } catch (e) {
    console.log(e);
  }
};

export default {
  getRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe
};
