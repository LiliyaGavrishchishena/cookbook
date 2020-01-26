import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipesSelectors, recipesOperations } from '../../redux/recipes';

import styles from './UpdateForm.module.css';

class UpdateForm extends Component {
  state = { name: '', description: '' };

  componentDidUpdate(prevProps) {
    window.M.updateTextFields();
    const { recipes } = this.props;
    if (this.props.recipes._id !== prevProps.recipes._id) {
      this.setState({ name: recipes.name, description: recipes.description });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, description } = this.state;
    const { updateRecipe, recipes } = this.props;
    const body = {
      recipe: { _id: recipes._id, name, description, date: recipes.date }
    };
    updateRecipe(null, body);
  };

  render() {
    const { name, description } = this.state;
    return (
      <section className={styles.editor}>
        <form className={styles.form} onSubmit={this.handleSubmitForm}>
          <h3 className={styles.title}>Update Recipe</h3>
          <div className="input-field col s6">
            <input
              required
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
            <label htmlFor="Name ">Name</label>
          </div>
          <div className="input-field col s12">
            <textarea
              required
              data-length="150"
              className="materialize-textarea"
              name="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="description">Description</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Update Recipe
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  recipes: recipesSelectors.getRecipes(state)
});

const mapDispatchToProps = {
  updateRecipe: recipesOperations.updateRecipe,
  getRecipeById: recipesOperations.getRecipeById
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
