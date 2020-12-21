import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { capitalize } from 'lodash';
import { fetchNewsByCategory } from '../../actions';

import Spinner from '../common/spinner';
import NewsCard from '../news/news-card';

class CategoryList extends React.Component {
  componentDidMount() {
    this.props.fetchNewsByCategory(this.props.match.params.category, 100);
  }

  renderNewsByCategory() {
    return this.props.news[this.props.match.params.category].map(
      (newsItem, index) => {
        return (
          <NewsCard
            key={index + newsItem.publishedAt + newsItem.title}
            item={newsItem}
          />
        );
      }
    );
  }

  render() {
    if (!this.props.news[this.props.match.params.category]) {
      return <Spinner />;
    }

    return (
      <div className='category-list'>
        <div className='row my-3'>
          <div className='col'>
            <h1>
              Top {capitalize(this.props.match.params.category)} news from{' '}
              {this.props.news.country}
            </h1>
          </div>
        </div>
        <div className='row'>{this.renderNewsByCategory()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

export default connect(mapStateToProps, { fetchNewsByCategory })(
  withRouter(CategoryList)
);
