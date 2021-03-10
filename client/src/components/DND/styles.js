
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
    "&:hover":{
      cursor: "pointer",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
    }
  },
  cover: {
    width: "100%",
    borderRadius: "12px",
  },
  title: {
    fontWeight: "500",
    letterSpacing: "-0.035em",
    marginBottom: theme.spacing(1.5),
  },
  boardBox: {
    marginRight: theme.spacing(1),
  },
  avatar: {
    borderRadius: "8px"
  },
});

export const columnStyles = (theme) => ({
  container: {
    margin: "8px",
    border: "1px solid lightgrey",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    padding: "8px",
    fontWeight: "600"
  },
  taskList: {
    padding: "8px",
    transition: "background-color 0.2s ease",
    backgroundColor: "inherit",
    flexGrow: "1",
  },
  dragging: {
    padding: "8px",
    transition: "background-color 0.2s ease",
    backgroundColor: "lightgrey",
    flexGrow: "1",
    minHeight: "100px",
  },
  addAnotherCard: {
    borderRadius: "8px",
    width: "100%",
    textAlign: "start",
  },
  addAnotherList: {
    maxHeight: "45px",
    width: "250px",
    marginTop: "8px",
    borderRadius: "8px",
    textAlign: "start",
    alignItems: "start",
    backgroundColor: "hsl(0deg 0% 100% / 80%)",
    "&:hover": {
      backgroundColor: "hsl(0deg 0% 100% / 90%)",
    },
  },
  buttonText: {
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  listNameMenu: {
    width: "250px",
  },
});

