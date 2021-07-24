import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <p>
              {this.props.startSchoolYear}-{this.props.endSchoolYear}
            </p>
          </Cell>
          <Cell col={8}>
              <h4>{this.props.schoolName}</h4>
            <p>{this.props.schoolDescription}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
