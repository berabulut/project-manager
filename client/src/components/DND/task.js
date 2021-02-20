import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { withStyles } from "@material-ui/core/styles";
import { taskStyles } from "./styles";

class Task extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className={
              snapshot.isDragging ? classes.dragging : classes.container
            }
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    );
  }
}

export default withStyles(taskStyles)(Task);
