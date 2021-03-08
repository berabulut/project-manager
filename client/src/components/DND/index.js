import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { IconButton, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import { AddListModal } from "components";
import { UserContext } from "provider/UserProvider";
import { BoardHelpers } from "helpers";
import Column from "./column";
import { columnStyles } from "./styles";

class InnerList extends React.Component {
  render() {
    const { list, taskMap, index, createNewTask } = this.props;
    let tasks;
    if (list.taskIds) {
      tasks = list.taskIds.map((taskId) => taskMap[taskId]);
    }
    return (
      <div>
        <Column
          list={list}
          tasks={tasks}
          index={index}
          createNewTask={createNewTask}
        />
      </div>
    );
  }
}

class TestDrag extends React.Component {
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
    console.log(this.props);
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

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "list") {
      // triggers when reordering lists not tasks
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

    if (home === foreign) {
      // triggers when reordering in the same list
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

    // moving from one list to another
    if (home.taskIds && foreign.taskIds) {
      const homeTaskIds = Array.from(home.taskIds);
      homeTaskIds.splice(source.index, 1);
      const newHome = {
        ...home,
        taskIds: homeTaskIds,
      };
      // i am checking it because sometimes it's bugged
      const foreignTaskIds = Array.from(foreign.taskIds);
      foreignTaskIds.splice(destination.index, 0, draggableId);
      const newForeign = {
        ...foreign,
        taskIds: foreignTaskIds,
      };

      const newState = {
        // only triggered by moving from one list to another
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
    }
  };

  createNewList = (title) => {
    let updatedState = { ...this.state };
    let listCount;
    let listId;
    let list;
    const board = this.context.renderedBoard;

    if (updatedState.lists !== undefined) {
      // board doesn't have any list
      listCount = Object.keys(updatedState.lists).length;
      listId = `list-${listCount + 1}`;
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
      listCount = 0;
      listId = `list-${listCount + 1}`;
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
                  if (list !== undefined) {
                    return (
                      <InnerList
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
                    <Add className={classes.menuIcon} />
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

export default withStyles(columnStyles)(TestDrag);
