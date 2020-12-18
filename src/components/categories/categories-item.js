import React from 'react';
import { connect } from 'react-redux';
import { fetchNewsByCategory } from '../../actions';
import Spinner from '../common/Spinner';

class CategoriesItem extends React.Component {
  componentDidMount() {
    this.props.fetchNewsByCategory(this.props.category);
  }

  renderItems() {
    return this.props.categoryNews.map((newsItem, index) => {
      return (
        <div
          className={'carousel-item ' + (index === 0 && 'active')}
          key={index + newsItem.publishedAt + newsItem.title}
        >
          <h5>{newsItem.title}</h5>
          <img
            className='d-block w-100'
            src={newsItem.urlToImage}
            alt='First slide'
          />
        </div>
      );
    });
  }

  categoryTitle() {
    return (
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    );
  }

  render() {
    if (!this.props.categoryNews) {
      return <Spinner />;
    }

    return (
      <div>
        <h4>{this.categoryTitle()}</h4>
        <div
          id={`carouselExampleControls-${this.props.category}`}
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner my-3' style={{ height: '350px' }}>
            {this.renderItems()}
          </div>
          <a
            className='carousel-control-prev'
            href={`#carouselExampleControls-${this.props.category}`}
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href={`#carouselExampleControls-${this.props.category}`}
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categoryNews: state.news[ownProps.category],
  };
};

export default connect(mapStateToProps, { fetchNewsByCategory })(
  CategoriesItem
);
