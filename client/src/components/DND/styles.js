
export const taskStyles = (theme) => ({
  container: {
    border: "1px solid lightgrey",
    borderRadius: "2px",
    padding: "8px",
    marginBottom: "8px",
    backgroundColor: "white",
  },
  dragging: {
    border: "1px solid lightgrey",
    borderRadius: "2px",
    padding: "8px",
    marginBottom: "8px",
    backgroundColor: "lightgreen",
  },
});

export const columnStyles = (theme) => ({
  container: {
    margin: "8px",
    border: "1px solid lightgrey",
    backgroundColor: "white",
    borderRadius: "2px",
    width: "220px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    padding: "8px",
  },
  taskList: {
    padding: "8px",
    transition: "background-color 0.2s ease",
    backgroundColor: "inherit",
    flexGrow: "1",
    minHeight: "100px",
  },
  dragging: {
    padding: "8px",
    transition: "background-color 0.2s ease",
    backgroundColor: "lightgrey",
    flexGrow: "1",
    minHeight: "100px",
  },
  footer: {

  },
  addAnotherCard: {
    borderRadius: "8px",
    width: "100%",
    textAlign: "start"
  },
  buttonText: {
    fontSize: "0.875rem",
    fontWeight: "500"
  }
});
