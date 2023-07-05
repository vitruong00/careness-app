import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

export default makeStyles(() => ({
  appBar: {
    margin: "15px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  container: {
    position: "relative",
    top: "70px",
  },
}));

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e8f4fd",
      main: "#e3f2fd",
      dark: "#9ea9b1",
      contrastText: "#000",
    },
  },
});
