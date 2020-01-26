import React from 'react';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';

const RecipesPage = () => {
  return (
    <div>
      <RecipeForm />
      <RecipeList />
    </div>
  );
};

export default RecipesPage;
