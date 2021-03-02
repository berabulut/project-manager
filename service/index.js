const { createNewList } = require("./src/boards");

const column = {
  id: "column-1",
  title: "To do",
  taskIds: ["task-1", "task-2", "task-3", "task-4"],
};

createNewList("-MTwRJpcATRziUfZq-iL", column, ['column-1', 'column-2'])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
