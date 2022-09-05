import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '@formio/react';
import { useAuth } from '../../modules/auth';
import eoxLogo from '../../assets/eox_logo.png';

const Header = () => {
  const { state: authState, dispatch } = useAuth();

  const onLogout = () => {
    logout()(dispatch);
  };

  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" alt="EOX Form Builder" height="25%" src={eoxLogo} />
          </Link>
          <ul className="nav navbar-nav mr-auto">
            <NavLink to="/" role="navigation button" className="nav-link">
              <span className="fa fa-home" />
            </NavLink>
            { authState.authenticated ? (
              <NavLink to="/form" role="navigation link" className="nav-link">
                <i className="fa fa-wpforms"></i>&nbsp;
                Forms
              </NavLink>
            ) : null }
            { authState.authenticated ? (
              <NavLink to="/event" role="navigation link" className="nav-link">
                <i className="fa fa-calendar"></i>&nbsp;
                Events
              </NavLink>
            ) : null }
          </ul>
          <ul className="nav navbar-nav ml-auto">
            { authState.authenticated ? (
              <li className="nav-item">
                <span className="nav-link" role="navigation link" onClick={onLogout}>
                  <span className="fa fa-sign-out" />&nbsp;
                  Logout
                </span>
              </li>
            ) : (
              <NavLink to="/auth" role="navigation link" className="nav-link">
                Login | Register
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
  );
};

export default Header;
