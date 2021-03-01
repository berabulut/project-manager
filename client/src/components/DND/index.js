import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { IconButton, Grid, Typography, Button } from "@material-ui/core";
import { AddListModal } from "components";
import { withStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import initialData from "./initial-data";
import Column from "./column";
import { columnStyles } from "./styles";

class InnerList extends React.Component {
  render() {
    const { column, taskMap, index, createNewTask } = this.props;
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return (
      <div>
        <Column
          column={column}
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
    this.state = initialData;
    this.state.anchorEl = null;
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      // triggers when reordering lists not tasks
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };

      console.log(newState);

      this.setState(newState);
      return;
    }

    const home = this.state.columns[source.droppableId];
    const foreign = this.state.columns[destination.droppableId];

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
        columns: {
          ...this.state.columns,
          [newHome.id]: newHome,
        },
      };

      console.log(newState);

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const newState = {
      // only triggered by moving from one list to another
      ...this.state,
      columns: {
        ...this.state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    this.setState(newState);
  };

  createNewList = (title) => {
    let updatedState = { ...this.state };
    const listCount = Object.keys(updatedState.columns).length;

    const columnId = `column-${listCount + 1}`;

    updatedState.columns[columnId] = {
      id: columnId,
      title: title,
      taskIds: [],
    };

    updatedState.columnOrder.push(columnId);
    this.setState({ updatedState });
  };

  createNewTask = (columnId) => {
    let updatedState = { ...this.state };
    const taskCount = Object.keys(updatedState.tasks).length;

    const taskId = `task-${taskCount + 1}`;

    updatedState.tasks[taskId] = {
      id: taskId,
      content: "agu bugu",
    };

    updatedState.columns[columnId].taskIds.push(taskId);

    this.setState({ updatedState });
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
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div
              style={{ display: "flex" }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    taskMap={this.state.tasks}
                    index={index}
                    createNewTask={this.createNewTask}
                  />
                );
              })}
              {provided.placeholder}
              <div>
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
                <AddListModal anchorEl={this.state.anchorEl} handleClose={this.handleNameInputClose} createNewList={this.createNewList}/>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default withStyles(columnStyles)(TestDrag);
