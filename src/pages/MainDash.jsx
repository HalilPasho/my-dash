import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormInput from "../components/FormInfo";
import PickCategories from "../components/PickCategories";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditorInput from "../components/ContentEditor";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
  container: {
    display: "flex",
    padding: "10px 50px",
  },
  editor: {
    padding: "10px",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ textAlign: "center", display: "contents" }}>
        <EventNoteIcon
          color="primary"
          fontSize="large"
          style={{
            paddingRight: "10px",
            paddingTop: "4px",
          }}
        />
        <h1>Dashboard</h1>
      </div>
      <Paper className={classes.container}>
        <FormInput />
        <PickCategories />
      </Paper>
      <Paper className={classes.editor}>
        <EditorInput />
      </Paper>
    </div>
  );
}
