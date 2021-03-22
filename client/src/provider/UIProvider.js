import React, { useState } from "react";

export const UIContext = React.createContext();

const UIProvider = ({
  children,
  openBackdrop,
  setOpenBackdrop,
  renderedBoard,
  setRenderedBoard,
}) => {
  const [showAllBoards, setShowAllBoards] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const changeDrawerVisibility = (set, state) => {
    if (set && state) {
      setDrawerOpen(state);
    } else {
      setDrawerOpen(!drawerOpen);
    }
  };

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
        renderedBoard,
        drawerOpen,
        changeDrawerVisibility,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
