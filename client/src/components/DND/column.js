import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { IconButton, Grid, Typography } from "@material-ui/core";
import { AddTaskModal } from "components";
import { Add } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { columnStyles } from "./styles";
import InnerList from "./inner-list";

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleNameInputClose = () => {
    this.setState({
      ...this.state,
      anchorEl: null,
    });
  };

  handleAddAnotherCardButtonClick = (event) => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
    });
  };

  render() {
    const { classes, createNewTask, column } = this.props;
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
            <div className={classes.title}>
              <Grid container justify="space-between" alignItems="center">
                <IconButton
                  className={classes.addAnotherCard}
                  aria-label="cover"
                  onClick={(e) => {
                    this.handleAddAnotherCardButtonClick(e)
                    //createNewTask(column.id)
                  }}
                >
                  <Grid item xs={10}>
                    <Typography className={classes.buttonText} component="p">
                      Add another card
                    </Typography>
                  </Grid>
                  <Grid item container xs={2}>
                    <Add className={classes.menuIcon} />
                  </Grid>
                </IconButton>
                <AddTaskModal anchorEl={this.state.anchorEl} handleClose={this.handleNameInputClose} createNewTask={createNewTask} column={column} />
              </Grid>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default withStyles(columnStyles)(Column);
