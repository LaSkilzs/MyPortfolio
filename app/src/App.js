import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import background from "./images/clouds.jpg";

function App() {
  console.log(background);
  return (
    <Paper>
      <Typography variant="h1" component="h2">
        La Fountain
      </Typography>
      <Typography variant="h3" component="h3">
        Creator
      </Typography>
      <Button variant="contained" color="secondary">
        View My Work
      </Button>
    </Paper>
  );
}

export default App;
