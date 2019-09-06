import React from "react";
import "../containers/css/style.css";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  overrides: {
    MuiGrid: {
      root: {
        margin: 0,
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(https://cdn.pixabay.com/photo/2019/05/22/20/38/lavender-4222480_1280.jpg)`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        [breakpoints.down(1100)]: {
          marginLeft: 0,
          height: "110vh"
        }
      },
      item: {
        diplay: "flex",
        justifyContent: "center"
      }
    },
    MuiButton: {
      root: {
        display: "flex",
        color: "white",
        fontWeight: "bold",
        fontSize: "2rem",
        fontFamily: "Slabo 27px serif",
        background: "transparent",
        border: "white 2px solid",
        marginTop: "32rem",
        margin: "0 auto",
        [breakpoints.down(1100)]: {
          marginLeft: "10rem"
        }
      }
    }
  }
});

const Home = props => {
  console.log("Hey");

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <Grid item md={8}>
          <Link to="/about" className={"link"}>
            {/* <Button>Experience La</Button> */}
          </Link>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Home;
