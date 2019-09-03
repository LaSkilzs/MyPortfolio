import React from "react";
import { Typography, Divider, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  header: {
    textAlign: "center",
    color: "white"
  },
  divider: {
    margin: "0 auto",
    color: "white"
  }
});

const Header = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h1" className={classes.header}>
        {props.name}
      </Typography>
      <Divider className={classes.divider} />
    </React.Fragment>
  );
};

export default Header;
