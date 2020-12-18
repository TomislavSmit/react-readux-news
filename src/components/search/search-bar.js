import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.searchNewsHandler(this.state.term);
  };

  render() {
    return (
      <div className='row my-3'>
        <div className='col'>
          <form onSubmit={this.onFormSubmit}>
            <input
              className='form-control'
              placeholder='Enter search term...'
              value={this.state.term}
              type='text'
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
