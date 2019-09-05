import React from "react";
import { Grid, ListItem, List, makeStyles } from "@material-ui/core";
import education from "../../utils/education";

const useStyles = makeStyles({
  item: {
    margin: "auto",
    padding: "5rem",
    height: "20rem",
    width: "80rem"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white"
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
  list: {
    width: "80rem"
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.2rem",
    color: "white"
  }
});

const Education = props => {
  const classes = useStyles();
  return (
    <Grid item md={8} className={classes.item}>
      <List className={classes.list}>
        {education.map((school, idx) => (
          <React.Fragment key={idx}>
            <Grid item md={8} className={classes.header}>
              <ListItem>
                {school.name}, {school.graduated}
              </ListItem>
              <ListItem>{school.degree}</ListItem>
            </Grid>
          </React.Fragment>
        ))}
      </List>
    </Grid>
  );
};

export default Education;
