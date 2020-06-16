import * as React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Redirect } from 'react-router-dom';
import { authService } from '../../services/AuthService';

export function Login({user}) {
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  if (user.loggedIn) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <div className="field">
            <label className="label">Email</label>
            <p className="control">
              <input className="input" type="email" placeholder="Email" />
            </p>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <p className="control">
              <input className="input" type="password" placeholder="Password" />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    loggedIn: PropTypes.bool.isRequired,
  }),
};
