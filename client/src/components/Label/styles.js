import { makeStyles } from "@material-ui/core/styles";

export const labelStyles = makeStyles((theme) => ({
  container: {
    borderRadius: "14px",
    padding: "6px 8px",
  },
  text: {
    fontWeight: "500",
    fontSize: "0.725rem",
    lineHeight: "14px",
    letterSpacing: "-0.035em",
    paddingBottom: "4px",
    paddingTop: "4px",
    textAlign: "center",
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  deleteButton: {
    padding: "0px",
    marginLeft: "-8px",
    marginTop: "-8px",
  },
}));
