import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  btn: {
    padding: "1rem",
    margin: "1rem"
  }
});

const BtnGroup = props => {
  console.log(props);
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        {props.names.map((name, idx) => (
          <Button key={idx} className={classes.btn}>
            {name}
          </Button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default BtnGroup;
