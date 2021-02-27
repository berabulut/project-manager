import React, { useState } from "react";

export const UIContext = React.createContext();

const UIProvider = ({children, openBackdrop, setOpenBackdrop}) => {
  const [showAllBoards, setShowAllBoards] = useState(false);
  const [renderedBoard, setRenderedBoard] = useState();
  const [showFooter, setShowFooter] = useState(true);


  return (
    <UIContext.Provider
      value={{
        openBackdrop,
        setOpenBackdrop,
        showFooter,
        setShowFooter,
        showAllBoards,
        setShowAllBoards,
        setRenderedBoard,
        renderedBoard
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
