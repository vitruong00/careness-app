import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    position: "relative",
    top: "150px",
  },
  paper: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  submit: {},
  googleButton: {},
}));
