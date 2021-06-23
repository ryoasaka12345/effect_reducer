import React, { Fragment, useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/AuthContext';

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
  // The frst arguments is a function
  // The second is an array of dependencies
  // ...when dependency canges, useEffect will be called.
  useEffect(() => {
    // Each time the page is loaded,
    // we will get the data in Local Storage.
    const isUserLoggedin = localStorage.getItem("isLoggedIn");
    if (isUserLoggedin === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        // otherKey: otherValue,
        // ofTherFunction: myFunction
      }}>
      <MainHeader onLogout={logoutHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Home onLogout={logoutHandler}/>}
      </main>
    </AuthContext.Provider >
  );
}

export default App;
