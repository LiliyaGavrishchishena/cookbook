import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { recipesSelectors, recipesOperations } from '../../redux/recipes';

import styles from './RecipeList.module.css';

class RecipeList extends Component {
  state = {};

  componentDidMount() {
    const { getRecipes } = this.props;
    getRecipes();
  }

  // showMore = id => {
  //   console.log(id);
  // };

  render() {
    const { recipes = [] } = this.props;
    return (
      <>
        <ul className="row">
          {recipes.map(recipe => (
            <li key={recipe._id} className="col s12 m6 l4">
              <div className="card small">
                <div className="card-title center-align">
                  <h4 className={styles.title}>{recipe.name}</h4>
                </div>
                <div className="card-content">
                  {recipe.description.lenght >= 150
                    ? recipe.description.slice(0, 150) + ' ...'
                    : recipe.description}
                </div>
                <div className="card-action">
                  {/* <button
                    className="btn waves-effect waves-light"
                    onClick={() => this.showMore(recipe._id)}
                  >
                    Read more
                  </button> */}
                  <Link
                    className="btn waves-effect waves-light"
                    to={`${recipe._id}`}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  recipes: recipesSelectors.sortedByDate(state)
});

const mapDispatchToProps = {
  getRecipes: recipesOperations.getRecipes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RecipeList));
