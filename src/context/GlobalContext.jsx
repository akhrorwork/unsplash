// react imports
import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LIKE":
      return {
        ...state,
        likedImages: [...state.likedImages, payload],
      };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id != payload),
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

  useEffect(() => {}, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
