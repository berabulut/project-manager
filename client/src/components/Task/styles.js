
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