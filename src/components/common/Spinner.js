import React from 'react'
import logo from '../../assets/images/loader-spinner.gif'

const Spinner = (props) => {
  return (
    <div className="container news-list">
      <div className="row">
        <div className="col-12 text-center">
          <img src={logo} alt="loading..." />
        </div>
      </div>
    </div>
  )
}

export default Spinner
