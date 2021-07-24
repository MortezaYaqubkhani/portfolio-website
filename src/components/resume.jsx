import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import WorkExperience from "./workExperience";
import Skills from "./skills";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} className="resume-left-col">
            <div style={{ textAlign: "center" }}>
              <img
                src="https://image.flaticon.com/icons/png/512/236/236831.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Morteza Yaqubkhani</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              As an international association, the core business of ISOCARP is
              to support its global member community, consisting of individual
              (appx. 750) and institutional members (appx. 40). In your role as
              ‘Graphic and Web designer’ your main tasks will be to prepare all
              creative materials for our annual World Planning Congress in
              November this year, to develop and manage the back-end and
              front-end of the ISOCARP websites, and to provide regular graphic
              design assistance support to the projects and activities of the
              Secretariat.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>address</h5>
            <p>this is the add</p>
            <h5>phone</h5>
            <p>this is the phone</p>
            <h5>email</h5>
            <p>this is email</p>
            <h5>web</h5>
            <p>this is the web</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell col={8} className="resume-right-col">
            <h2>Work Experience</h2>
            <WorkExperience />
            <WorkExperience />
            <WorkExperience />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startSchoolYear={2004}
              endSchoolYear={2008}
              schoolName="Zanjan University"
              schoolDescription="I'm a developer, speaker, and teacher with a passion for web development, design, and developer tools. I have taught tens of thousands of students online/in-person and am excited to share with you."
            />
            <Education
              startSchoolYear={2004}
              endSchoolYear={2008}
              schoolName="Zanjan University"
              schoolDescription="I'm a developer, speaker, and teacher with a passion for web development, design, and developer tools. I have taught tens of thousands of students online/in-person and am excited to share with you."
            />
            <Education
              startSchoolYear={2004}
              endSchoolYear={2008}
              schoolName="Zanjan University"
              schoolDescription="I'm a developer, speaker, and teacher with a passion for web development, design, and developer tools. I have taught tens of thousands of students online/in-person and am excited to share with you."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

{
  /* <i class="fas fa-briefcase"></i> */
}
