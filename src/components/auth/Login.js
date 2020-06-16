import * as React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Redirect, useHistory } from 'react-router-dom';
import { authService } from '../../services/AuthService';

export function Login({user, onLogin}) {
  let emailRef = React.useRef();
  let passwordRef = React.useRef();
  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: "/" } };

  const login = () => {
    authService.login(
      emailRef.current.value,
      passwordRef.current.value
    ).then(user => {
      onLogin(user);

      console.log(from);
      history.push(from);
    });
  };

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
              <input
                className="input"
                type="email"
                placeholder="Email"
                ref={emailRef}
              />
            </p>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <p className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success" onClick={login}>
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
  onLogin: PropTypes.func.isRequired
};
