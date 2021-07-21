import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            ></img>
            <div className="banner-text">
              <h1>full stack web developer</h1>

              <hr />
              <p>HTML/CSS | Bootstrap | JavaScript | React | Node | Express | MongoDB</p>

              <div className="social-links">

                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
