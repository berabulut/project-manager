import React from "react";
import Task from "./task";

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tasks ? (
      this.props.tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} />
      ))
    ) : (
      <></>
    );
  }
}

export default InnerList;
