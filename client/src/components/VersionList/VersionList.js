import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { recipesSelectors, recipesOperations } from '../../redux/recipes';
// moment
import * as moment from 'moment';
//styles
import styles from './VersionList.module.css';

class VersionList extends Component {
  state = {};

  render() {
    const { recipes } = this.props;
    return (
      <>
        <h3 className="hand blue-grey-text center-align">List of versions</h3>
        <div className="row">
          <Link className="col s12 btn waves-effect waves-light" to={'/'}>
            Go Back
          </Link>
        </div>

        <ul className="row">
          {recipes.map(recipe => (
            <li key={recipe._id} className="col s12">
              <div className="card">
                <div className="card-title center-align">
                  <h4 className={styles.title}>{recipe.name}</h4>
                </div>
                <div className="card-content">{recipe.description}</div>
                <div className="card-content">
                  <span>Date of update: </span>
                  {moment(recipe.update).format('DD.MM.YYYY, h:mm:ss')}
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
  recipes: recipesSelectors.getVersion(state)
});

const mapDispatchToProps = {
  getRecipeById: recipesOperations.getRecipeById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(VersionList));
