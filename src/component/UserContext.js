import React from "react";

// Create a Context object
const UserContext = React.createContext('default value');

// Export the Provider and Consumer from the context
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
