import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { withStyles } from "@material-ui/core/styles";
import { Add, AttachFile, Comment } from "@material-ui/icons";
import { Paper, Grid, Typography, IconButton } from "@material-ui/core";
import { EditTaskModal, UserAvatar } from "components";
import { UIContext } from "provider/UIProvider";
import { GetUniqueId } from "api/Common";
import { UploadFile } from "firebase/Upload";
import { TaskHelpers } from "helpers";
import { taskStyles } from "./styles";

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

  handleSearchedImageClick = (regular) => {
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
      assigments = assigments.filter((id) => id !== uid);
      this.setState({ assigments: assigments }, () => {
        TaskHelpers.HandleTaskPropertyUpdate(
          this.context.renderedBoard,
          this.props.task.id,
          "assigments",
          this.state.assigments
        ).catch((err) => console.log(err));
      });
    }
  };

  componentDidMount() {
    const {
      coverImage,
      title,
      description,
      comments,
      attachments,
      labels,
      assigments,
    } = this.props.task;
    this.setState({
      coverImage: coverImage || "",
      title: title || " ",
      description: description || " ",
      comments: comments || [],
      attachments: attachments || [],
      labels: labels || [],
      assigments: assigments || [],
    });
  }

  render() {
    const { classes, task, index } = this.props;
    const {
      coverImage,
      title,
      comments,
      attachments,
      labels,
      assigments,
    } = this.state;
    const { renderedBoard } = this.context;
    let avatarCounter = 0;

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
              style={{ transform: snapshot.isDragging && "rotate(3.5deg)" }}
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
              {coverImage && (
                <img
                  alt="task-cover"
                  className={classes.cover}
                  src={coverImage + "&q=80&w=400"}
                />
              )}
              <Grid container>
                <Grid item xs={10}>
                  <Typography
                    className={classes.title}
                    variant="body1"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  justify="flex-start"
                  style={{ marginBottom: "16px" }}
                >
                  {labels &&
                    labels.map((label, index) => {
                      return (
                        <Grid
                          className={classes.labelContainer}
                          style={{ backgroundColor: label.color.hex }}
                          item
                          container
                          alignItems="center"
                          justify="space-around"
                          index={index}
                        >
                          <Grid item xs={10}>
                            <Typography className={classes.labelText}>
                              {label.input}
                            </Typography>
                          </Grid>
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
              <Grid item container xs={12}>
                {assigments &&
                  renderedBoard &&
                  renderedBoard.userData.map((user, index) => {
                    if (
                      assigments.includes(user.uid) &&
                      !(assigments.length > 2 && avatarCounter > 0)
                    ) {
                      avatarCounter += 1;
                      return (
                        <Grid
                          item
                          style={{
                            width: "35px",
                            height: "35px",
                            marginRight: "8px",
                          }}
                        >
                          <UserAvatar
                            user={user}
                            styles={classes.memberAvatar}
                            isTask={true}
                          />
                        </Grid>
                      );
                    }
                    if (index === renderedBoard.userData.length - 1)
                      avatarCounter = 0;
                  })}
                {assigments && assigments.length > 2 ? (
                  <Grid item className={classes.othersContainer}>
                    <Typography
                      className={classes.othersInfo}
                      variant="body2"
                      gutterBottom
                    >
                      +{assigments.length - 1} Others
                    </Typography>
                  </Grid>
                ) : (
                  <Grid
                    item
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                  >
                    <IconButton className={classes.addButton}>
                      <Add style={{ color: "white" }} />
                    </IconButton>
                  </Grid>
                )}
                <Grid
                  item
                  container
                  xs
                  justify="flex-end"
                  className={classes.propertyCounter}
                >
                  {comments && comments.length > 0 && (
                    <Grid
                      item
                      container
                      justify="center"
                      alignItems="center"
                      xs={4}
                      style={{ maxWidth: "35px" }}
                    >
                      <Comment className={classes.propertyIcon} />
                      {comments.length}
                    </Grid>
                  )}
                  {attachments && attachments.length > 0 && (
                    <Grid
                      item
                      container
                      justify="center"
                      alignItems="center"
                      xs={4}
                      style={{ maxWidth: "35px" }}
                    >
                      <AttachFile className={classes.propertyIcon} />
                      {attachments.length}
                    </Grid>
                  )}
                </Grid>
              </Grid>
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
