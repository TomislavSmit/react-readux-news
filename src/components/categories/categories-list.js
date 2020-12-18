import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';
import Spinner from '../common/Spinner';
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
      <div className='container news-list'>
        <div className='row'>
          <div className='col'>
            <h1>Categories</h1>
            {this.renderCategories()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.news.categories,
  };
};

export default connect(mapStateToProps, { fetchCategories })(Categories);
