import React from 'react'

const UserContext = React.createContext()

export default UserContext;

// when you add a context, you have to add a provider as well
// provider is like a wrapper around the other page components
// it will provide access to the userContext (which is a global context here) to all components wrapped under it