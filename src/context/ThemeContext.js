import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
   switch (action.type) {
      case 'CHANGE_COLOR':
         return { ...state, color: action.value };

      case 'CHANGE_MODE':
         return { ...state, mode: action.value };

      default:
         return state;
   }
};

export function ThemeProvider({ children }) {
   const [state, dispatch] = useReducer(themeReducer, { color: '#58249c', mode: 'dark' });

   const changeColor = (color) => {
      dispatch({ type: 'CHANGE_COLOR', value: color });
   };

   const changeMode = (mode) => {
      dispatch({ type: 'CHANGE_MODE', value: mode });
   };

   return <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>{children}</ThemeContext.Provider>;
}
