export const listStyles = (theme) => ({
	container: {
	  margin: "8px",
	  border: "1px solid lightgrey",
	  backgroundColor: "#f5f5f5",
	  borderRadius: "8px",
	  width: "280px",
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
  
  