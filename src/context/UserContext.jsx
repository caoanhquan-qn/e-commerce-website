import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, createUserProfileDocument } from '../components/utils/fireBase';

// as the actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged((user) => {
      setCurrentUser(user);
      createUserProfileDocument(user);
    });
    return unsubscribeFromAuth;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
