import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {}
    };
  }
  render() {
    return (
      <Grid
        item
        md={8}
        style={{
          margin: "auto",
          padding: "5rem",
          height: "20rem"
        }}
      >
        <Typography style={{ fontSize: "1rem", color: "white" }}>
          More Skills Needed;
        </Typography>
        <ol className="skills-list">
          <li className="item-list double">
            <i className="fab fa-html5" />
            <h3>HTML</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-css3-alt" />
            <h3>CSS</h3>
          </li>
          <li className="item-list">
            <i className="fas fa-gem" />
            <h3>Ruby on Rails</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-js" />
            <h3>JavaScript</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-java" />
            <h3>Java</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-react" />
            <h3>React/Redux</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-node" />
            <h3>NodeJs</h3>
          </li>
          <li className="item-list">
            <i className="fas fa-database" />
            <h3>MySQL/Postgresql</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-github" />
            <h3>GitHub</h3>
          </li>
          <li className="item-list">
            <i className="fas fa-cloud" />
            <h3>Salesforce</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-hubspot" />
            <h3>Hubspot</h3>
          </li>
          <li className="item-list">
            <i className="fab fa-adobe" />
            <h3>Adobe Photoshop</h3>
          </li>
        </ol>
      </Grid>
    );
  }
}

export default Skills;
