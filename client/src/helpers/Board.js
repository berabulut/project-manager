import {
  GetUserRelatedBoards,
  InviteUser,
  UpdateBoardProperty,
  RemoveUser,
} from "api/Board";
import { CreateNewTask, ReorderTasks, SwitchTasks } from "api/Task";
import { CreateNewList, ReorderLists } from "api/List";
import { UIHelpers, UserHelpers } from "helpers/";

const ParseBoardId = (
  boards // structuring boardIds for api call --> ["id1", "id2"]
) =>
  new Promise((resolve, reject) => {
    let body = [];
    try {
      for (let i = 0; i < boards.length; i++) {
        if (boards[i].boardId !== undefined) {
          body.push(boards[i].boardId);
        }
        if (i === boards.length - 1) {
          resolve(body);
        }
      }
    } catch (err) {
      reject(err);
    }
  });

const HandleUserRelatedBoards = (
  // fetching user related boards and seting them to context
  userData,
  setBoards,
  setOpenBackdrop
) =>
  new Promise((resolve, reject) => {
    if (!userData) {
      UIHelpers.HandleBackdropOpen(setOpenBackdrop);
    }
    if (
      userData !== undefined &&
      userData.boards !== undefined &&
      Object.keys(userData.boards).length > 0
    ) {
      UIHelpers.HandleBackdropOpen(setOpenBackdrop);
      ParseBoardId(Object.values(userData.boards))
        .then((response) => {
          const body = {
            boardList: response,
          };
          GetUserRelatedBoards(body)
            .then((response) => {
              if (response.statusCode === 200) {
                setBoards(response.boardData);
                UIHelpers.HandleBackdropClose(setOpenBackdrop);
                resolve(true);
              }
            })
            .catch((err) => {
              UIHelpers.HandleBackdropClose(setOpenBackdrop);
              reject(err);
            });
        })
        .catch((err) => {
          UIHelpers.HandleBackdropClose(setOpenBackdrop);
          reject(err);
        });
    } else {
      if (userData !== undefined) {
        UIHelpers.HandleBackdropClose(setOpenBackdrop);
      }
      reject("userData or boards are undefined");
    }
  });

const FindExactBoard = (
  id,
  boards,
  setRenderedBoard,
  setShowAllBoards,
  setOpenBackdrop
) => {
  UIHelpers.HandleBackdropOpen(setOpenBackdrop);

  for (let board of boards) {
    if (board.id === id) {
      UIHelpers.HandleBoardPageRender(
        board,
        setRenderedBoard,
        setShowAllBoards
      );
      UIHelpers.HandleBackdropClose(setOpenBackdrop);
      break;
    }
  }
};

const HandleBoardCreation = (
  response,
  userData,
  setUserData,
  setBoards,
  setOpenBackdrop
) =>
  new Promise(async (resolve, reject) => {
    try {
      let updateUser = { ...userData };
      if (updateUser.boards !== undefined && updateUser.boards !== null) {
        Object.assign(updateUser.boards, response);
        setUserData(updateUser);
        const data = await UserHelpers.HandleUserData(
          userData.uid,
          setUserData,
          setBoards,
          setOpenBackdrop
        );
        resolve(data);
      } else {
        updateUser.boards = response;
        setUserData(updateUser);
        const data = await UserHelpers.HandleUserData(
          userData.uid,
          setUserData,
          setBoards,
          setOpenBackdrop
        );
        resolve(data);
      }
    } catch (err) {
      reject(err);
    }
  });

const HandleInvitingUser = (boardId, input) =>
  new Promise((resolve, reject) => {
    InviteUser({ boardId: boardId, address: input })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });

const HandleListCreation = (board, lists, list, listOrder) =>
  new Promise((resolve, reject) => {
    if ((board && lists, list, listOrder)) {
      board.lists = lists;
      board.listOrder = listOrder;
      CreateNewList({
        boardId: board.id,
        list: list,
        listOrder: listOrder,
      });
      resolve(board);
    } else {
      reject("Boards or boardId is empty!");
    }
  });

const HandleTaskCreation = (board, listId, tasks, task, taskIds) =>
  new Promise((resolve, reject) => {
    if (board && listId && tasks && tasks && task && taskIds) {
      board.tasks = tasks;
      CreateNewTask({
        boardId: board.id,
        task: task,
        listId: listId,
        taskIds: taskIds,
      });
      resolve(board);
    } else {
      reject("Missing parameter empty!");
    }
  });

const HandleListReordering = (board, listOrder) =>
  new Promise((resolve, reject) => {
    if (board && listOrder) {
      board.listOrder = listOrder;
      ReorderLists({
        boardId: board.id,
        listOrder: listOrder,
      });
      resolve(board);
    } else {
      reject("Missing parameters");
    }
  });

const HandleTaskReordering = (board, listId, taskIds) =>
  new Promise((resolve, reject) => {
    if (board && listId && taskIds) {
      board.lists[listId].taskIds = taskIds;
      ReorderTasks({
        boardId: board.id,
        listId: listId,
        taskIds: taskIds,
      });
      resolve(board);
    } else {
      reject("Missing parameters");
    }
  });

const HandleTaskSwitching = (board, lists) =>
  new Promise((resolve, reject) => {
    if (board && lists) {
      board.lists = lists;
      SwitchTasks({
        boardId: board.id,
        lists: lists,
      });
      resolve(board);
    } else {
      reject("Missing parameters");
    }
  });

const HandleBoardPropertyUpdate = (boardId, property, data) =>
  new Promise((resolve, reject) => {
    if (boardId && property && data) {
      UpdateBoardProperty({
        boardId: boardId,
        property: property,
        data: data || " ",
      })
        .then(() => resolve(true))
        .catch((err) => reject(err));
    } else {
      reject("Missing parameters");
    }
  });

const HandleRemovingUser = (boardId, userId) =>
  new Promise((resolve, reject) => {
    RemoveUser({ boardId: boardId, userId: userId })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });

const BoardHelpers = {
  HandleUserRelatedBoards: HandleUserRelatedBoards,
  HandleBoardCreation: HandleBoardCreation,
  HandleBoardPropertyUpdate: HandleBoardPropertyUpdate,
  HandleListCreation: HandleListCreation,
  HandleTaskCreation: HandleTaskCreation,
  HandleListReordering: HandleListReordering,
  HandleTaskReordering: HandleTaskReordering,
  HandleTaskSwitching: HandleTaskSwitching,
  HandleInvitingUser: HandleInvitingUser,
  HandleRemovingUser: HandleRemovingUser,
  FindExactBoard: FindExactBoard,
};

export default BoardHelpers;
