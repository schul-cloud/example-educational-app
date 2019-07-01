import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Secure from '../containers/secure';


class OpenApp extends Component {
  render() {
    const {
      jwtToken,
    } = this.props;

    return (
      <Secure>
        <div>
          <a target="_parent" href={`https://b1248765.ngrok.io/Lecture2/Lesson1?jwt=${jwtToken}`} className="button">GO TO APP</a>
          <div>
            JWT: {jwtToken}
          </div>
        </div>
      </Secure>
    );
  }
}

OpenApp.propTypes = {
  jwtToken: PropTypes.string,
};

OpenApp.defaultProps = {
  jwtToken: undefined,
};

export default OpenApp;
