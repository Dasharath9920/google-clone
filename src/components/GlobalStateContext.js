import {createContext, useReducer} from 'react';
import reducer from './reducer.js';

const initializer = {
   term: null,
}

export const GlobalContext = createContext(initializer);

export const GlobalContextProvider = ({children}) =>{

   return <GlobalContext.Provider value = {useReducer(reducer,initializer)}>
      {children}
   </GlobalContext.Provider>
}