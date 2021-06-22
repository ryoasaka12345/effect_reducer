import React, { Fragment, useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // useEffect is a React hook.
  // React will rememver the function you passed,
  // and call it later after perfoming the DOM updates.
  useEffect(() => {
    // Each time the page is loaded,
    // we will get the data in Local Storage.
    const isUserLoggedin = localStorage.getItem("isLoggedIn");
    if (isUserLoggedin === "1") {
      setIsLoggedIn(true);
    }
  }, []); // The frst arguments is a function
  // The second is an array of dependencies
  // ...when dependency canges, useEffect will be called.

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {/* if false, call the login handler */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {/* if true, call the logout handler */}
        {isLoggedIn && <Home onLogout={logoutHandler} />}

      </main>
    </Fragment>
  );
}

export default App;
