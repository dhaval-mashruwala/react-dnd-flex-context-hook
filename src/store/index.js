import React, { createContext, useReducer } from "react";
import reducers from '../reducers';
import * as actions from '../actions';

const initialState = {
  errors: false,
  tweets:[],
  savedTweets:[]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tweets: state.tweets,
        savedTweets: state.savedTweets,
        errors: state.errors,
        fetchTweets: actions.fetchTweets(dispatch),
        setSavedTweets: actions.setSavedTweets(dispatch),
        removeSavedTweet: actions.removeSavedTweet(dispatch)
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};