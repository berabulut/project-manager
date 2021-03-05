import { makeStyles } from "@material-ui/core/styles";

export const sectionStyles = makeStyles((theme) => ({
  sectionTitle: {
    fontWeight: "600",
    fontSize: "0.725rem",
    letterSpacing: "-0.035em",
    color: "#BDBDBD",
    marginLeft: theme.spacing(1),
    lineHeight: "1rem",
  },
  sectionIcon: {
    fontSize: "1rem",
    color: "#BDBDBD",
  },
}));
