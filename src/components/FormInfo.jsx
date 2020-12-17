import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300,
    },
  },
  maintitle: {
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif",
    color: "#232323",
  },
}));

export default function FormInput() {
  const classes = useStyles();
  const [title, setTitle] = useState("");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.maintitle}>Enter Title</div>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
    </form>
  );
}
