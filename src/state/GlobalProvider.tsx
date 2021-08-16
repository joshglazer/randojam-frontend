import React, { createContext, useEffect, useReducer } from "react";
import { AUTHENTICATION_LOCAL_STORAGE_KEY } from "./authentication/consts";
import { authenticationInitialState } from "./authentication/initialState";
import { AuthenticationReducer } from "./authentication/reducer";
import { IAuthenticationContextData } from "./authentication/types";
import { jamsInitialState } from "./jams/initialState";
import { JamsReducer } from "./jams/reducer";
import { IJamsContextData } from "./jams/types";

interface IGlobalProviderProps {
  children: React.ReactNode;
}

const authenticationInitialStateStorage = localStorage.getItem(
  AUTHENTICATION_LOCAL_STORAGE_KEY
);

const authenticationInitialStateProcessed = authenticationInitialStateStorage
  ? (JSON.parse(
      authenticationInitialStateStorage
    ) as IAuthenticationContextData)
  : authenticationInitialState;

export const GlobalContext = createContext<{
  authenticationState: IAuthenticationContextData;
  authenticationDispatch: React.Dispatch<any>;
  jamsState: IJamsContextData;
  jamsDispatch: React.Dispatch<any>;
}>({
  authenticationState: authenticationInitialStateProcessed,
  authenticationDispatch: () => null,
  jamsState: jamsInitialState,
  jamsDispatch: () => null,
});

export const GlobalProvider: React.FC<IGlobalProviderProps> = ({
  children,
}) => {
  const [authenticationState, authenticationDispatch] = useReducer(
    AuthenticationReducer,
    authenticationInitialStateProcessed
  );
  const [jamsState, jamsDispatch] = useReducer(JamsReducer, jamsInitialState);

  useEffect(() => {
    localStorage.setItem(
      AUTHENTICATION_LOCAL_STORAGE_KEY,
      JSON.stringify(authenticationState)
    );
  }, [authenticationState]);

  return (
    <GlobalContext.Provider
      value={{
        authenticationState,
        authenticationDispatch,
        jamsState,
        jamsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
