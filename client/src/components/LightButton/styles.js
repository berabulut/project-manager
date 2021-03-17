import { makeStyles } from "@material-ui/core/styles";

export const buttonStyles = makeStyles((theme) => ({
  button: {
    border: "1px solid #BDBDBD",
    borderRadius: "8px",
    height: "24px",
  },
  text: {
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    fontSize: "0.725rem",
    fontWeight: "600",
  },
  icon: {
    fontSize: "1rem",
  },
}));
