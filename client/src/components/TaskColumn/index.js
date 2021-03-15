import React from "react";
import { Task } from "components";

class TaskColumn extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
    const { tasks, list } = this.props;
    return tasks ? (
      tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} listTitle={list.title} />
      ))
    ) : (
      <></>
    );
  }
}

export default TaskColumn;
