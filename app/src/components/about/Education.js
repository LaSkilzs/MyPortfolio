import React from "react";
import {
  Grid,
  ListSubheader,
  ListItem,
  List,
  makeStyles
} from "@material-ui/core";
import education from "../../utils/education";

const useStyles = makeStyles({
  item: {
    margin: "auto",
    padding: "5rem",
    height: "20rem"
  }
});

const Education = props => {
  const classes = useStyles();
  return (
    <Grid item md={8} className={classes.item}>
      <List>
        {education.map((school, idx) => (
          <React.Fragment key={idx}>
            <ListSubheader>school.name</ListSubheader>
            <ListItem>school.degree</ListItem>
            <ListItem>school.image</ListItem>
            <ListItem>school.school</ListItem>
            <ListItem>school.graduated</ListItem>
          </React.Fragment>
        ))}
      </List>
    </Grid>
  );
};

export default Education;
