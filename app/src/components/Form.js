import React, { Component } from "react";
import { InputBase, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import formStyles from "../assets/formStyles";

class Form extends Component {
  render() {
    let { classes } = this.props;
    return (
      <React.Fragment>
        <form className={classes.form}>
          <InputBase placeholder="name" className={classes.input} />
          <InputBase placeholder="email" className={classes.input} />
          <InputBase placeholder="message" row="6" className={classes.input} />
          <Button className={classes.btn}>Submit</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(formStyles)(Form);
