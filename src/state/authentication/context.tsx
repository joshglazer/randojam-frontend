import React, { createContext, useEffect, useReducer } from "react";
import { AUTHENTICATION_LOCAL_STORAGE_KEY } from "./consts";
import { AuthenticationReducer } from "./reducer";

export interface IUser {
  id: string;
  imageUrl?: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface IAuthenticationContextData {
  token: string | null;
  user: IUser | null;
}

const defaultInitialState: IAuthenticationContextData = {
  token: null,
  user: null,
};

const initialStateStorage = localStorage.getItem(
  AUTHENTICATION_LOCAL_STORAGE_KEY
);

const initialState = initialStateStorage
  ? (JSON.parse(initialStateStorage) as IAuthenticationContextData)
  : defaultInitialState;

const AuthenticationContext = createContext<{
  state: IAuthenticationContextData;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface IAuthenticationProviderProps {
  children: React.ReactNode;
}

const AuthenticationProvider: React.FC<IAuthenticationProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthenticationReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      AUTHENTICATION_LOCAL_STORAGE_KEY,
      JSON.stringify(state)
    );
  }, [state]);

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
