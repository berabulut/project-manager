import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { IconButton, Grid, Typography } from "@material-ui/core";
import { AddTaskModal, TaskColumn } from "components";
import { Add } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { listStyles } from "./styles";

class List extends React.Component {
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
    const { classes, createNewTask, list, index } = this.props;
    return (
      <Draggable draggableId={list.id} index={index}>
        {(provided) => (
          <div
            className={classes.container}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className={classes.title} {...provided.dragHandleProps}>
              {this.props.list.title}
            </div>
            <Droppable droppableId={list.id} type="task">
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
                  <TaskColumn list={list} tasks={this.props.tasks} />
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
                <AddTaskModal anchorEl={this.state.anchorEl} handleClose={this.handleNameInputClose} createNewTask={createNewTask} list={list} />
              </Grid>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default withStyles(listStyles)(List);
