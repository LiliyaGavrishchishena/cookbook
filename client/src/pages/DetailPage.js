import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { recipesOperations } from '../redux/recipes';
//components
import UpdateForm from '../components/UpdateForm';
import VersionList from '../components/VersionList';

class DetailPage extends Component {
  state = {};

  componentDidMount() {
    const { getRecipeById, match } = this.props;
    const id = match.params.id;

    getRecipeById(id);
  }

  render() {
    return (
      <>
        <UpdateForm />
        <VersionList />
      </>
    );
  }
}

const mapDispatchToProps = {
  getRecipeById: recipesOperations.getRecipeById
};

export default connect(null, mapDispatchToProps)(withRouter(DetailPage));
