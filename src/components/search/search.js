import React from 'react';
import { connect } from 'react-redux';
import { searchNews, setSearchTerm } from '../../actions';
import NewsList from '../news/news-list';
import SearchBar from './search-bar';

class Search extends React.Component {
  searchNewsHandler = (term) => {
    this.props.searchNews(term);
  };

  componentWillUnmount() {
    this.props.setSearchTerm('');
  }

  render() {
    return (
      <div className='container news-list'>
        <div className='row'>
          <div className='col'>
            <h1>Search</h1>
          </div>
        </div>
        <SearchBar searchNewsHandler={this.searchNewsHandler} />
        <NewsList />
      </div>
    );
  }
}

export default connect(null, { searchNews, setSearchTerm })(Search);
