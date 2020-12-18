import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCountry } from '../../actions';

class Header extends React.Component {
  selectCountryHandler = (country) => {
    this.props.selectCountry(country);
  };

  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
          <div>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/top-news' className='nav-link'>
                    Top News
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/categories' className='nav-link'>
                    Categories
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/search' className='nav-link'>
                    Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              type='button'
              className={
                'btn d-inline-block p-3 ' +
                (this.props.country === 'GB' && 'bg-primary text-white')
              }
              onClick={() => this.selectCountryHandler('GB')}
            >
              GB
            </button>
            <button
              type='button'
              className={
                'btn d-inline-block p-3 ' +
                (this.props.country === 'US' && 'bg-primary text-white')
              }
              onClick={() => this.selectCountryHandler('US')}
            >
              US
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    country: state.news.country,
  };
};

export default connect(mapStateToProps, { selectCountry })(Header);
