// react imports
import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        likedImages: [...state.likedImages, action.payload],
      };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter(
          (image) => image.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  likedImages: [],
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
