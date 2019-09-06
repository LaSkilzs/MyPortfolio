import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Back from "../components/project/Back";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  item: {
    display: "flex",
    justifyContent: "center"
  },
  btn: {
    padding: "0.8rem",
    margin: "1.5rem",
    border: " 3px white solid",
    minWidth: "7rem",
    color: "white",
    fontSize: ".8rem",
    "&:hover": {
      background: "#7163b2"
    }
  },
  container: {
    width: "25vw"
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item md={4} className={classes.item}>
          <Button className={classes.btn} onClick={handleOpen}>
            info
          </Button>
          <Button className={classes.btn} onClick={handleOpen}>
            photos
          </Button>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Grid
            item
            md={4}
            key={props.project.id}
            onClick={() => props.handleImage(props.project.id)}
          >
            <p className={classes.p}>Skills: {props.project.language}</p>
            <p className={classes.summary}>Summary: {props.project.summary}</p>
            <p className={classes.contact}>
              <span className={classes.span}>
                {props.project.links["github"]}s
              </span>
              <span className={classes.span}>
                {props.project.links["youtube"]}
              </span>
              <span className={classes.span}>
                {props.project.links["deployed"]}
              </span>
            </p>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
