// In current implementation, we pass login data `isLoggedIn` to `MainHeadr`
// and `Navigation` via prop, now we will change to use Context
import React from 'react';

// Context is a build-in hook, it helps you to pass date between components.
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;
