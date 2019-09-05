import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: {}
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
          My interests are requested..
        </Typography>
        <div className="interest">
          <ol className="skills-list">
            <li className="item-list double">
              <i className="fab fa-bitcoin" />
              <h3>Blockstack/DAPP</h3>
            </li>
            <li className="item-list">
              <i className="fas fa-network-wired" />
              <h3>Systems Engineer</h3>
            </li>
            <li className="item-list">
              <i className="fab fa-aws" />
              <h3>AWS</h3>
            </li>
            <li className="item-list">
              <i className="fas fa-briefcase" />
              <h3>Entreprenuer</h3>
            </li>
          </ol>
          <div className="area-interest">
            <h5>Areas of interests</h5>
            <ol>
              <li>Aging out Youth</li>
              <li>Data Privacy</li>
              <li>Data Solutions</li>
              <li>Small Business Development</li>
              <li>Systems Architecture</li>
            </ol>
            <div className="hobby">
              <ol className="skills-list">
                <li className="item-list double">
                  <i className="fas fa-campground" />
                  <h3>Outdoor Activities</h3>
                </li>
                <li className="item-list">
                  <i className="fas fa-history" />
                  <h3>Enjoy History</h3>
                </li>
                <li className="item-list">
                  <i className="fas fa-paw" />
                  <h3>Pet Lover</h3>
                </li>
                <li className="item-list">
                  <i className="fas fa-running" />
                  <h3>Working Out</h3>
                </li>
              </ol>
              <div className="area-hobby">
                <h2>My Hobbies</h2>
                <p>
                  I like to consider myself very diverse in my hobbies. I am
                  avivd sports enthusiam, having recieve a full athletic
                  scholarship, and winning the MSG Golden Gloves Tournament. In
                  addition, I enjoy being outdoors, hiking,skiing, canoeing and
                  much more. Strategic board games, reading about history are a
                  few things that I enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

export default Interests;
