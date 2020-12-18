import React from 'react';
import { Link } from 'react-router-dom';
import './news-card.css';
import { connect } from 'react-redux';
import { selectNewsItem } from '../../actions';

class NewsCard extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div className='col-sm-4 news-card'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{item.title}</h5>
          </div>
          <img className='card-img-top' src={item.urlToImage} alt='Card cap' />
          <div className='card-body'>
            <p className='card-text'>{item.description}</p>
            <Link
              type='button'
              to={`/news-detail`}
              className='btn btn-primary'
              onClick={() => this.props.selectNewsItem(item)}
            >
              More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { selectNewsItem })(NewsCard);
