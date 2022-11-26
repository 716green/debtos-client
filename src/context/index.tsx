import React, { createContext, useReducer } from "react";
import { ReducerActions, State, ProviderProps, GlobalState, User } from "./types";

const initialState: GlobalState = {
  user: null,
  setUser: () => {},
};

export const GlobalContext = createContext<GlobalState>(initialState);

//* REDUCERS
const reducers = (state: State, action: ReducerActions) => {
  switch (action.type) {
    case "SET_USER":
      const user = action.payload;
      return { ...state, user };

    default:
      return { ...state };
  }
};

//* PROVIDER COMPONENT
export const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = (useReducer as any)(reducers, initialState);

  //* ACTIONS
  const setUser = async (user: User) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const getters = {
    user: state.user,
  };

  const setters = {
    setUser,
  };

  //* STATE AND SETTERS
  const globalState: GlobalState = {
    ...getters,
    ...setters,
  };

  return <GlobalContext.Provider value={globalState}>{children}</GlobalContext.Provider>;
};
