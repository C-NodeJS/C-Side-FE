import { createContext, useEffect, useState, useReducer } from "react";
import { getAccessTokenFromLS } from "../utils/auth";

const initialAppContext = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  authLoading: true,
  userData: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
      message: '',
    };
  },
  LOGIN: (state, action) => {
    const { user, message } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
      message,
    }
  }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

export const AppContext = createContext(initialAppContext);

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticate] = useState(
    initialAppContext.isAuthenticated
  );
  const [authLoading, setAuthLoading] = useState(
    initialAppContext.authLoading
  );
  const [userData, setUserData] = useState(
    initialAppContext.userData
  );

  const [state, dispatch] = useReducer(reducer, initialAppContext);


  const authContextData = { isAuthenticated, authLoading, userData, setIsAuthenticate, setAuthLoading, setUserData };

  useEffect(() => {
    setIsAuthenticate(Boolean(getAccessTokenFromLS()));
  }, []);

  return (
    <AppContext.Provider
      value={authContextData}
    >
      {children}
    </AppContext.Provider>
  );
};
