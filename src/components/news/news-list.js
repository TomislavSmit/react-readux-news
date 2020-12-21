import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';

import Spinner from '../common/spinner';
import NewsCard from './news-card';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderList() {
    return this.props.news.map((newsItem) => {
      return (
        <NewsCard key={newsItem.publishedAt + newsItem.title} item={newsItem} />
      );
    });
  }

  renderError() {
    return (
      <div className='row my-3'>
        <div className='col text-center'>
          <h5>Sorry, no results</h5>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.news) {
      return <Spinner />;
    } else if (this.props.news.length < 1) {
      return this.renderError();
    }

    return (
      <div className='news-list'>
        <div className='row my-3'>
          <div className='col'>
            <h1>News List</h1>
          </div>
        </div>
        <div className='row'>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { news: state.news.newsList };
};

export default connect(mapStateToProps, { fetchNews })(NewsList);
