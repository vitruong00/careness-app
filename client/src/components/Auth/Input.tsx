import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export interface InputProps {
  name?: string;
  handleChange?: any;
  label?: any;
  half?: any;
  autoFocus?: any;
  type?: any;
  handleShowPassword?: any;
}

const Input = (props: InputProps) => (
  <Grid item xs={12} sm={props.half ? 6 : 12}>
    <TextField
      onChange={props.handleChange}
      variant="outlined"
      required
      fullWidth
      label={props.label}
      autoFocus={props.autoFocus}
      type={props.type}
      //   InputProps={
      //     name === "password"
      //       ? {
      //           endAdornment: (
      //             <InputAdornment position="end">
      //               <IconButton onClick={props.handleShowPassword}>
      //                 {props.type === "password" ? <Visibility /> : <VisibilityOff />}
      //               </IconButton>
      //             </InputAdornment>
      //           ),
      //         }
      //       : null
      //   }
    />
  </Grid>
);

export default Input;
