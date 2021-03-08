import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Avatar } from "@material-ui/core";
import { EditTaskModal } from "components";
import { UIContext } from "provider/UIProvider";
import { TaskHelpers } from "helpers";
import { UpdateTaskProperty } from "functions/BoardFunctions";
import { taskStyles } from "./styles";

// const image =
//   "https://images.unsplash.com/photo-1612689690865-2035b60c449b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      description: "",
    };
  }

  static contextType = UIContext;

  handleTaskClick = () => {
    this.setState({ modalVisible: true });
  };

  closeEditModal = () => {
    this.setState({ modalVisible: false });
  };

  handleDescriptionChange = (description) => {
    this.setState({ description: description });
    TaskHelpers.HandleTaskPropertyUpdate(
      this.context.renderedBoard,
      this.props.task.id,
      "description",
      description
    ).catch((err) => console.log(err));
  };

  componentDidMount() {
    this.setState({
      description: this.props.task.description || " ",
    });
    console.log(this.context)
  }

  render() {
    const { classes, users, image } = this.props;
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
            <Paper className={classes.paper} onClick={this.handleTaskClick}>
              {image && (
                <img className={classes.cover} src={image + "&q=80&w=400"} />
              )}
              <Typography
                className={classes.title}
                variant="body1"
                gutterBottom
              >
                {this.props.task.title}
              </Typography>
              <Box display="flex">
                {users &&
                  users.map((val, key) => {
                    if (key < 3) {
                      return (
                        <Box
                          key={key}
                          alignSelf="center"
                          className={classes.boardBox}
                        >
                          <Avatar
                            src={val.picture}
                            className={classes.avatar}
                            alt="Remy Sharp"
                          />
                        </Box>
                      );
                    }
                  })}
                {users && users.length > 3 && (
                  <Box p={1} flexGrow={1}>
                    <Typography
                      className={classes.title}
                      variant="body1"
                      gutterBottom
                    >
                      +{users.length - 3} Others
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>
            <EditTaskModal
              open={this.state.modalVisible}
              handleClose={this.closeEditModal}
              editDescription={this.handleDescriptionChange}
              description={this.state.description}
            />
          </div>
        )}
      </Draggable>
    );
  }
}

export default withStyles(taskStyles)(Task);
