import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: "12px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "100%",
    margin: "10px 0",
  },
  buttonsWrapper: {
    display: "flex",
    width: "100%",
    gap: "15px",
    justifyContent: "space-between",
    marginTop: "5px",
  },
}));
