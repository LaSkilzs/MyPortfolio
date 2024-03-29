import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginLeft: "10rem",
    background: "transparent"
  }
});

export default function DotsMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    props.handleRight();
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    props.handleLeft();
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <MobileStepper
      variant="dots"
      steps={props.steps}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === 5}
          style={{ color: "white" }}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          style={{ color: "white" }}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
