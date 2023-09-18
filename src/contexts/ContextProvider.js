import { createContext, useContext, useState } from "react";
 

export const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider value={{screenSize,setScreenSize,currentColor,activeMenu,setActiveMenu,handleClick,isClicked,setIsClicked,}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
