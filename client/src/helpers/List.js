import { RenameList, DeleteList } from "api/List";

const HandleRenamingList = (board, listId, title) =>
  new Promise((resolve, reject) => {
    if (board && listId && title) {
      board.lists[listId][title] = title;
      RenameList({
        boardId: board.id,
        listId: listId,
        title: title,
      })
        .then(() => resolve(board))
        .catch((err) => reject(err));
    } else {
      reject("Missing parameters");
    }
  });

const HandleDeletingList = (board, listId) =>
  new Promise((resolve, reject) => {
    if (board && listId) {
      DeleteList({
        boardId: board.id,
        listId: listId,
      })
        .then(() => resolve(true))
        .catch((err) => reject(err));
    } else {
      reject("Missing parameters");
    }
  });

const ListHelpers = {
  HandleRenamingList: HandleRenamingList,
  HandleDeletingList: HandleDeletingList,
};

export default ListHelpers;
