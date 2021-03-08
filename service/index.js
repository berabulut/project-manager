const { createUniqueId } = require("./src/boards");

const column = {
  id: "column-1",
  title: "To do",
  taskIds: ["task-1", "task-2", "task-3", "task-4"],
};

createUniqueId()
.then((data) => console.log(data))
.catch((err) => console.log(err))