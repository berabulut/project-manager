import { makeStyles } from "@material-ui/core/styles";

export const labelStyles = makeStyles((theme) => ({
  container: {
    borderRadius: "8px",
    padding: "8px",
  },
  text: {
    fontWeight: "500",
    fontSize: "0.825rem",
    lineHeight: "14px",
    letterSpacing: "-0.035em",
    textAlign: "center",
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
