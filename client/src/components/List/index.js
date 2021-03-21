import React from "react";
import { UserContext } from "provider/UserProvider";
import { ListHelpers } from "helpers";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { IconButton, Grid, Typography } from "@material-ui/core";
import { AddTaskModal, TaskColumn, ListMenu, RenameMenu } from "components";
import { Add, MoreHoriz } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { listStyles } from "./styles";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addCardAnchorEl: null,
      listMenuAnchorEl: null,
      renameMenuAnchorEl: null,
    };
    this.listContainerRef = React.createRef();
  }

  static contextType = UserContext;

  handleNameInputClose = () => {
    this.setState({
      addCardAnchorEl: null,
    });
  };

  handleListMenuClose = () => {
    this.setState({
      listMenuAnchorEl: null,
    });
  };

  handleRenameMenuClose = () => {
    this.setState({
      renameMenuAnchorEl: null,
    });
  };

  handleAddAnotherCardButtonClick = (event) => {
    this.setState({
      addCardAnchorEl: event.currentTarget,
    });
  };

  handleListMenuButtonClick = (event) => {
    this.setState({
      listMenuAnchorEl: event.currentTarget,
    });
  };

  handleRenameButtonClick = () => {
    this.setState({
      renameMenuAnchorEl: this.listContainerRef.current,
    });
  };

  handleDeleteButtonClick = () => {
    let { renderedBoard, setRenderedBoard } = this.context;
    if (renderedBoard && renderedBoard.lists) {
      let newState = { ...renderedBoard };
      delete newState.lists[this.props.list.id];
      ListHelpers.HandleDeletingList(renderedBoard, this.props.list.id)
        .then(() => {
          setRenderedBoard(newState);
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    const { classes, createNewTask, list, index } = this.props;
    return (
      <Draggable draggableId={list.id} index={index}>
        {(provided, snapshot) => (
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <div
              className={classes.container}
              style={{ transform: snapshot.isDragging && "rotate(3.5deg)" }}
            >
              <Grid
                container
                {...provided.dragHandleProps}
                ref={this.listContainerRef}
              >
                <Grid item container xs={9} className={classes.title}>
                  {this.props.list.title}
                </Grid>
                <Grid item container xs={3} justify="flex-end">
                  <IconButton
                    onClick={this.handleListMenuButtonClick}
                    style={{ padding: "8px" }}
                  >
                    <MoreHoriz />
                  </IconButton>
                </Grid>
                <ListMenu
                  anchorEl={this.state.listMenuAnchorEl}
                  handleClose={this.handleListMenuClose}
                  renameButtonClick={this.handleRenameButtonClick}
                  deleteButtonClick={this.handleDeleteButtonClick}
                  listId={this.props.list.id}
                />
                <RenameMenu
                  anchorEl={this.state.renameMenuAnchorEl}
                  handleClose={this.handleRenameMenuClose}
                  listTitle={this.props.list.title}
                  listId={this.props.list.id}
                />
              </Grid>
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
                      this.handleAddAnotherCardButtonClick(e);
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
                  <AddTaskModal
                    anchorEl={this.state.addCardAnchorEl}
                    handleClose={this.handleNameInputClose}
                    createNewTask={createNewTask}
                    list={list}
                  />
                </Grid>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default withStyles(listStyles)(List);
