import React, { useReducer, createContext, useContext } from 'react'

const GlobalState = createContext();
export const useGlobalState = () => useContext(GlobalState);

export const Provider = ({reducer, initialState, children}) => {
  return (
    <GlobalState.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalState.Provider>
  )
}

export default Provider