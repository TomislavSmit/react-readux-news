import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderList() {
    return this.props.news.map((newsItem) => {
      return (
        <div className="item" key={newsItem.publishedAt}>
          <p>{newsItem.title}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container news-list">
        <div className="row">
          <div className="col">
            <h1>News List</h1>
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: Object.values(state.news),
  };
};

export default connect(mapStateToProps, { fetchNews })(NewsList);
