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

const HandleLeavingBoardPage = (boards, renderedBoard) =>
  new Promise((resolve, reject) => {
    if (boards && renderedBoard) {
      for (let i = 0; i < boards.length; i++) {
        let board = boards[i];
        if (board.id === renderedBoard.id) {
          board = renderedBoard;
        }
      }
      resolve(boards)
    } else {
      reject("Missing parameters");
    }
  });

const UIHelpers = {
  HandleBoardPageRender: HandleBoardPageRender,
  HideShowAllBoards: HideShowAllBoards,
  HandleBackdropClose: HandleBackdropClose,
  HandleBackdropOpen: HandleBackdropOpen,
  HandleLeavingBoardPage: HandleLeavingBoardPage,
};

export default UIHelpers;
