import { createContext, useReducer } from 'react';
import { useImmerReducer } from 'use-immer';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
   switch (action.type) {
      case 'CHANGE_COLOR':
         state.color = action.value;

      default:
         return state;
   }
};

export function ThemeProvider({ children }) {
   const [state, dispatch] = useImmerReducer(themeReducer, { color: 'blue' });

   const changeColor = (color) => {
      dispatch({ type: 'CHANGE_COLOR', value: color });
   };

   return <ThemeContext.Provider value={{ ...state, changeColor }}>{children}</ThemeContext.Provider>;
}
