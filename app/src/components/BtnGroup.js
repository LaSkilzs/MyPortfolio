import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem"
  },
  btn: {
    padding: "1rem",
    margin: "1rem",
    border: " 3px white solid",
    width: "10vw",
    color: "white",
    fontSize: ".8rem"
  }
});

const BtnGroup = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        {props.names.map((name, idx) => (
          <Button
            key={idx}
            className={classes.btn}
            onClick={() => props.handleClick(name)}
          >
            {name}
          </Button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default BtnGroup;
