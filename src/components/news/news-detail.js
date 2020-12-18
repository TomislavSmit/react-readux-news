import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const NewsDetail = ({ selectedNewsItem }) => {
  let history = useHistory();

  if (!selectedNewsItem) {
    return (
      <div className='container news-list'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>Sorry, no article selected</h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='container news-list'>
      <div className='row'>
        <div className='col-md-12'>
          <h2>{selectedNewsItem.title}</h2>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-12'>
          <img
            src={selectedNewsItem.urlToImage}
            alt={selectedNewsItem.title}
            className='w-100'
          />
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-12'>
          <p>{selectedNewsItem.content}</p>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-md-12'>
          <button className='btn btn-primary' onClick={() => history.goBack()}>
            back to list
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedNewsItem: state.news.selectedNewsItem };
};

export default connect(mapStateToProps)(NewsDetail);
