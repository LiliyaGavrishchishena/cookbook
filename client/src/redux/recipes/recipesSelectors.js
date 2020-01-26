const getRecipes = state => state.recipes;
const sortedByDate = state => {
  if (Array.isArray(state.recipes)) {
    return state.recipes.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }
      return 0;
    });
  }
  return [];
};

const getVersion = state => {
  const {
    recipes: { versions }
  } = state;

  if (Array.isArray(versions)) {
    const sorted = versions.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }
      return 0;
    });
    return sorted;
  }

  return [];
};

export default {
  getRecipes,
  sortedByDate,
  getVersion
};
