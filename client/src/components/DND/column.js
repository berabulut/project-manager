import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { withStyles } from "@material-ui/core/styles";
import { columnStyles } from "./styles";
import InnerList from "./inner-list";

class Column extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <div
            className={classes.container}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className={classes.title} {...provided.dragHandleProps}>
              {this.props.column.title}
            </div>
            <Droppable droppableId={this.props.column.id} type="task">
              {(provided, snapshot) => (
                <div
                  className={
                    snapshot.isDraggingOver
                      ? classes.dragging
                      : classes.taskList
                  }
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    );
  }
}

export default withStyles(columnStyles)(Column);
