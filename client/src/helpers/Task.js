import { UpdateTaskProperty } from "api/Task";

const HandleTaskPropertyUpdate = (board, taskId, property, data) =>
  new Promise((resolve, reject) => {
    if (board && taskId && property && data) {
      board.tasks[taskId][property] = data;
      UpdateTaskProperty({
        boardId: board.id,
        taskId: taskId,
        property: property,
        data: data || " ",
      })
        .then(() => resolve(board))
        .catch((err) => reject(err));
    } else {
      reject("Missing parameters");
    }
  });


const TaskHelpers = {
  HandleTaskPropertyUpdate: HandleTaskPropertyUpdate,
};

export default TaskHelpers;
