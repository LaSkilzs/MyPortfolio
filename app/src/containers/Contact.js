import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import { makeStyles, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    margin: 0,
    marginLeft: "90px",
    height: "56rem",
    backgroundImage: `url("https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1260")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  }
});
const Contact = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Header name={"Contact Me"} />
      <Grid container>
        <Grid item md={12}>
          <Form />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Contact;
