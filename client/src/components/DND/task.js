import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Box, Typography, Avatar } from "@material-ui/core";
import { EditTaskModal } from "components";
import { UIContext } from "provider/UIProvider";
import { GetUniqueId } from "functions/BoardFunctions";
import { UploadFile } from "firebase/Upload";
import { TaskHelpers } from "helpers";
import { taskStyles } from "./styles";

// const image =
//   "https://images.unsplash.com/photo-1612689690865-2035b60c449b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      coverImage: "",
      title: "",
      description: "",
      comments: [],
      attachments: [],
      labels: [],
      assigments: [],
    };
  }

  static contextType = UIContext;

  handleTaskClick = () => {
    this.setState({ modalVisible: true });
  };

  closeEditModal = () => {
    this.setState({ modalVisible: false });
  };

  handleTitleChange = (title) => {
    this.setState({ title: title });
    TaskHelpers.HandleTaskPropertyUpdate(
      this.context.renderedBoard,
      this.props.task.id,
      "title",
      title
    ).catch((err) => console.log(err));
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

  submitComment = (comment) =>
    new Promise((resolve, reject) => {
      this.setState(
        {
          comments: [...this.state.comments, comment],
        },
        async () => {
          const response = await TaskHelpers.HandleTaskPropertyUpdate(
            this.context.renderedBoard,
            this.props.task.id,
            "comments",
            this.state.comments
          );
          if (response) {
            resolve("Property updated successfully!");
          } else {
            reject("Property update failed");
          }
        }
      );
    });
  deleteComment = (commentId) => {
    let comments = this.state.comments;
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      if (comment.id === commentId) {
        // remove id matched comment
        comments.splice(i, 1);
        this.setState({ comments: comments }, () => {
          TaskHelpers.HandleTaskPropertyUpdate(
            this.context.renderedBoard,
            this.props.task.id,
            "comments",
            this.state.comments
          ).catch((err) => console.log(err));
        });
      }
    }
  };
  editComment = (commentId, comment) => {
    let comments = this.state.comments;
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].id === commentId) {
        // remove id matched comment
        comments[i].text = comment;
        this.setState({ comments: comments }, () => {
          TaskHelpers.HandleTaskPropertyUpdate(
            this.context.renderedBoard,
            this.props.task.id,
            "comments",
            this.state.comments
          ).catch((err) => console.log(err));
        });
      }
    }
  };

  addAttachment = (file) =>
    new Promise(async (resolve, reject) => {
      const id = await GetUniqueId();
      const fileUrl = await UploadFile(file, id.data);
      if (fileUrl) {
        this.setState(
          {
            attachments: [
              ...this.state.attachments,
              {
                id: id.data,
                name: file.name,
                uploadDate: file.uploadDate,
                fileType: file.fileType,
                fileUrl: fileUrl,
              },
            ],
          },
          async () => {
            const response = await TaskHelpers.HandleTaskPropertyUpdate(
              this.context.renderedBoard,
              this.props.task.id,
              "attachments",
              this.state.attachments
            );
            if (response) {
              resolve("Property updated successfully!");
            } else {
              reject("Property update failed");
            }
          }
        );
      }
    });

  deleteAttachment = (attachmentId) => {
    let attachments = this.state.attachments;
    for (let i = 0; i < attachments.length; i++) {
      const attachment = attachments[i];
      if (attachment.id === attachmentId) {
        // remove id matched comment
        attachments.splice(i, 1);
        this.setState({ attachments: attachments }, () => {
          TaskHelpers.HandleTaskPropertyUpdate(
            this.context.renderedBoard,
            this.props.task.id,
            "attachments",
            this.state.attachments
          ).catch((err) => console.log(err));
        });
      }
    }
  };

  handleSearchedImageClick = (regular, raw) => {
    this.setState(
      {
        coverImage: regular,
      },
      () => {
        TaskHelpers.HandleTaskPropertyUpdate(
          this.context.renderedBoard,
          this.props.task.id,
          "coverImage",
          this.state.coverImage
        );
      }
    );
  };

  addLabel = (label) => {
    this.setState(
      {
        labels: [...this.state.labels, label],
      },
      () => {
        TaskHelpers.HandleTaskPropertyUpdate(
          this.context.renderedBoard,
          this.props.task.id,
          "labels",
          this.state.labels
        );
      }
    );
  };

  deleteLabel = (labelId) => {
    let labels = this.state.labels;
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      if (label.id === labelId) {
        // remove id matched label
        labels.splice(i, 1);
        this.setState({ labels: labels }, () => {
          TaskHelpers.HandleTaskPropertyUpdate(
            this.context.renderedBoard,
            this.props.task.id,
            "labels",
            this.state.labels
          ).catch((err) => console.log(err));
        });
      }
    }
  };

  assignMemberToTask = (uid) => {
    this.setState(
      {
        assigments: [...this.state.assigments, uid],
      },
      () => {
        TaskHelpers.HandleTaskPropertyUpdate(
          this.context.renderedBoard,
          this.props.task.id,
          "assigments",
          this.state.assigments
        );
      }
    );
  };

  removeAssignedMember = (uid) => {
    let assigments = this.state.assigments;
    for (let i = 0; i < assigments.length; i++) {
      assigments = assigments.filter((id) => id !== uid)
      this.setState({ assigments: assigments }, () => {
        TaskHelpers.HandleTaskPropertyUpdate(
          this.context.renderedBoard,
          this.props.task.id,
          "assigments",
          this.state.assigments
        ).catch((err) => console.log(err));
      });
    }
  }

  componentDidMount() {
    const {
      coverImage,
      title,
      description,
      comments,
      attachments,
      labels,
      assigments
    } = this.props.task;
    this.setState({
      coverImage: coverImage || "",
      title: title || " ",
      description: description || " ",
      comments: comments || [],
      attachments: attachments || [],
      labels: labels || [],
      assigments: assigments || []
    });
  }

  render() {
    const { classes, users, image, task, index } = this.props;
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            className={
              snapshot.isDragging ? classes.dragging : classes.container
            }
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Paper
              className={classes.paper}
              onClick={this.handleTaskClick}
              onMouseEnter={() =>
                this.setState({
                  taskHover: true,
                })
              }
              onMouseLeave={() =>
                this.setState({
                  taskHover: false,
                })
              }
            >
              {image && (
                <img className={classes.cover} src={image + "&q=80&w=400"} />
              )}
              <Grid container>
                <Grid item xs={10}>
                  <Typography
                    className={classes.title}
                    variant="body1"
                    gutterBottom
                  >
                    {task.title}
                  </Typography>
                </Grid>
              </Grid>
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
              editTitle={this.handleTitleChange}
              editDescription={this.handleDescriptionChange}
              coverImage={this.state.coverImage}
              labels={this.state.labels}
              listTitle={this.props.listTitle}
              taskTitle={this.state.title}
              description={this.state.description}
              comments={this.state.comments}
              assigments={this.state.assigments}
              addImageToTask={this.handleSearchedImageClick}
              submitComment={this.submitComment}
              deleteComment={this.deleteComment}
              editComment={this.editComment}
              attachments={this.state.attachments}
              addAttachment={this.addAttachment}
              deleteAttachment={this.deleteAttachment}
              addLabel={this.addLabel}
              deleteLabel={this.deleteLabel}
              assignMemberToTask={this.assignMemberToTask}
              removeAssignedMember={this.removeAssignedMember}
            />
          </div>
        )}
      </Draggable>
    );
  }
}

export default withStyles(taskStyles)(Task);
