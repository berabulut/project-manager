import { withStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

export const taskStyles = (theme) => ({
  container: {
    marginBottom: "8px",
  },
  dragging: {
    marginBottom: "8px",
  },
  paper: {
    padding: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    transition: "all .2s ease-in-out",
    height: "100%",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
    },
  },
  cover: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: theme.spacing(1.5),
    objectFit: "contain",
    maxHeight: "200px",
    background: "#F2F2F2",
  },
  title: {
    fontWeight: "500",
    letterSpacing: "-0.035em",
    marginBottom: theme.spacing(1.5),
  },
  boardBox: {
    marginRight: theme.spacing(1),
  },
  labelContainer: {
    borderRadius: "14px",
    padding: "3px 0px",
    width: "60px",
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1.5),
  },
  labelText: {
    fontWeight: "500",
    fontSize: "0.625rem",
    lineHeight: "14px",
    letterSpacing: "-0.035em",
    paddingBottom: "4px",
    paddingTop: "4px",
    textAlign: "center",
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  avatar: {
    borderRadius: "8px",
  },
  othersContainer: {
	display: "flex",
	alignItems: "center"
  },
  othersInfo: {
	  fontWeight: "500"
  }
});

export const MemberAvatar = (props) => (
  <Avatar
    style={{ borderRadius: "8px", width: "35px", height: "35px" }}
    src={props.picture}
    alt={props.name}
  />
);
