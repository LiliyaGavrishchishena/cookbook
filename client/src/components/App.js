import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// components

import RecipesPage from '../pages/RecipesPage';
import DetailPage from '../pages/DetailPage';
// configs
import routes from '../configs/routes';
// styles
import 'materialize-css';

const App = () => {
  return (
    <div className="container">
      <h1 className="hand blue-grey-text center-align">Cookbook</h1>
      <Switch>
        <Route exact path={routes.RECIPE} component={RecipesPage} />
        <Route exact path={routes.DETAIL} component={DetailPage} />

        <Redirect to={routes.RECIPE} />
      </Switch>
    </div>
  );
};

export default App;
