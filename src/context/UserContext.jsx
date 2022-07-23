import { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChanged, createUserProfileDocument } from '../components/utils/fireBase';
import { setCurrentUser } from '../redux/action';
import { initialUserState, userReducer } from '../redux/reducer';

// as the actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialUserState);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
      createUserProfileDocument(user);
    });
    return unsubscribeFromAuth;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
