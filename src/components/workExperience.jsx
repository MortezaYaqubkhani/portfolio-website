import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class WorkExperience extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          <Grid>
            <Cell col={4}>
              <p>2009 - 2013</p>
            </Cell>
            <Cell col={8}>
              <h4>Abyek Municipality</h4>
              <p>
                In my spare time, I run a YouTube channel, play co-ed soccer
                with my wife, spend time with my dogs, and can solve a Rubik's
                cube in under two minutes.
              </p>
            </Cell>
          </Grid>
        </h1>
      </div>
    );
  }
}

export default WorkExperience;
