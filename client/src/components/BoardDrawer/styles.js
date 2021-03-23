import { makeStyles } from "@material-ui/core/styles";

export const drawerStyles = makeStyles((theme) => ({
  drawer: {
    width: "370px",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    },
    height: "100%",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    boxShadow: "0px 4px 12px rgb(0 0 0 / 5%)",
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1" 
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888"
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555"
    },
  },
  gridItem: {
    marginBottom: theme.spacing(2),
  },
  menuTitle: {
    fontWeight: "600",
    lineHeight: "18px",
    letterSpacing: "-0.035em",
    color: "#333333",
  },
  closeButton: {
    padding: "8px",
  },
  avatar: {
    borderRadius: "8px",
    width: "35px",
    height: "35px",
  },
  memberName: {
    fontWeight: "600",
    fontSize: "0.825rem",
    lineHeight: "18px",
    letterSpacing: "-0.035em",
    color: "#333333",
  },
  date: {
    fontWeight: "500",
    lineHeight: "14px",
    fontSize: "0.725rem",
    letterSpacing: "-0.035em",
    color: "#BDBDBD",
  },
  description: {
    fontSize: "0.925rem",
    lineHeight: "21px",
    letterSpacing: "-0.035em",
    whiteSpace: "pre-line",
  },
  adminText: {
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    fontSize: "0.75rem",
    fontWeight: "500",
    color: "#828282",
    textAlign: "center",
  },
  redButton: {
    border: "1px solid #EB5757",
    borderRadius: "8px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#eb57570d",
    },
  },
  redButtonText: {
    lineHeight: "15px",
    letterSpacing: "-0.035em",
    fontSize: "0.725rem",
    fontWeight: "600",
    color: "#EB5757",
  },
}), { index: 1 });
