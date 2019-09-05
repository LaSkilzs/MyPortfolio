import React from "react";
import { Grid, List, ListItem, makeStyles } from "@material-ui/core";
import experience from "../../utils/experience";

const useStyles = makeStyles({
  item: {
    margin: "auto",
    padding: "5rem",
    height: "20rem"
  },
  list: {
    fontSize: "1rem",
    color: "white"
  }
});

const Experience = props => {
  const classes = useStyles();
  return (
    <Grid item md={8} className={classes.item}>
      <List className={classes.list}>
        {experience.map((exp, idx) => {
          return (
            <React.Fragment key={idx}>
              <ListItem>{exp.name}</ListItem>
              <ListItem>{exp.type}</ListItem>
              <ListItem>{exp.date}</ListItem>
              <ListItem>{exp.location}</ListItem>
              <ListItem>{exp.position}</ListItem>
              {/* {exp.responsibilities.map(
                  (resp, idx => <ListItem key={idx}>{resp}</ListItem>)
                )}
                {exp.skills.map(
                  (skill, idx => <ListItem key={idx}>{skill}</ListItem>)
                )} */}
            </React.Fragment>
          );
        })}
      </List>
    </Grid>
  );
};

export default Experience;
