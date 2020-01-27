import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipesOperations } from '../../redux/recipes';
//styles
import styles from './RecipeForm.module.css';

const INITIAL_STATE = {
  name: '',
  description: ''
};

class RecipeForm extends Component {
  state = INITIAL_STATE;

  componentDidUpdate(prevProps) {
    window.M.updateTextFields();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, description } = this.state;
    const { addRecipe } = this.props;
    const body = { recipe: { name, description } };
    addRecipe(null, body);
  };

  render() {
    const { name, description } = this.state;
    return (
      <section className={styles.editor}>
        <form className={styles.form} onSubmit={this.handleSubmitForm}>
          <h3 className={styles.title}>Add a new Recipe</h3>
          <div className="input-field col s6">
            <input
              required
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
            <label htmlFor="Name">Name</label>
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
            Add Recipe
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  addRecipe: recipesOperations.addRecipe
};

export default connect(null, mapDispatchToProps)(RecipeForm);
