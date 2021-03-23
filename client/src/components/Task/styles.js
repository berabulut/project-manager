
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
    alignItems: "flex-end",
    marginRight: theme.spacing(1),
  },
  othersInfo: {
    fontWeight: "500",
  },
  addButton: {
    height: "100%",
    width: "100%",
    borderRadius: "8px",
    background: "#2F80ED",
    "&:hover": {
      background: "#2059A5",
    },
  },
  propertyCounter: {
    color: "#BDBDBD",
    fontSize: "0.825rem",
  },
  propertyIcon: {
    color: "#BDBDBD",
    fontSize: "1rem",
    marginRight: theme.spacing(0.2),
  },
  memberAvatar: {
    borderRadius: "8px",
    width: "35px",
    height: "35px",
  },
});
