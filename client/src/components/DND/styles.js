
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
    borderRadius: "8px",
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
  addAnotherCard: {
    borderRadius: "8px",
    width: "100%",
    textAlign: "start"
  },
  addAnotherList: {
    maxHeight: "45px",
    width: "220px",
    marginTop: "8px",
    borderRadius: "8px",
    textAlign: "start",
    alignItems: "start",
    backgroundColor: "hsl(0deg 0% 100% / 80%)",
    "&:hover": {
      backgroundColor: "hsl(0deg 0% 100% / 90%)",
    }
  },
  buttonText: {
    fontSize: "0.875rem",
    fontWeight: "500"
  }
});

