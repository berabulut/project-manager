import { makeStyles } from "@material-ui/core/styles";
export const commentStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100px",
    padding: theme.spacing(2),
    borderBottom: "1px solid #F2F2F2",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  userName: {
    fontWeight: 500,
    fontSize: "0.85rem",
    lineHeight: "18px",
    letterSpacing: "-0.035em",
    color: "black",
  },
  date: {
    fontWeight: 500,
    fontSize: "0.725rem",
    lineHeight: "14px",
    letterSpacing: "-0.035em",
    color: "#BDBDBD",
  },
  commentButton: {
    fontWeight: "500",
    fontSize: "0.725rem",
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    color: "rgba(130,130,130,0.7)",
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
      color: "rgba(130,130,130,1)",
    },
  },
  comment: {
    fontWeight: "normal",
    fontSize: "0.875rem",
    lineHeight: "19px",
    letterSpacing: "-0.035em",
    whiteSpace: "pre-line",
  },
  avatar: {
    borderRadius: "8px"
  }
}), { index: 1 });
