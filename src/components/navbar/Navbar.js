import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Navbar({user}) {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">EDirectInsure TODO List</a>

        <a
          role="button"
          href="/"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="app-navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="app-navbar" className="navbar-menu">
        <div className="navbar-start">
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {user.loggedIn ? (
                <div className="buttons">
                <Link to="/profile" className="button is-primary">
                  <strong>{user.name}</strong>
                </Link>
              </div>
            ) : (
              <div className="buttons">
                <Link to="/register" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-light">
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    loggedIn: PropTypes.bool.isRequired,
  }),
};
