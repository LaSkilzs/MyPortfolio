import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  btn: {
    padding: "1rem",
    margin: "1rem",
    border: " 3px white solid",
    width: "15vw",
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
    "&:hover": {
      background: "#7163b2",
      color: "white"
    }
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
