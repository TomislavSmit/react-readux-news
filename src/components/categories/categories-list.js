import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';

import Spinner from '../common/spinner';
import CategoriesItem from './categories-item';

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategories() {
    return this.props.categories.map((category) => {
      return <CategoriesItem key={category} category={category} />;
    });
  }

  render() {
    if (!this.props.categories) {
      return <Spinner />;
    }

    return (
      <div className='categories-list'>
        <div className='row my-3'>
          <div className='col'>
            <h1>Top 5 news from {this.props.country}</h1>
          </div>
        </div>
        {this.renderCategories()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.news.categories,
    country: state.news.country,
  };
};

export default connect(mapStateToProps, { fetchCategories })(Categories);
