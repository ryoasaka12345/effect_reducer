import React from 'react';

import AuthContext from '../../store/AuthContext';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    // Context helps you to pass date between components.
    // Context.Consumer is a React component that subscribes to context changes.
    <AuthContext.Consumer>
      {(ctx) => {
        console.log(ctx.isLoggedIn);
        return (
          <nav className={classes.nav}>
            <ul>
              {/* Show only when localstrage is true */}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
