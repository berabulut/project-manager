import React from "react";
import shortid from "shortid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { IconButton, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import { AddListModal, ListColumn } from "components";
import { UserContext } from "provider/UserProvider";
import { BoardHelpers } from "helpers";
import { canvasStyles } from "./styles";

class DndCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }
  static contextType = UserContext;

  componentDidUpdate(prevProps) {
    const board = this.context.renderedBoard;
    if (prevProps.board !== board) {
      if (board) {
        if (board.lists) {
          this.setState({
            listOrder: board.listOrder,
            lists: board.lists,
          });
          if (board.tasks) {
            this.setState({
              tasks: board.tasks,
            });
          }
        }
      }
    }
  }
  componentDidMount() {
    if (this.context.renderedBoard) {
      const board = this.context.renderedBoard;
      if (board) {
        if (board.lists) {
          this.setState({
            listOrder: board.listOrder,
            lists: board.lists,
          });
          if (board.tasks) {
            this.setState({
              tasks: board.tasks,
            });
          }
        }
      }
    }
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    const board = this.context.renderedBoard;

    // no list to drop
    if (!destination) {
      return;
    }

    // dropping to same list same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // triggers when reordering lists
    if (type === "list") {
      const newListOrder = Array.from(this.state.listOrder);
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggableId);

      const updatedState = {
        ...this.state,
        listOrder: newListOrder,
      };
      this.setState(updatedState);
      BoardHelpers.HandleListReordering(board, newListOrder)
        .then((renderedBoard) => this.context.setRenderedBoard(renderedBoard))
        .catch((err) => console.log(err));
      return;
    }

    const home = this.state.lists[source.droppableId];
    const foreign = this.state.lists[destination.droppableId];

    // triggers when reordering tasks in the same list
    if (home === foreign) {
      const newTaskIds = Array.from(home.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        lists: {
          ...this.state.lists,
          [newHome.id]: newHome,
        },
      };
      this.setState(newState);
      BoardHelpers.HandleTaskReordering(board, newHome.id, newTaskIds)
        .then((renderedBoard) => this.context.setRenderedBoard(renderedBoard))
        .catch((err) => console.log(err));
      return;
    }

    // codes below only works when moving a task one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    let foreignTaskIds;
    if (foreign.taskIds) {
      foreignTaskIds = Array.from(foreign.taskIds);
    } else {
      foreignTaskIds = [];
    }
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    this.setState(newState);
    BoardHelpers.HandleTaskSwitching(board, newState.lists)
      .then((renderedBoard) => this.context.setRenderedBoard(renderedBoard))
      .catch((err) => console.log(err));
  };

  createNewList = async (title) => {
    let updatedState = { ...this.state };
    const listId = shortid.generate();
    let list;
    const board = this.context.renderedBoard;

    if (updatedState.lists !== undefined) {
      // board doesn't have any list
      list = {
        id: listId,
        title: title,
        taskIds: [],
      };
      updatedState.lists[listId] = list;
      updatedState.listOrder.push(listId);
      this.setState(updatedState);
      BoardHelpers.HandleListCreation(
        board,
        updatedState.lists,
        list,
        updatedState.listOrder
      )
        .then((renderedBoard) => {
          this.context.setRenderedBoard(renderedBoard);
        })
        .catch((err) => console.log(err));
    } else {
      list = {
        id: listId,
        title: title,
        taskIds: [],
      };
      updatedState.lists = {
        [listId]: list,
      };
      updatedState.listOrder = [listId];
      this.setState(updatedState);
      BoardHelpers.HandleListCreation(
        board,
        updatedState.lists,
        list,
        updatedState.listOrder
      )
        .then((renderedBoard) => {
          this.context.setRenderedBoard(renderedBoard);
        })
        .catch((err) => console.log(err));
    }
  };

  createNewTask = (listId, title) => {
    let updatedState = { ...this.state };
    let taskCount;
    let taskId;
    let task;
    const board = this.context.renderedBoard;

    if (updatedState.tasks !== undefined) {
      taskCount = Object.keys(updatedState.tasks).length;
      taskId = `task-${taskCount + 1}`;
      task = {
        id: taskId,
        title: title,
      };
      updatedState.tasks[taskId] = task;
      if (updatedState.lists[listId].taskIds)
        updatedState.lists[listId].taskIds.push(taskId);
      else updatedState.lists[listId].taskIds = [taskId];
      this.setState(updatedState);
      BoardHelpers.HandleTaskCreation(
        board,
        listId,
        updatedState.tasks,
        task,
        updatedState.lists[listId].taskIds
      )
        .then((renderedBoard) => {
          this.context.setRenderedBoard(renderedBoard);
        })
        .catch((err) => console.log(err));
    } else {
      taskCount = 0;
      taskId = `task-${taskCount + 1}`;
      task = {
        id: taskId,
        title: title,
      };
      updatedState.tasks = {
        [taskId]: task,
      };
      if (updatedState.lists[listId].taskIds)
        updatedState.lists[listId].taskIds.push(taskId);
      else updatedState.lists[listId].taskIds = [taskId];
      this.setState(updatedState);
      BoardHelpers.HandleTaskCreation(
        board,
        listId,
        updatedState.tasks,
        task,
        updatedState.lists[listId].taskIds
      )
        .then((renderedBoard) => {
          this.context.setRenderedBoard(renderedBoard);
        })
        .catch((err) => console.log(err));
    }
  };

  handleAddAnotherListButtonClick = (event) => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
    });
  };

  handleNameInputClose = () => {
    this.setState({
      ...this.state,
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <div
              style={{ display: "flex" }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.listOrder &&
                this.state.lists &&
                this.state.listOrder.map((listId, index) => {
                  const list = this.state.lists[listId];
                  if (list && list.id) {
                    return (
                      <ListColumn
                        key={list.id}
                        list={list}
                        taskMap={this.state.tasks}
                        index={index}
                        createNewTask={this.createNewTask}
                      />
                    );
                  }
                })}
              {provided.placeholder}
              <div style={{ padding: "0px 8px" }}>
                <IconButton
                  onClick={(e) => this.handleAddAnotherListButtonClick(e)}
                  className={classes.addAnotherList}
                  aria-label="add-another-list"
                >
                  <Grid item xs={10}>
                    <Typography className={classes.buttonText} component="p">
                      Add another list
                    </Typography>
                  </Grid>
                  <Grid item container xs={2}>
                    <Add />
                  </Grid>
                </IconButton>
                <AddListModal
                  anchorEl={this.state.anchorEl}
                  handleClose={this.handleNameInputClose}
                  createNewList={this.createNewList}
                />
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default withStyles(canvasStyles)(DndCanvas);
