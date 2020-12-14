import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: "auto",
    placeContent: "flex-end",
  },
  formControl: {
    margin: theme.spacing(3),
    borderLeft: "1px solid #d8d8d8",
    width: " 35%",
    paddingLeft: "25%",
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [checkedVal, setCheckedVal] = useState([]);
  const [checked, setChecked] = useState({
    React: false,
    HTML: false,
    CSS: false,
    JavaScript: false,
    Python: false,
    ReactNative: false,
  });

  const updateUsesTools = (item) => {
    if (checkedVal.includes(item)) {
      setCheckedVal(checkedVal.filter((tool) => tool !== item));
    } else {
      setCheckedVal([...checkedVal, item]); // or push
    }
  };
  console.log(checkedVal);
  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });

    updateUsesTools(event.target.name);
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign Tags</FormLabel>
        <FormGroup style={{ display: "unset" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.React}
                onChange={handleChange}
                name="React"
                color="primary"
              />
            }
            label="React"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.Html}
                onChange={handleChange}
                name="HTML"
                color="primary"
              />
            }
            label="Html"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.Css}
                onChange={handleChange}
                name="CSS"
                color="primary"
              />
            }
            label="Css"
          />
        </FormGroup>
        <FormGroup style={{ display: "unset" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.Javascript}
                onChange={handleChange}
                name="JavaScript"
                color="primary"
              />
            }
            label="Javascript"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.Python}
                onChange={handleChange}
                name="Python"
                color="primary"
              />
            }
            label="Python"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.Reactnative}
                onChange={handleChange}
                name="ReactNative"
                color="primary"
              />
            }
            label="Reactnative"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
