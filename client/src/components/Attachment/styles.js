import { makeStyles } from "@material-ui/core/styles";

export const attachmentStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
	height: "66px",
    objectFit: "cover",
	borderRadius: "8px"
  },
  filePlaceholder: {
	  borderRadius: "8px",
	  width: "100%",
	  height: "66px",
	  backgroundColor: "#E0E0E0",
	  display: "flex",
	  alignItems: "center",
	  justifyContent: "center"
  },
  text: {
	fontSize: "0.725rem",
	fontWeight: "500",
	lineHeight: "15px",
	letterSpacing: "-0.035rem",
	color: "#4F4F4F"
  },
  date: {
	color: "#BDBDBD",
	fontSize: "0.65rem",
	fontWeight: "500",
	lineHeight: "12px",
	letterSpacing: "-0.035rem",
	marginTop: theme.spacing(1),
	marginBottom: theme.spacing(0.5)
  },
  title: {
	fontSize: "0.725rem",
	fontWeight: "500",
	lineHeight: "15px",
	letterSpacing: "-0.035rem",
	color: "#4F4F4F",
	marginBottom: "8px"
  }
}));
