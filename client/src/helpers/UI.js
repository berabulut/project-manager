const HandleBoardPageRender = (board, setRenderedBoard, setShowAllBoards) => {
  setRenderedBoard(board);
  setShowAllBoards(true);
};

const HideShowAllBoards = (board, setRenderedBoard, setShowAllBoards) => {
  setRenderedBoard(board);
  setShowAllBoards(false);
};

const HandleBackdropClose = (setOpenBackdrop) => {
  setOpenBackdrop(false);
};

const HandleBackdropOpen = (setOpenBackdrop) => {
  setOpenBackdrop(true);
};


const UIHelpers = {
  HandleBoardPageRender: HandleBoardPageRender,
  HideShowAllBoards: HideShowAllBoards,
  HandleBackdropClose: HandleBackdropClose,
  HandleBackdropOpen: HandleBackdropOpen,
};

export default UIHelpers;
