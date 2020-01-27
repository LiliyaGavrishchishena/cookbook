import React from 'react';
//components
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
