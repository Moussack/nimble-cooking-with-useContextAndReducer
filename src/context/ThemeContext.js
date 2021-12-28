import { createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
   return <ThemeContext.Provider value={{ color: 'teal' }}>{children}</ThemeContext.Provider>;
}

/* import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducecr = (state, action) => {
   switch (action.type) {
      case 'CHANGE_COLOR':
         return { ...state, color: action.payload };

      default:
         return state;
   }
};

export function ThemeProvider({ children }) {
   const [state, dispatch] = useReducer(themeReducer, { color: 'teal' });

   const changeColor = (color) => {
      dispatch({ type: 'CHANGE_COLOR', payload: color });
   };

   return <ThemeContext.Provider value={{ ...state, changeColor }}>{children}</ThemeContext.Provider>;
}
 */
